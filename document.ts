import { LoomDoc } from "./type.ts";
import Header from "./fibers/Header.ts";

const Document: LoomDoc = async ({
    head,
    body,
}) => {
    return `<html lang="ja"><head>${head}</head><body>${await Header()}<main>${body}</main></body></html>`;
};

export default Document;
