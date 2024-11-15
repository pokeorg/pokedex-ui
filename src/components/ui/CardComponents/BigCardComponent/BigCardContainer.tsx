//BigCardContainer.tsx

import { ReactNode } from "react";

interface BigCardContainerProps {
  children: ReactNode;
  closeBigCard: () => void;
}

const BigCardContainer: React.FC<BigCardContainerProps> = ({
  children,
  closeBigCard,
}) => {
  return (
    <div
      onClick={closeBigCard}
      className="shadow-md rounded-3xl bg-grayTheme p-2 xl:p-8 text-center z-10 fixed top-20 left-1/2 transform -translate-x-1/2 overflow-auto"
    >
      {children}
    </div>
  );
};

export default BigCardContainer;