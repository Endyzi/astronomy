import React, { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import Orbit from './Orbit';

const celestialObjects = [
  { name: "Sun", color: "yellow", position: [0, 0, 0], size: 3 },
  { name: "Mercury", color: "darkgray", position: [12, 0, 0], size: 0.3 },
  { name: "Venus", color: "orange", position: [18, 0, 0], size: 0.9 },
  { name: "Earth", color: "blue", position: [24, 0, 0], size: 1.1 },
  { name: "Mars", color: "red", position: [30, 0, 0], size: 0.4 },
  { name: "Moon", color: "gray", position: [15, 0, 0], size: 0.4 },
];

const UniverseExplorer = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const HandlePlanetClick = (planet) => {
    const { camera } = useThree();

    camera.position.lerp(
      { x: planet.position[0], y: planet.position[1], z: planet.position[2] + 8 },
      0.1
    );
    camera.lookAt(planet.position[0], planet.position[1], planet.position[2]);
    setSelectedPlanet(planet);
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Stars
          radius={150}
          depth={10}
          count={5000}
          factor={4}
          saturation={2.8}
          fade={true}
        />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />

        {celestialObjects.map((obj, index) => (
          <>
            <Orbit radius={obj.position[0]} />
            <Planet
              key={index}
              position={obj.position}
              color={obj.color}
              name={obj.name}
              size={obj.size}
              onClick={() => HandlePlanetClick(obj)}
            />
          </>
        ))}

        <OrbitControls maxDistance={50} minDistance={5} />
      </Canvas>

      {/* Display planet details */}
      {selectedPlanet && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0, 0, 0, 0.7)",
            padding: "15px",
            borderRadius: "5px",
            color: "white",
            maxWidth: "300px",
          }}
        >
          <h2>{selectedPlanet.name}</h2>
          <p>
            <strong>Color:</strong> {selectedPlanet.color}
          </p>
          <p>
            <strong>Distance from Sun:</strong> {selectedPlanet.position[0]} AU
          </p>
          <button
            onClick={() => setSelectedPlanet(null)}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              background: "#ff5722",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UniverseExplorer;
