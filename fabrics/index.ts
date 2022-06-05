import { Fabric } from "../type.ts";
import Header from "../fibers/Header.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const TopPage: Fabric<{}> = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");
    const header = await Header();
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("準備中......"));

    return {
        head: [link],
        body: [header, p],
    };
};

export default TopPage;
