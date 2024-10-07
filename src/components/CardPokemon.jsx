import Image from "next/image";
import Link from "next/link";
import stylesCardPokemon from "@/styles/CardPokemon.module.css"

async function fetchImagePokemons(pokemon) {
    const api= `${pokemon?.url}`
    const res= await fetch(api);

    if(!res.ok){
        throw new Error('Falha ao buscar Pokémon');
    }
    const data= await res.json();
    return data?.sprites?.front_default;
}

export default async function CardPokemon({pokemon}){
const dataImagens= await fetchImagePokemons(pokemon);
return(
    <div className={stylesCardPokemon.card}>
        <Image 
            src={`${dataImagens}`}
            alt={`Pokemon ${pokemon?.name}`}
            width={120}
            height={120}
        />
        <p className={stylesCardPokemon.id}>#{pokemon?.id}</p>
        <h1 className={stylesCardPokemon.title}>{pokemon?.name}</h1>
        <Link href={`/pokemons/${pokemon?.id}`}>
            <span className={stylesCardPokemon.btn}>Detalhes</span>
        </Link>
    </div>
)
}