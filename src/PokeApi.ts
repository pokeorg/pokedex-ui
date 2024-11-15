// src/PokeApi.ts
import Axios from 'axios';

export const fetchPokemons = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  return response.data.results; // Return the list of Pokémon
};

export const fetchPokemonDetails = async (url: string) => {
  const response = await Axios.get(url); // Fetch details from the provided URL
  return response.data; // Return detailed Pokémon data
};