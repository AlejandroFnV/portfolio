"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["frontend", "backend", "fullstack"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Panel de control interactivo para visualizar datos empresariales con gráficos en tiempo real.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["frontend", "data"],
      tech: ["Vue.js", "D3.js", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "App de Gestión de Tareas",
      description: "Aplicación móvil para gestionar tareas con notificaciones y sincronización en la nube.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["mobile", "backend"],
      tech: ["React Native", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Plataforma de Aprendizaje",
      description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y certificaciones.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["fullstack", "frontend"],
      tech: ["Next.js", "Django", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "API de Microservicios",
      description: "Arquitectura de microservicios para procesamiento de datos a gran escala.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["backend", "api"],
      tech: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Portfolio Creativo",
      description: "Portfolio interactivo con animaciones y experiencia de usuario única.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["frontend", "design"],
      tech: ["React", "Three.js", "GSAP"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web y móvil.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            Todos
          </Button>
          <Button
            variant={filter === "frontend" ? "default" : "outline"}
            onClick={() => setFilter("frontend")}
            className="rounded-full"
          >
            Frontend
          </Button>
          <Button
            variant={filter === "backend" ? "default" : "outline"}
            onClick={() => setFilter("backend")}
            className="rounded-full"
          >
            Backend
          </Button>
          <Button
            variant={filter === "fullstack" ? "default" : "outline"}
            onClick={() => setFilter("fullstack")}
            className="rounded-full"
          >
            Full Stack
          </Button>
          <Button
            variant={filter === "mobile" ? "default" : "outline"}
            onClick={() => setFilter("mobile")}
            className="rounded-full"
          >
            Mobile
          </Button>
          <Button
            variant={filter === "design" ? "default" : "outline"}
            onClick={() => setFilter("design")}
            className="rounded-full"
          >
            Diseño
          </Button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

