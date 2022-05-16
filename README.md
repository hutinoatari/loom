# Loom

## ビルド

`deno task build`

## デプロイ

| BUILD COMMAND |
`curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.21.3 && /vercel/.deno/bin/deno run --allow-read --allow-write ./build.ts`|
| OUTPUT DIRECTORY | `dist` |

## ディレクトリ構成

| 名前          | 役割      |
| ----------- | ------- |
| fibers/     | コンポーネント |
| fabrics/    | ページ     |
| dist/       | ビルド先    |
| document.ts | 共通設定    |
| type.ts     | ページなどの型 |

画像やCSSもfabrics/に置く。
