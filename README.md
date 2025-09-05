# Site do Vereador Adrilles Jorge

Site oficial do Vereador Adrilles Jorge, desenvolvido com Next.js 15 e integração com Baserow.

## Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seção sobre o vereador
- ✅ Projetos oficiais com imagens
- ✅ Formulário de contato integrado com Baserow
- ✅ Botões de WhatsApp por região
- ✅ Navegação suave entre seções
- ✅ Validação de formulário
- ✅ Feedback visual para o usuário

## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Backend**: Next.js API Routes
- **Database**: Integração com Baserow

## Como Rodar Localmente

1. **Clone o repositório**
   \`\`\`bash
   git clone <url-do-repositorio>
   cd adrilles-jorge-website
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure as variáveis de ambiente**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Edite o arquivo `.env.local` com suas configurações.

4. **Execute o projeto**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Acesse no navegador**
   Abra [http://localhost:3000](http://localhost:3000)

## Deploy no Vercel

1. **Conecte com GitHub**
   - Faça push do código para um repositório no GitHub
   - Conecte sua conta Vercel ao GitHub

2. **Configure o projeto no Vercel**
   - Importe o repositório no Vercel
   - Configure as variáveis de ambiente no painel do Vercel
   - Deploy automático será executado

3. **Variáveis de ambiente necessárias**
   \`\`\`
   BASEROW_TOKEN=seu_token_aqui
   BASEROW_ENDPOINT=seu_endpoint_aqui
   \`\`\`

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── api/send-message/route.ts    # API para envio de mensagens
│   ├── globals.css                  # Estilos globais
│   ├── layout.tsx                   # Layout principal
│   └── page.tsx                     # Página inicial
├── components/
│   ├── ui/                          # Componentes UI base
│   ├── about.tsx                    # Seção sobre
│   ├── contact.tsx                  # Formulário de contato
│   ├── hero.tsx                     # Banner principal
│   ├── navigation.tsx               # Menu de navegação
│   ├── projects.tsx                 # Projetos oficiais
│   └── whatsapp-buttons.tsx         # Botões WhatsApp
├── .env.example                     # Exemplo de variáveis
├── .gitignore                       # Arquivos ignorados
├── package.json                     # Dependências
└── README.md                        # Documentação
\`\`\`

## Personalização

### Números do WhatsApp
Edite o arquivo `components/whatsapp-buttons.tsx` e substitua os números de exemplo pelos números reais.

### Imagens dos Projetos
As imagens são geradas automaticamente via placeholder. Para usar imagens personalizadas, substitua as URLs no arquivo `components/projects.tsx`.

### Configuração do Baserow
Certifique-se de configurar corretamente as variáveis `BASEROW_TOKEN` e `BASEROW_ENDPOINT` no seu ambiente de produção.

## Suporte

Para dúvidas ou problemas, entre em contato através do formulário do site ou pelos canais oficiais do gabinete.
