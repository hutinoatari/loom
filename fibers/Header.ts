import {Fiber} from "../type.ts";

const Header: Fiber<{}> = async () => {
    return `<header>ヘッダー</header>`;
}

export default Header;