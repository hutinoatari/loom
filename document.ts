import { LoomDoc } from "./type.ts";

const Document: LoomDoc = async ({
    head,
    body,
}) => {
    return `<html lang="ja"><head>${head}</head><body>${body}</body></html>`;
};

export default Document;
