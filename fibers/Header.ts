import { document, Fiber } from "../loom.ts";
import InternalLink from "./InternalLink.ts";

const Header: Fiber = async (currentURL: string) => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Title";
    const ul = document.createElement("ul");
    const from = currentURL.slice(4);
    [
        {
            from,
            to: "/index.html",
            name: "TOP",
        },
    ].forEach(async (e) => {
        const li = document.createElement("li");
        const a = await InternalLink(e);
        li.appendChild(a);
        ul.appendChild(li);
    });
    header.appendChild(h1);
    header.appendChild(ul);
    return header;
};

export default Header;
