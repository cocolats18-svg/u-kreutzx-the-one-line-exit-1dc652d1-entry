// The One-Line Exit — writes a single-line resignation letter to /output/entry.txt.
// The file holds exactly the line, no trailing newline, so the gate counts
// only the letter itself (97 chars, limit 140) and the judge sees one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear Manager, I resign as your Excel guy — the spreadsheet has unionized, and frankly, so have I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
