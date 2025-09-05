import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adrilles-HaVwezLWSYtzC7Dpil382qJc7YxjyH.jpeg"
        alt="Banner oficial do Vereador Adrilles Jorge"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Adrilles Jorge</h1>
        <p className="text-xl md:text-2xl text-balance">Trabalhando por São Paulo com valores cristãos</p>
      </div>
    </section>
  )
}
