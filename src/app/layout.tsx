// src/app/layout.tsx  ← 全部覆蓋貼上這段
import type { Metadata } from "next"
import { Inter } from "next/font/google"   // 改用 Inter（最穩）
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "陳毓欣（大麻）・ UI/UX Designer & Front-end Developer",
  description: "UI/UX Designer × Front-end Developer，熱愛動畫與極致細節",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}