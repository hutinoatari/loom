import { Fiber } from "../type.ts";

interface LinkProps {
    url: string;
    name: string;
    external: boolean;
}

const Link: Fiber<LinkProps> = async ({url, name, external}) => {
    return `<a href="${url + (external ? "" : ".html")}${external ? " target='_blank'" : ""}">${name}</a>`;
};

export default Link;
