//CardsContainer
import React, { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ children }) => {
  return (
    <div className="m-16 flex flex-wrap justify-center gap-14">
      {children}
    </div>
  );
};

export default CardsContainer;