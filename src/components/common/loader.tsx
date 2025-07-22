import React from "react";
import RiseLoader from "react-spinners/RiseLoader";

type LoaderProps = {
  color?: string;
  size?: number;
};

const Loader: React.FC<LoaderProps> = ({ color = "rgb(1, 0, 128)", size = 12 }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <RiseLoader color={color} size={size} />
    </div>
  );
};

export default Loader;
