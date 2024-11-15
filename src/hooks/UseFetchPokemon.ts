import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios from "axios";

interface Pokemon {
  id: number;
  height: number;
  weight: number;
  species: {
    name: string;
  };
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export const useFetchPokemons = (searchTerm: string, page: number, limit: number) => {
  return useQuery<Pokemon[]>(
    {
      queryKey: ["pokemon", searchTerm, page],
      queryFn: async () => {
        if (searchTerm) {
          const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
          return [response.data];
        }

        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * limit}&limit=${limit}`);
        const { results } = response.data;
        const requests = results.map((result: { url: string }) => Axios.get(result.url));
        const pokemonResponses = await Promise.all(requests);
        return pokemonResponses.map((pokemonRes) => pokemonRes.data);
      },
      // Explicitly specify the options type here
      keepPreviousData: true,
    } as UseQueryOptions<Pokemon[], Error>
  );
};