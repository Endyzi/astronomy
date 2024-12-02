import React from "react";
import { Line } from "@react-three/drei";

const Orbit = ({ radius }) => {
  const points = [];
  for (let i = 0; i <= 360; i++) {
    const angle = (i * Math.PI) / 180; // Convert degrees to radians
    points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
  }

  return <Line points={points} color="white" lineWidth={1} />;
};

export default Orbit;
