// Loading.tsx
import React from "react";
import Loader from "../ui/Loader";
import BackgroundImage from "../ui/BackgroundImage";

const Loading: React.FC = () => (
  <BackgroundImage>
    <Loader />
  </BackgroundImage>
);

export default Loading;