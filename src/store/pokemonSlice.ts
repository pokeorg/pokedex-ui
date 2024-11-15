import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the Pokémon interface
interface Pokemon {
  id: number;
  height: number;
  weight: number;
  species: { name: string };
  sprites: {
    other: {
      home: { front_default: string };
      "official-artwork": { front_default: string };
    };
  };
}

// Define the initial state for Pokémon slice
interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
};

// Define the async thunk for fetching Pokémon data
export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async ({ page, limit }: { page: number; limit: number }) => {
    const offset = (page - 1) * limit;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    
    // Map through the results to get Pokémon details
    const pokemonResults = await Promise.all(
      response.data.results.map(async (pokemon: any) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return pokemonDetails.data;
      })
    );
    return pokemonResults;
  }
);

// Define the Pokémon slice using createSlice
const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Pokémon data";
      });
  },
});

export default pokemonSlice.reducer;
