import { Fiber } from "../type.ts";
import Link from "./Link.ts";

const Header: Fiber<undefined> = async () => {
    return `<header><h1>ヘッダー</h1><nav>${await Link({url: "index", name: "TOP", external: false})}</nav></header>`;
};

export default Header;
