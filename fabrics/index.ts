import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";

const TopPage: Fabric<{}> = async ({ currentURL }) => {
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");
    const header = await Header(currentURL);
    const p = document.createElement("p");
    p.textContent = "準備中......";

    return {
        head: [link],
        body: [header, p],
    };
};

export default TopPage;
