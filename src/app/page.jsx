import Image from "next/image";
import { notFound } from "next/navigation";
import stylesHome from "@/styles/Home.module.css";
import ImagePokemBola from "@/public/images/pokemBola.jpeg";
import CardPokemon from "@/components/CardPokemon";

async function fetchPokemons() {
  const api= "https://pokeapi.co/api/v2/pokemon"
  const maxPokemon= 351;
  const res= await fetch(`${api}/?limit=${maxPokemon}`);

  if(!res.ok){
    throw new Error('Falha ao buscar Pokémon');
  }
  const data= await res.json();
  data.results.forEach((item, index)=>{
    item.id= index + 1;
  })
  return data.results
}

export default async function Home() {
  const pokemons= await fetchPokemons();
  // console.log(pokemons);

  return (
    <>
      <div className={stylesHome.titleContainer}>
        <h1>Pokem<span>Sim</span></h1>
        <Image src={ImagePokemBola} width={50} height={50} alt="PokemBola" />
      </div>
      <div className={stylesHome.pokemonContainer}>
        {pokemons.map((pokemon, index)=>(
          <CardPokemon key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}