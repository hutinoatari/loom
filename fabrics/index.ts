import { Fabric } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const TopPage: Fabric = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");
    const p = document.createElement("p");
    const text = document.createTextNode("準備中......");
    p.appendChild(text);

    return {
        head: link,
        body: p,
    };
};

export default TopPage;
