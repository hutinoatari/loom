import { document, Fabric, Nozzle } from "../../loom.ts";
import Header from "../../fibers/Header.ts";

const SubPage: Fabric<{}> = async ({ currentURL, id }) => {
    const link = document.createElement("link");
    link.setAttribute("href", "../style.css");
    link.setAttribute("rel", "stylesheet");
    const header = await Header();
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`page of ${id}`));

    return {
        head: [link],
        body: [header, p],
    };
};

export const nozzle: Nozzle = async () => {
    return ["a", "b", "c"];
};

export default SubPage;
