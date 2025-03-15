import About from "@/components/about"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
// import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  )
}
