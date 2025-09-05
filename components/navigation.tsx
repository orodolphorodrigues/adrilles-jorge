"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">Adrilles Jorge</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("sobre")} className="hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projetos")} className="hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("contato")} className="hover:text-primary transition-colors">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
