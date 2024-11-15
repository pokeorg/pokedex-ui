import React, { ReactNode } from "react";
import backgroundImage from "../../assets/images/background.png";

interface BackgroundImageProps {
  children: ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => (
  <div
    className="min-h-screen w-full bg-contain"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "repeat-y",
    }}
  >
    {children}
  </div>
);

export default BackgroundImage;
