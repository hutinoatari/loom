import {
    ensureDir,
    ensureFile,
    walk,
} from "https://deno.land/std@0.139.0/fs/mod.ts";
import { format, parse } from "https://deno.land/std@0.139.0/path/mod.ts";
import { Page } from "./document.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const fromDir = "fabrics";
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
    const document = new DOMParser().parseFromString("", "text/html");
    const { default: fabric, nozzle } = await import(`./${file.path}`);
    if (nozzle) {
        const ids = await nozzle();
        for await (const id of ids) {
            const outputPath = format({
                root,
                dir: dir.replace(fromDir, toDir),
                ext: ".html",
                name: id,
            });
            const { head, body } = await fabric({ currentURL: outputPath, id });
            const htmlPart = await Page({ head, body });
            const div = document.createElement("div");
            div.appendChild(htmlPart);
            const html = "<!DOCTYPE html>" + div.innerHTML;
            await ensureFile(outputPath);
            await Deno.writeTextFileSync(outputPath, html);
            console.log(`generate: ${outputPath}`);
        }
    } else {
        const outputPath = format({
            root,
            dir: dir.replace(fromDir, toDir),
            ext: ".html",
            name,
        });
        const { head, body } = await fabric({ currentURL: outputPath });
        const htmlPart = await Page({ head, body });
        const div = document.createElement("div");
        div.appendChild(htmlPart);
        const html = "<!DOCTYPE html>" + div.innerHTML;
        await ensureFile(outputPath);
        await Deno.writeTextFileSync(outputPath, html);
        console.log(`generate: ${outputPath}`);
    }
}
