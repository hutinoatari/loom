import { Fabric } from "../loom.ts";

const topPage: Fabric = {
    name: "html",
    options: [["lang", "ja"]],
    children: [
        {
            name: "body",
            children: [
                {
                    name: "h1",
                    children: "Sample",
                },
            ],
        },
    ],
};

export default topPage;
