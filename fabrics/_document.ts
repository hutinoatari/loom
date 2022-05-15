import {LoomDoc} from "../type.ts";
import Header from "../fibers/Header.ts";

const Document: LoomDoc = async ({
    head,
    body,
}) => {
    const header = await Header();
    return `<html lang="ja"><head>${head}</head><body>${header}<main>${body}</main></body></html>`;
}

export default Document;