import Document from "./document.ts";
import { ensureFile, ensureDir, walk } from "https://deno.land/std@0.139.0/fs/mod.ts";
import { extname } from "https://deno.land/std@0.139.0/path/mod.ts";

await ensureDir("./dist");
await Deno.remove("./dist", { recursive: true });
const files = walk(`./fabrics`);
for await (const file of files) {
    if (file.isFile) {
        const ext = extname(file.path);
        if (ext === ".ts") {
            import("./" + file.path).then(async (fabric) => {
                const { head, body } = await fabric.default();
                const html = await Document({ head, body });
                const outputPath =
                    file.path.replace("fabrics", "dist").slice(0, -3) + ".html";
                await ensureFile(outputPath);
                await Deno.writeTextFileSync(outputPath, html);
                console.log(`generate ${outputPath}`);
            });
        } else {
            const outputPath = file.path.replace("fabrics", "dist");
            await ensureFile(outputPath);
            await Deno.copyFile(file.path, outputPath);
        }
    }
}
