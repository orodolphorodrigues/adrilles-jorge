import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Vereador Adrilles Jorge - São Paulo",
  description: "Site oficial do Vereador Adrilles Jorge. Conheça seus projetos e entre em contato.",
  keywords: "Adrilles Jorge, vereador, São Paulo, projetos, política, valores cristãos",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body>
        <Navigation />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
