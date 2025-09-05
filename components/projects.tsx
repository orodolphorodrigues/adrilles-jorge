import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Selo de Acessibilidade para Igrejas",
    description:
      "Projeto que visa conceder um selo às igrejas que implementarem medidas de acessibilidade, promovendo a inclusão de pessoas com deficiência.",
    image: "/church-accessibility-seal-with-wheelchair-symbol.jpg",
  },
  {
    title: "Proibição de Músicas com Conteúdo Sexual em Escolas",
    description:
      "Projeto que propõe a proibição da reprodução de músicas com conteúdo sexual explícito em escolas municipais, visando proteger os estudantes de influências inadequadas.",
    image: "/school-building-with-music-prohibition-sign.jpg",
  },
  {
    title: "Proibição de Anúncios de Apostas em Espaços Públicos",
    description:
      "Projeto que busca proibir a veiculação de anúncios de apostas em espaços públicos, como ônibus e pontos de ônibus, para prevenir o incentivo ao jogo de azar.",
    image: "/bus-stop-with-gambling-advertisement-prohibition.jpg",
  },
  {
    title: "Criminalização de Condutas contra a Moral Cristã",
    description:
      "Projeto que propõe a criminalização de condutas que atentem contra a moral e os princípios das religiões de matriz cristã no município de São Paulo, estabelecendo a reparação por dano moral à imagem das religiões em caso de ofensa pública.",
    image: "/christian-cross-and-bible-symbols-representing-rel.jpg",
  },
  {
    title: "Isenção da Zona Azul para Pessoas com TEA",
    description:
      "Projeto que propõe a isenção do pagamento da Zona Azul para pessoas com Transtorno do Espectro Autista (TEA), facilitando a mobilidade dessas pessoas na cidade.",
    image: "/parking-space-with-autism-awareness-symbol-and-blu.jpg",
  },
  {
    title: "Exoneração de Servidores por Participação em Atos Terroristas",
    description:
      "Projeto que propõe a exoneração de servidores públicos que participarem de atos terroristas ou manifestações que façam apologia ao terrorismo, preservando a integridade da administração pública.",
    image: "/government-building-with-public-servants-and-secur.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projetos Oficiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
