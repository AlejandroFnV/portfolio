"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import CvBtn from "./cv-btn"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-black">
              <Image src="/images/me.JPG" alt="Tu Nombre" fill className="object-cover" />
            </div>
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Sobre <span className="text-primary">Mí</span>
            </h2>

            <div className="w-20 h-1 bg-primary"></div>

            <p className="text-muted-foreground">
              Soy un desarrollador Full Stack apasionado con experiencia en la creación de aplicaciones web y móviles
              completas. Mi enfoque combina habilidades técnicas sólidas con un ojo para el diseño, permitiéndome
              construir soluciones que no solo funcionan perfectamente sino que también ofrecen experiencias de usuario
              excepcionales.
            </p>

            <p className="text-muted-foreground">
              Con experiencia en tecnologías frontend como React, Next.js y Vue.js, así como en backend con Node.js,
              Express, Django y bases de datos SQL/NoSQL, puedo manejar todos los aspectos del desarrollo de
              aplicaciones modernas.
            </p>

            <div className="pt-4">
              <CvBtn className="group cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

