import "@/styles/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PokemSim",
  description: "Bem vindo ao site PokemSim",
  keywords: "Pokémon, jogo, simulação, jogos, entretenimento, Pokémon Api",
  authors: [{name: "Simões", url: "https://google.com"}],
  openGraph: {
    title: "PokemSim",
    description: "Bem vindo ao site PokemSim",
    url: "https://google.com", // URL do seu site
    siteName: "PokemSim",
    images: [
      {
        url: "https://google.com/imagem.jpg", // URL da imagem para o Open Graph
        width: 800,
        height: 600,
        alt: "pokemon",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@seutwitter", // Seu Twitter
    title: "PokemSim",
    description: "Bem vindo ao site PokemSim",
    image: "https://google.com/imagem.jpg", // Imagem do Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar/>
        <main className="mainContainer">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
