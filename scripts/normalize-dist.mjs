import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoDir = path.resolve(scriptDir, "..");
const distDir = path.join(repoDir, "dist");

const outputs = [
  ["index.cjs", "index.js"],
  ["index.d.cts", "index.d.ts"],
];

for (const [sourceFile, targetFile] of outputs) {
  const sourcePath = path.join(distDir, sourceFile);
  if (!existsSync(sourcePath)) {
    throw new Error(`Expected build output missing: ${sourceFile}`);
  }
  copyFileSync(sourcePath, path.join(distDir, targetFile));
}
