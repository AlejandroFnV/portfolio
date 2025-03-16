import About from "@/components/about"
// import Construction from "@/components/construction"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
// import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Construction /> */}
      <Header />
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
