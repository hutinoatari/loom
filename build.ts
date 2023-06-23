import { ensureDir, ensureFile, walk } from "fs/mod.ts";
import { format, parse } from "path/mod.ts";
import { fabricToHTML } from "./loom.ts";

const fromDir = "pages";
const toDir = "dist";

await ensureDir(toDir);
await Deno.remove(toDir, { recursive: true });
const files = walk(fromDir);
for await (const file of files) {
    if (!file.isFile) continue;
    const { root, dir, ext, name } = parse(file.path);
    if (ext !== ".ts") {
        const outputPath = format({
            root,
            dir: dir.replace(fromDir, toDir),
            ext,
            name,
        });
        await ensureFile(outputPath);
        await Deno.copyFile(file.path, outputPath);
        console.log(`copied  : ${outputPath}`);
        continue;
    }
    const { default: page } = await import(`./${file.path}`);
    const outputPath = format({
        root,
        dir: dir.replace(fromDir, toDir),
        ext: ".html",
        name,
    });

    const html = `<!DOCTYPE html>${fabricToHTML(page).outerHTML}`;
    await ensureFile(outputPath);
    await Deno.writeTextFileSync(outputPath, html);
    console.log(`generate: ${outputPath}`);
}
