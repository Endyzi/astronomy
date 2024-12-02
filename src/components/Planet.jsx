import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Planet = ({ position, color, name, size, onClick }) => {
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Rotate the planet
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={planetRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={
        hovered ? [1.2 * size, 1.3 * size, 1.2 * size] : [size, size, size]
      }
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? "lightgreen" : color} />
      <Html distanceFactor={50}>
        <div style={{ color: "white", fontSize: "1.2rem" }}>{name}</div>
      </Html>
    </mesh>
  );
};

export default Planet;
