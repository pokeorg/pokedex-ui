import React from "react";
import { useNavigate } from "react-router-dom";

type SmallCardProps = {
  height: number;
  id: number;
  image: string;
  name: string;
  weight: number;
};

const SmallCard: React.FC<SmallCardProps> = ({ height, id, image, name, weight }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${id}`, { state: { height, image, name, weight } });
  };

  return (
    <div
      className="relative h-64 w-52 rounded-3xl p-2 bg-gray-200 shadow-2xl cursor-pointer transition-shadow duration-200 hover:shadow-xl"
      onClick={handleCardClick}
    >
      <div className="h-full w-full flex flex-col">
        <div className="h-3/5 flex items-center justify-center">
          <img className="h-full" src={image} alt={name} draggable="false" />
        </div>
        <div className="h-2/5 px-3 text-sm">
          <p>#{id.toString().padStart(4, "0")}</p>
          <h2 className="text-lg capitalize font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-sm text-purple-600">Weight: {weight}</p>
            <p className="text-sm text-yellow-500">Height: {height}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SmallCard);
