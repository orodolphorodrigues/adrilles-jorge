"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo: "", // Added tipo field for apoio/demanda selection
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ nome: "", email: "", telefone: "", tipo: "", mensagem: "" }) // Reset tipo field
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center uppercase">DEIXE SUA MENSAGEM</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-3">
                <Label>Tipo de mensagem</Label>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="apoio"
                      name="tipo"
                      value="apoio"
                      checked={formData.tipo === "apoio"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <Label htmlFor="apoio" className="text-sm font-normal cursor-pointer">
                      Apoio
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="demanda"
                      name="tipo"
                      value="demanda"
                      checked={formData.tipo === "demanda"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <Label htmlFor="demanda" className="text-sm font-normal cursor-pointer">
                      Demanda
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">
                  {formData.tipo === "demanda"
                    ? "Por favor, descreva tudo com detalhes e insira o endereço completo."
                    : "Mensagem"}
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                  <CheckCircle className="h-5 w-5" />
                  <span>Mensagem enviada com sucesso!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircle className="h-5 w-5" />
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
