import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Link } from "react-router-dom";

const MovingStars = () => {
  const starsRef = useRef();

  // This might not be my final design, might change in the future. Noticed that looking at the screen for some time causes dizziness
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.z += 0.001; // Rotate the starfield slightly
      starsRef.current.position.z += 0.1; // Move the stars closer to the camera
      if (starsRef.current.position.z > 50) {
        starsRef.current.position.z = 50; // Reset the position for a continuous effect,
        //played around with the different values and came to the conqlusion that 50 gives the illusion that it never resets position
      }
    }
  });

  return (
    //values for background on homescreen
    <Stars
      ref={starsRef}
      radius={50}
      depth={50}
      count={4000}
      factor={4}
      saturation={0.5}
      fade={true}
    />
  );
};

const Homepage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
     
      <Canvas>
       
        <MovingStars />
      </Canvas>

      {/* Overlay "Explore" button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to Astronomy101
        </h1>
        <Link to="/explore">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1.2rem",
              backgroundColor: "#1e90ff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
