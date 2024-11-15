import React, { useEffect, useState } from "react";
import SmallCard from "../components/ui/CardComponents/SmallCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; 

// Define Pokemon interface
interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
}

const Home: React.FC = () => {
  const { logout } = useAuth(); // Get the logout function from context
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); // State to store list of Pokémon
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [search, setSearch] = useState(""); // Search query
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]); // Filtered Pokémon for search functionality
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [itemsPerPage] = useState(12); // Items per page (customizable)

  useEffect(() => {
    // Fetch the list of Pokémon from API
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=151`
        ); // Fetching first 151 Pokémon
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemonList(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filterPokemon(e.target.value);
  };

  // Filter Pokémon based on search query
  const filterPokemon = (query: string) => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Calculate current Pokémon to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemon = filteredPokemon.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Render pagination controls
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const maxPage = Math.ceil(filteredPokemon.length / itemsPerPage); // Maximum number of pages

  // Handle loading state
  if (loading) return <div className="text-center mt-10">Loading...</div>;

  // Handle error state
  if (error) return <div className="text-center mt-10">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 relative">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Pokémon..."
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Pokémon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPokemon.length ? (
          currentPokemon.map((pokemon) => (
            <SmallCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-lg">
            No Pokémon found
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`py-2 px-4 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredPokemon.length}
          currentPage={currentPage}
          paginate={paginate}
        />

        <button
          onClick={() => paginate(currentPage + 1)}
          className={`py-2 px-4 rounded ${
            currentPage === maxPage
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white"
          }`}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout} // Call logout from context
        className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow"
      >
        Logout
      </button>
    </div>
  );
};

// Pagination component
const Pagination: React.FC<{
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex space-x-2">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`py-2 px-4 rounded ${
            currentPage === number
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Home;