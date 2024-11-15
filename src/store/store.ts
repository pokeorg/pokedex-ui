import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice"; // Import the Pokémon slice reducer

// Create the Redux store and include the Pokémon slice
const store = configureStore({
  reducer: {
    pokemons: pokemonReducer, // Add the Pokémon slice reducer
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

// Define typed hooks and types for better TypeScript integration
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
