//@deno-types="https://cdn.esm.sh/v77/@types/react@18.0.9/react.d.ts"
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import {
    ensureDir,
    ensureFile,
    walk,
} from "fs/mod.ts";
import { format, parse } from "path/mod.ts";

const fromDir = "pages";
const toDir = "dist";

await ensureDir(toDir);
await Deno.remove(toDir, { recursive: true });
const files = walk(fromDir);
for await (const file of files) {
    if (!file.isFile) continue;
    const { root, dir, ext, name } = parse(file.path);
    if (ext !== ".tsx") {
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
    const { default: Page } = await import(`./${file.path}`);
    const outputPath = format({
        root,
        dir: dir.replace(fromDir, toDir),
        ext: ".html",
        name,
    });

    const html = "<!DOCTYPE html>" + renderToStaticMarkup(<Page></Page>);
    await ensureFile(outputPath);
    await Deno.writeTextFileSync(outputPath, html);
    console.log(`generate: ${outputPath}`);
}
