import { FabricG, Nozzle } from "../../type.ts";
import Header from "../../fibers/Header.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const TopPage: FabricG = async (path) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const link = document.createElement("link");
    link.setAttribute("href", "../style.css");
    link.setAttribute("rel", "stylesheet");
    const header = await Header();
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`page of ${path}`));

    return {
        head: [link],
        body: [header, p],
    };
};

export const nozzle: Nozzle = async () => {
    return ["a", "b", "c"];
}

export default TopPage;
