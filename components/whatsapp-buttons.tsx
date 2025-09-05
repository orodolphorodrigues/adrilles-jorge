"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappNumbers = [
  {
    region: "São Paulo - Capital",
    number: "5511932406209", // Updated with provided WhatsApp number
    message: "Olá, gostaria de falar com o Vereador Adrilles Jorge sobre São Paulo Capital.",
  },
  {
    region: "Interior/Litoral SP",
    number: "5511932406209", // Updated with provided WhatsApp number
    message: "Olá, gostaria de falar com o Vereador Adrilles Jorge sobre Interior/Litoral SP.",
  },
  {
    region: "Fora de SP",
    number: "5511932406209", // Updated with provided WhatsApp number
    message: "Olá, gostaria de falar com o Vereador Adrilles Jorge.",
  },
]

export default function WhatsAppButtons() {
  const handleWhatsAppClick = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Fale Conosco pelo WhatsApp</h2>
        <p className="text-lg mb-8 text-muted-foreground">Escolha sua região para um atendimento mais direcionado</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          {whatsappNumbers.map((contact, index) => (
            <Button
              key={index}
              onClick={() => handleWhatsAppClick(contact.number, contact.message)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 min-w-[200px]"
            >
              <MessageCircle className="h-5 w-5" />
              {contact.region}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
