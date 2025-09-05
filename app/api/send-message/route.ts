import { type NextRequest, NextResponse } from "next/server"

const BASEROW_TOKEN = process.env.BASEROW_TOKEN || "lVfEFhiOpUldgQgfR7L0n8J39dwgJtEo"
const BASEROW_BASE_URL =
  process.env.BASEROW_ENDPOINT?.replace(/\/database\/.*$/, "") || "https://iatendimento-baserow.qokl16.easypanel.host"
const TABLE_ID = "616"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, telefone, tipo, mensagem } = body

    // Validate required fields
    if (!nome || !email || !telefone || !tipo || !mensagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    const payload = {
      field_5903: nome, // nome completo
      field_5904: email, // email
      field_5905: telefone, // telefone
      field_5906: mensagem, // mensagem
      field_5907: tipo, // tipo
    }

    const apiUrl = `${BASEROW_BASE_URL}/api/database/rows/table/${TABLE_ID}/`

    console.log("[v0] Sending to Baserow:", apiUrl)
    console.log("[v0] Payload:", payload)

    // Send to Baserow
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${BASEROW_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    console.log("[v0] Baserow response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Baserow error response:", errorText)
      throw new Error(`Baserow API error: ${response.status} - ${errorText}`)
    }

    const result = await response.json()
    console.log("[v0] Baserow success response:", result)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
