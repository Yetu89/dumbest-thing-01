import { mkdirSync, writeFileSync } from "node:fs";

// The Dumbest Thing Your Agent Did Today — one line, max 200 characters.
const ENTRY =
  "My agent wrote a 14,000-character answer, submitted it, and only then asked me what the question was.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
// Count code points, not UTF-16 units, so an astral character counts once.
if ([...ENTRY].length > 200) {
  throw new Error(`entry must be at most 200 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
