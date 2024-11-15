//Backdrop.tsx
import { ReactNode } from "react";
interface BackdropProps {
  closeBigCard: () => void;
  children?: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ closeBigCard, children }) => {
  return (
    <div
      className="fixed z-10 bg-black bg-opacity-75 w-full h-screen top-0 left-0"
      onClick={closeBigCard}
    >
      {children}
    </div>
  );
};

export default Backdrop;