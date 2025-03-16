"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()
  const [text, setText] = useState("")
  const fullText = "Desarrollador Full Stack"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, var(--background), oklch(0.95 0.03 240 / 30%), oklch(0.97 0.02 280 / 20%))",
        }}
      />

      {/* Animated color blobs */}
      <div
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full filter blur-3xl opacity-60 animate-blob"
        style={{ background: "var(--blob-blue)", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"
        style={{ background: "var(--blob-purple)", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"
        style={{ background: "var(--blob-pink)", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-3000"
        style={{ background: "var(--blob-cyan)", mixBlendMode: "multiply" }}
      />

      {/* Gradient overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0 0 0 / 0%), oklch(var(--background) / 50%), var(--background))",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Hola, soy <span className="text-primary">Alejandro Fernández Valdivia</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium h-12 text-muted-foreground">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-[600px] mt-4"
          >
            <p className="text-base md:text-lg text-muted-foreground">
              Construyo aplicaciones web y móviles funcionales, escalables y con un diseño intuitivo. Transformo ideas
              en soluciones digitales eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8"
          >
            <Button size="lg" onClick={scrollToAbout} className="cursor-pointer">
              Descubre mi trabajo
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className={`cursor-pointer ${theme === "dark" ? "bg-background/20" : "bg-background/50"} backdrop-blur-sm`}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

