import React from "react";

const Loader: React.FC = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 z-50">
      <div className="relative m-auto w-24 h-24">
        <svg
          className="absolute top-0 left-0 w-full h-full transform origin-center animate-rotate"
          viewBox="25 25 50 50"
        >
          <circle
            className="loader-path stroke-green-500 fill-none stroke-[2]"
            cx="50"
            cy="50"
            r="20"
          />
        </svg>
      </div>
    </div>
    <style>
      {`
        .loader-path {
          stroke-dasharray: 150, 200;
          stroke-dashoffset: -10;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          stroke-linecap: round;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
      `}
    </style>
  </div>
);

export default Loader;
