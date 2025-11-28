// src/app/page.tsx   ← 全部覆蓋貼上這段（最終完美版）
"use client"

import { Button } from "../components/ui/button"
import { ModeToggle } from "../components/ui/mode-toggle"
import { Card } from "../components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { ArrowRight, Sparkles, Palette, Zap, Mail, Github, Linkedin, Send, ExternalLink, Figma } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { InstagramLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            陳毓欣
          </h1>
          <ModeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, 我是 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">大麻</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              UI/UX Designer × Front-end Developer<br />
              熱愛把複雜變簡單，把普通變驚豔
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2" onClick={() => scrollToSection(portfolioRef)}>
                查看作品 <ArrowRight className="w-5 h-5" />
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg" variant="outline">聯絡我</Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-lg p-6 sm:p-8">
                  <SheetHeader className="mb-8 text-left">
                    <SheetTitle className="text-2xl">傳送訊息給大麻</SheetTitle>
                    <SheetDescription className="text-base text-muted-foreground">
                      有任何合作、面試、聊天都很歡迎！我通常 24 小時內會回覆～
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" placeholder="ㄐㄐ" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="hi@example.com" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">訊息內容</Label>
                      <Textarea 
                        id="message" 
                        placeholder="你好大麻，我想跟你聊..." 
                        className="min-h-36 resize-none" 
                      />
                    </div>
                    
                    <Button size="lg" className="w-full gap-2 text-base font-medium">
                      <Send className="w-4 h-4" /> 傳送訊息
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section ref={aboutRef} className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">關於我</h2>
            <p className="text-lg leading-8 text-muted-foreground text-center">
              嗨！我是大麻，目前是自由接案的 UI/UX 設計師兼前端工程師。
              我擅長用 Figma 做出高保真原型，也能親手用 React / Next.js 把設計 100% 實作出來。
              熱愛動畫、微交互、暗黑模式、以及一切讓人「哇！」的細節。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 特色卡片 */}
      <section ref={portfolioRef} className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">作品集</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "a", 
              tags: ["b", "c", "d"], 
              color: "from-purple-500 to-pink-500",
              link: "https://你的作品連結" 
            },
            { 
              title: "a", 
              tags: ["b", "c", "d"], 
              color: "from-blue-500 to-cyan-500",
              link: "https://你的作品連結" 
            },
            { 
              title: "個人品牌網站", 
              tags: ["Next.js", "動畫", "2025"], 
              color: "from-green-500 to-emerald-500",
              link: "https://onyx0824.github.io/"
            },
          ].map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all group-hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-primary/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="gap-2 group">
                    查看專案 <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Button>
                </div>
              </Card>
            </motion.a>
          ))}
          </div>
        </div>
      </section>

      {/* Footer + 社群連結 */}
      <footer className="py-16 px-6 border-t bg-muted/50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:chenyuxin821@gmail.com" className="hover:text-primary transition"><Mail className="w-6 h-6" /></a>
            <a href="https://github.com/Onyx0824" target="_blank" className="hover:text-primary transition"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/%E6%AF%93%E6%AC%A3-%E9%99%B3-163581387" target="_blank" className="hover:text-primary transition"><Linkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/onyx0824/" className="hover:text-primary transition"><InstagramLogoIcon className="w-6 h-6" /></a>
          </div>
          <p className="text-muted-foreground">© 2025 陳毓欣（大麻）. 用愛與 Next.js 製作</p>
        </div>
      </footer>
    </div>
  )
}