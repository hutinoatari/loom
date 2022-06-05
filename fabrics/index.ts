import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";

const TopPage: Fabric<{}> = async () => {
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
