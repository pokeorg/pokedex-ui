import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BackgroundImage from "../BackgroundImage";

// Register the chart components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const [damageRelations, setDamageRelations] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const maxPokemonId = 898;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemon(data);

        // Fetch damage relations for each type
        const typeRelations = await Promise.all(
          data.types.map(async (type: any) => {
            const typeResponse = await fetch(type.type.url);
            const typeData = await typeResponse.json();
            return typeData.damage_relations;
          })
        );

        setDamageRelations(typeRelations);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error: {error}</div>;

  const renderDamageRelations = (relations: any) => (
    <div className="mb-4">
      <h5 className="font-bold">Weaknesses:</h5>
      <ul className="list-disc pl-6">
        {relations.double_damage_from.map((weakness: any) => (
          <li key={weakness.name}>{weakness.name}</li>
        ))}
      </ul>
      <h5 className="font-bold">Resistances:</h5>
      <ul className="list-disc pl-6">
        {relations.double_damage_to.map((resistance: any) => (
          <li key={resistance.name}>{resistance.name}</li>
        ))}
      </ul>
    </div>
  );

  const getStatsData = () => {
    const labels = pokemon.stats.map((stat: any) => stat.stat.name);
    const data = pokemon.stats.map((stat: any) => stat.base_stat);

    return {
      labels,
      datasets: [
        {
          label: "Base Stats",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Pokémon Base Stats",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <BackgroundImage>
      <div className="container mx-auto p-6 bg-gray-100 shadow-md rounded-md max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <button
            style={{ backgroundColor: "#d4eaeb" }}
            className="text-gray-600 text-lg py-2 px-4 rounded"
            disabled={Number(id) === 1}
            onClick={() => navigate(`/pokemon/${Number(id) - 1}`)}
          >
            &lt; #{Number(id) - 1}
          </button>

          <h1 className="text-4xl font-bold text-center">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} #
            {pokemon.id.toString().padStart(3, "0")}
          </h1>
          <button
            style={{ backgroundColor: "#d4eaeb" }}
            className="text-gray-600 text-lg py-2 px-4 rounded"
            disabled={Number(id) === maxPokemonId} // Disable if on the last Pokémon
            onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
          >
            #{Number(id) + 1} &gt;
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={
                pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
                "fallback-image-url.png"
              }
              alt={pokemon.name}
              className="h-72 w-auto rounded-lg shadow-md object-contain"
            />
          </div>

          <div className="md:w-1/2 ml-0 md:ml-8 flex flex-col justify-center">
            <p className="text-gray-700 text-lg mb-4">
              For some time after its birth, it uses the nutrients packed into
              the seed on its back to grow.
            </p>

            <div className="flex flex-wrap bg-white p-4 rounded-lg shadow mb-4">
              <div className="w-1/2 p-2">
                <h4 className="text-sm font-bold">Height</h4>
                <p>{pokemon.height * 10} cm</p>
              </div>
              <div className="w-1/2 p-2">
                <h4 className="text-sm font-bold">Weight</h4>
                <p>{pokemon.weight / 10} kg</p>
              </div>
              <div className="w-1/2 p-2">
                <h4 className="text-sm font-bold">Abilities</h4>
                <p>
                  {pokemon.abilities
                    .map((ability: any) => ability.ability.name)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <h3 className="text-2xl mt-6 font-semibold text-gray-800">Stats</h3>
        <div className="mt-2 mb-4 bg-white p-6 rounded-lg shadow-lg">
          <Bar data={getStatsData()} options={options} />
        </div>

        {/* Damage Relations */}
        {damageRelations && (
  <div className="mt-6">
    <h3 className="text-2xl font-semibold text-gray-800">Damage Relations</h3>
    <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
      {damageRelations.map((relations: any, index: number) => (
        <div
          key={index}
          className="flex-1 bg-gray-100 p-4 rounded-lg shadow-sm mb-4 md:mb-0"
        >
          <h4 className="text-xl font-semibold text-indigo-700">
            Type {index + 1} Damage Relations:
          </h4>
          <div className="mt-2">
            <h5 className="font-bold">Weaknesses:</h5>
            <ul className="list-disc pl-6">
              {relations.double_damage_from.map((weakness: any) => (
                <li key={weakness.name}>{weakness.name}</li>
              ))}
            </ul>
            <h5 className="font-bold mt-4">Resistances:</h5>
            <ul className="list-disc pl-6">
              {relations.double_damage_to.map((resistance: any) => (
                <li key={resistance.name}>{resistance.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </BackgroundImage>
  );
};

export default React.memo(PokemonDetails);
