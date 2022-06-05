import { document, Fiber } from "../loom.ts";

const Header: Fiber = async () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("Title");
    h1.appendChild(h1Text);
    header.appendChild(h1);
    return header;
};

export default Header;
