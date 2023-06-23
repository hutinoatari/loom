# Loom

## ビルド

`deno task build`

## デプロイ(Vercel)

`curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.21.3 && /vercel/.deno/bin/deno run --allow-read --allow-write ./build.ts`

## ディレクトリ構成

| 名前    | 役割           |
| ------- | -------------- |
| pages/  | ページ         |
| datas/  | データ         |
| dist/   | ビルド先       |
| loom.ts | ページなどの型 |

画像やCSSもfabrics/に置く。

## パスの展開

~~ `nozzle()`がexportされている場合はパスが展開される。 ~~
