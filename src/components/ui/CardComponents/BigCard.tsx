//BigCard.tsx
import React from 'react';

interface BigCardProps {
  closeBigCard: () => void;
  id: number;
  image: string;
  name: string;
  weight: number;
  height: number;
}

const BigCard: React.FC<BigCardProps> = ({ closeBigCard, id, image, name, weight, height }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
      <button
        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
        onClick={closeBigCard}
      >
        Close
      </button>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>Pokemon ID: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} m</p>
      <img src={image} alt="Pokemon" className="w-64 h-64 object-contain" />
    </div>
  );
};

export default BigCard;