"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulación de envío
    setTimeout(() => {
      console.log(formData)
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Resetear después de 3 segundos
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Contacta <span className="text-primary">Conmigo</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance y oportunidades a tiempo
            completo.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground/90">Información de Contacto</h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full text-primary shadow-sm">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <a
                        href="mailto:alejandrofnv@gmail.com"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        alejandrofnv@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full text-primary shadow-sm">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Teléfono</p>
                      <a
                        href="tel:+34689343240"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        +34 689 34 32 40
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full text-primary shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Ubicación</p>
                      <p className="font-medium text-foreground">Granada, España</p>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-10">
                  <h3 className="text-xl font-semibold mb-5 text-foreground/90">Sígueme</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/AlejandroFnV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-primary/10 border border-border p-3 rounded-full text-primary hover:text-primary transition-colors shadow-sm"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/alejandro-fernandez-valdivia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-primary/10 border border-border p-3 rounded-full text-primary hover:text-primary transition-colors shadow-sm"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground/90">Envíame un mensaje</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="¿De qué quieres hablar?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto relative overflow-hidden group"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    >
                      {formStatus === "idle" && (
                        <>
                          <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}

                      {formStatus === "submitting" && (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      )}

                      {formStatus === "success" && (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>¡Enviado!</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

