import Image from "next/image";
import stylesPokemon from "@/styles/Pokemon.module.css"

async function fetchInfo(pokemonId) {
    const api= `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const res= await fetch(api);
    const data= await res.json();
    return data;
}

export default async function Pokemon({ params }){
    // console.log(params);
    const {pokemonId} = params;
    // console.log(pokemonId);
    let pokemonInfo;

    try{
        pokemonInfo= await fetchInfo(pokemonId);
    }catch (error){
        console.error(error);
        return <div>Erro ao carregar os dados do Pokémon.</div>;
    }
    return(
        <div className={stylesPokemon.pokemonContainer}>
            <h1 className={stylesPokemon.pokemonTitle}>{pokemonInfo?.species?.name}</h1>
            <Image 
                src={pokemonInfo?.sprites?.front_default}
                width={200}
                height={200}
                alt={`Pokemon ${pokemonInfo?.species?.name}`}
            />
            <div>
                <h3>Numero:</h3>
                <p>#{pokemonId}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={stylesPokemon.typesContainer}>
                    {pokemonInfo?.types?.map((item, index)=>(
                        <span
                         key={index}
                         className={`${stylesPokemon.type} ${stylesPokemon['type_'+item?.type?.name]}`}>
                            {item?.type?.name}
                        </span>
                    ))}
                </div>
            </div>
            <div  className={stylesPokemon.dataContainer}>
                <div className={stylesPokemon.dataHeight}>
                    <h4>Altura:</h4>
                    <p>{pokemonInfo?.height * 10}cm</p>
                </div>
                <div className={stylesPokemon.dataWeight}>
                    <h4>Peso:</h4>
                    <p>{pokemonInfo?.weight / 10}kg</p>
                </div>
            </div>
        </div>
    )
}