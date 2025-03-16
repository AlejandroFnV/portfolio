"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Hammer, Clock, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toogle"

export default function Construction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Fecha de lanzamiento (ejemplo: 30 días a partir de ahora)
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header con toggle de tema */}
      <header className="w-full py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Alejandro Fernández Valdivia
          </span>
        </div>
        <ModeToggle />
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_40%)]"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full text-center space-y-10"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Hammer className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Sitio en <span className="text-primary">construcción</span>
            </h1>
            {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos trabajando duro para ofrecerte una experiencia increíble. ¡Vuelve pronto para ver el resultado!
            </p> */}
          </motion.div>

          {/* <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-semibold">Lanzamiento en</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TimeBlock label="Días" value={timeLeft.days} />
              <TimeBlock label="Horas" value={timeLeft.hours} />
              <TimeBlock label="Minutos" value={timeLeft.minutes} />
              <TimeBlock label="Segundos" value={timeLeft.seconds} />
            </div>
          </motion.div> */}

          {/* <motion.div variants={itemVariants} className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2 group">
                <Mail className="h-4 w-4 group-hover:animate-bounce" />
                <span>Contactar</span>
              </Button>
              <Button variant="outline" className="gap-2">
                <Clock className="h-4 w-4" />
                <span>Notificarme</span>
              </Button>
            </div>
          </motion.div> */}

          {/* <motion.div variants={itemVariants} className="pt-8">
            <h3 className="text-lg font-medium mb-4">Sígueme en redes</h3>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary/10 border border-border p-3 rounded-full text-primary hover:text-primary transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary/10 border border-border p-3 rounded-full text-primary hover:text-primary transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div> */}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alejandro Fernández Valdivia. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}