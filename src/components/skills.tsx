"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Globe, Palette, Smartphone, Braces, GitBranch, Terminal, Cloud } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const skills = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      description: "React, Next.js, HTML5, CSS3, Tailwind",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      description: "Node.js, Django, Laravel",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bases de Datos",
      icon: <Database className="h-6 w-6" />,
      description: "MongoDB, PostgreSQL, MySQL, Firebase, MariaDB",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "UI/UX",
      icon: <Palette className="h-6 w-6" />,
      description: "Figma, Responsive Design",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      description: "React Native, Expo",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "APIs",
      icon: <Globe className="h-6 w-6" />,
      description: "REST, GraphQL, WebSockets",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "DevOps",
      icon: <Cloud className="h-6 w-6" />,
      description: "Docker, CI/CD, Vercel",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Testing",
      icon: <Braces className="h-6 w-6" />,
      description: "Jest, PHPUnit",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Control de Versiones",
      icon: <GitBranch className="h-6 w-6" />,
      description: "Git, GitHub, Bitbucket",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "CLI",
      icon: <Terminal className="h-6 w-6" />,
      description: "Bash, npm, yarn, pnpm",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30 w-full mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un conjunto diverso de habilidades técnicas que me permiten abordar proyectos complejos y entregar
            soluciones de alta calidad.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-card hover:bg-card/80 border border-border rounded-lg p-4 text-center transition-all hover:shadow-lg hover:-translate-y-1 colored-shadow flex flex-col items-center h-full"
            >
              <div
                className={`flex justify-center items-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r ${skill.color} text-white`}
              >
                {skill.icon}
              </div>
              <h3 className="font-medium text-base mb-2">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

