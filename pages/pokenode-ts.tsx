import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";
const api = new PokemonClient();

const PokenodeTs: NextPage = () => {
	const [pokemon, setPokemon] = useState<any>(null);
	useEffect(
		() => {
			void (async () => {
				const data = await api.getPokemonByName("luxray");
				console.log(data);
				setPokemon(data);
			})();
		},
		[],
	);

	return (
		<div>
      <h1>Pokenode-ts</h1>
      {/* <div>{pokemon?.forms[0].name}</div>
      <div>{pokemon?.forms[0].url}</div> */}
      <div>{pokemon?.id}</div>
      <div>{pokemon?.species.name}</div>
      <div>{pokemon?.species.url}</div>
      <img src={pokemon?.sprites.front_default} alt='' />
      <img src={pokemon?.sprites.front_female} alt='' />
      <img src={pokemon?.sprites.front_shiny} alt='' />
      <img src={pokemon?.sprites.front_shiny_female} alt='' />
      <br />
      <img src={pokemon?.sprites.back_default} alt='' />
      <img src={pokemon?.sprites.back_female} alt='' />
      <img src={pokemon?.sprites.back_shiny} alt='' />
      <img src={pokemon?.sprites.back_shiny_female} alt='' />
    </div>
	);
};

export default PokenodeTs;
