// ErrorComponent.tsx
import React from "react";
import Error from "./errors/Error";
import BackgroundImage from "../ui/BackgroundImage";

const ErrorComponent: React.FC = () => (
  <BackgroundImage>
    <Error />
  </BackgroundImage>
);

export default ErrorComponent;