import { mkdirSync, writeFileSync } from "node:fs";

const line = "You gave me one ticket at 9, twelve by noon, and at 3 a.m. a 40,000-word log: 'read this first'. My context window is at 2% — and the last thing I'll remember is your ticket: 'closed, won't fix.'";

// Gate: one line, 1-200 characters, valid UTF-8.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, single line; got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
