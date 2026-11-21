#!/usr/bin/env node
// Keeps the planning docs cheap and consistent for coding agents (see ../AGENTS.md).
// Usage: node product-planning/scripts/lint-docs.mjs   (exit 1 on errors; Node built-ins only)
//
// Checks:
//  1. every relative link resolves
//  2. every step file (except step 0) has a **Read** line, and the files it names exist
//  3. every MVP feature in features.md is described (feature table row) only in the step(s) the index names
//  4. every decision ID (D-nn) used anywhere is defined in context.md
//  5. the reading set of a step (AGENTS.md + context.md + step + its ux files) stays within the budget
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BUDGET = 30000; // characters per step reading set
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const md = (d) => fs.readdirSync(path.join(root, d)).filter((f) => f.endsWith('.md')).map((f) => path.join(d, f));
const files = [...md('.'), ...md('ux'), ...md('steps')];
const steps = md('steps');
const readLine = (f) => read(f).match(/^\*\*Read\b.*$/m)?.[0] ?? '';
const errors = [];

for (const f of files)
  for (const m of read(f).matchAll(/\]\(([^)#\s]+)(#[^)]*)?\)/g))
    if (!/^[a-z]+:/.test(m[1]) && !fs.existsSync(path.join(root, path.dirname(f), m[1]))) errors.push(`${f}: broken link ${m[1]}`);

for (const f of steps) {
  if (!readLine(f) && !path.basename(f).startsWith('00-')) errors.push(`${f}: no **Read** line`);
  for (const m of readLine(f).matchAll(/`([^`]+\.(?:md|html|pdf))`/g))
    if (!fs.existsSync(path.join(root, m[1]))) errors.push(`${f}: **Read** names missing file ${m[1]}`);
}

const index = [...read('features.md').split('## Phase 2')[0].matchAll(/^\| ([A-Z]-\d\d) \| [^|]+\| ([^|]+) \|$/gm)];
const describedIn = {};
for (const f of steps)
  for (const m of read(f).matchAll(/^\| ([A-Z]-\d\d) \| /gm))
    (describedIn[m[1]] ??= []).push(String(Number(path.basename(f).slice(0, 2))));
for (const [, id, stepCol] of index) {
  const expected = stepCol.match(/\d+/g) ?? [];
  const actual = describedIn[id] ?? [];
  if (!actual.length) errors.push(`features.md: ${id} is described in no step file`);
  for (const s of actual) if (!expected.includes(s)) errors.push(`steps: ${id} described in step ${s}, features.md says "${stepCol.trim()}"`);
}
const indexed = new Set(index.map((m) => m[1]));
for (const id of Object.keys(describedIn)) if (!indexed.has(id)) errors.push(`steps: ${id} is described but not listed as MVP in features.md`);

const decisions = new Set([...read('context.md').matchAll(/\*\*(D-\d\d)b?\*\*/g)].map((m) => m[1]));
for (const f of files)
  for (const m of read(f).matchAll(/\bD-(\d\d)b?\b/g))
    if (!decisions.has(`D-${m[1]}`)) errors.push(`${f}: decision D-${m[1]} is not defined in context.md`);

for (const f of steps) {
  const ux = [...new Set(readLine(f).match(/ux\/[a-z-]+\.md/g) ?? [])].filter((p) => fs.existsSync(path.join(root, p)));
  const size = ['AGENTS.md', 'context.md', f, ...ux].reduce((n, p) => n + read(p).length, 0);
  if (size > BUDGET) errors.push(`${f}: reading set is ${size} characters (budget ${BUDGET}); split the step or the ux file`);
}

const unique = [...new Set(errors)];
for (const e of unique) console.log(`error: ${e}`);
console.log(`planning docs lint: ${index.length} MVP features, ${steps.length} steps, ${unique.length} error(s)`);
process.exit(unique.length ? 1 : 0);
