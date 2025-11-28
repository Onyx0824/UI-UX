// src/app/providers.tsx
"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange  // 這行是王道！消除閃爍跟警告
    >
      {children}
    </ThemeProvider>
  )
}