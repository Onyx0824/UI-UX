// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // 這行超重要！告訴 Next.js 要輸出純靜態檔案
  trailingSlash: true,        // 讓 GitHub Pages 正確跳轉
  images: {
    unoptimized: true         // GitHub Pages 不支援 Next.js Image 優化
  }
}

export default nextConfig