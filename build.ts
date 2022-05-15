import Document from "./fabrics/_document.ts";

const filename = "index";
import(`./fabrics/${filename}.ts`).then(async (fab) => {
    console.log(fab)
    const {head, body} = await fab.default();
    const html = await Document({head, body});
    await Deno.writeTextFileSync(`./dist/${filename}.html`, html);
})