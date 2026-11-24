import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word for the Boss: exactly one word describing the boss.
// "PerMyLastEmail" beats "Micromanager": it is a specific boss behavior
// everyone recognizes, packed into one token.
const WORD = "PerMyLastEmail";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
