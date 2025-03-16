"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  description: string
  skills: string[]
  link?: string
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Project Manager",
      company: "ECOPE Informática",
      period: "Abril 2024 - Presente",
      description:
        "Lidero el desarrollo de aplicaciones web y móviles para clientes empresariales. Implementé una arquitectura de microservicios que mejoró el rendimiento en un 40% y reduje los tiempos de despliegue en un 60%.",
      skills: ["React", "NextJS", "Docker", "GraphQL"],
      link: "ecope.es",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "ECOPE Informática",
      period: "Diciembre 2021 - Junio 2024",
      description:
        "Desarrollé soluciones web personalizadas para clientes de diversos sectores. Creé un CMS a medida que aumentó la eficiencia del equipo de contenido en un 35%.",
      skills: ["Vue.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      role: "Desarrollador Web Junior",
      company: "INSTITUTO EUROPEO DE ESTUDIOS EMPRESARIALES SA",
      period: "Marzo 2021 - Junio 2021",
      description:
        "Participé en el desarrollo frontend de aplicaciones web para startups. Implementé mejoras de rendimiento que redujeron el tiempo de carga en un 30%.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      link: "#",
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">
            Mi <span style={{ color: "var(--primary)" }}>Experiencia</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4" style={{ background: "var(--primary)" }}></div>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Mi trayectoria profesional en el desarrollo de software y creación de soluciones digitales.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-5xl mx-auto" // Increased max-width for better spacing
        >
          {/* Línea vertical de la timeline */}
          <div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 z-0"
            style={{ background: "var(--primary)" }}
          ></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative z-10 mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-16 md:text-right md:ml-0 md:mr-auto" // Increased right padding
                  : "md:pl-16 md:ml-auto md:mr-0" // Increased left padding
              } w-full md:w-[45%] pl-16 md:pl-0`} // Increased left padding for mobile and adjusted width
            >
              {/* Punto en la línea de tiempo */}
              {/* <div
                className="absolute top-0 left-8 md:left-auto md:right-0 w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-md"
                style={{
                  background: "var(--card)",
                  border: "3px solid var(--primary)",
                  [index % 2 === 0 ? "md:right" : "md:left"]: "-5.5rem", // Increased distance from center
                }}
              >
                <BriefcaseBusiness className="h-4 w-4" style={{ color: "var(--primary)" }} />
              </div> */}

              {/* Contenido */}
              <div
                className="p-6 rounded-lg shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
                style={{
                  background: "var(--card)",
                  borderLeft: "3px solid var(--primary)",
                  transform: "translateX(0px)", // Added for hover effect
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <span className="font-medium">{exp.company}</span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:underline"
                        style={{ color: "var(--primary)" }}
                      >
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

