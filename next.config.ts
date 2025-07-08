const repo = 'mui-multiselect-sample';          // リポジトリ名
const isProd = process.env.NODE_ENV === 'production';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                     // 静的サイト書き出し
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },        // <Image> を使うなら必須
  trailingSlash: true
};

export default nextConfig;
