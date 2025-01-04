
import { getAnimation } from "@/app/actions/getAnimation";
import { getMovies } from "@/app/actions/getMovies";
import { getSeries } from "@/app/actions/getSeries";
import { Card } from "@/app/components/card";
import { Footer } from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Title from "@/app/components/title";

export default async function Home() {
  const filmes: Array<Filme> = await getMovies()
  const series: Array<Serie> = await getSeries()
  const animation: Array<Animation> = await getAnimation()
  return (
    <div className="flex min-h-screen flex-col  ">
      <Navbar />
      <Title> Filmes em Alta</Title>
      <section className="flex flex-wrap gap-6 m-4">
        {filmes.map(item => <Card key={item.id} item={item} />)}
      </section>
      <Title> Séries</Title>
      <section className="flex flex-wrap gap-6 m-4">
        {series.map(item => <Card key={item.id} item={item} />)}
      </section>
      <Title>Filmes de Animação</Title>
      <section className="flex flex-wrap gap-6 m-4">
        
      </section>
      <Title> Favoritos</Title>
      <Footer />
    </div>

  );
}
