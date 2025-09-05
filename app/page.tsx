import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import WhatsAppButtons from "@/components/whatsapp-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <WhatsAppButtons />
    </main>
  )
}
