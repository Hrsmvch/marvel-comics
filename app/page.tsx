import Hero from "@/components/Hero/Hero";
import ComicsList from "@/components/ComicsList/ComicsList";
import { fetchComics } from "./action";
import listStyles from '../components/ComicsList/styles.module.scss'

async function Home() {
  const data = await fetchComics(1); 

  return (
    <main>
      <Hero /> 
      <ComicsList />
    </main>
  );
}

export default Home;