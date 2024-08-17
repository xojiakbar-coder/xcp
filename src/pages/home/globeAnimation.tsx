import React, { useState, useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";

function GlobeAnimation() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          width: "100%",
          height: "100%",
          // minWidth: "500px",
          // minHeight: "400px",
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          scale: 0.9,
          size: 0.8,
          points: 12,
          scaleMobile: 1.0,
          color: "#52c0dd",
          color2: "#ffffff",
          backgroundColor: "#000",
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, "100%", "100%"]);

  return (
    <div
      className="absolute top-0 z-10 w-full h-full"
      ref={vantaRef}
      style={{
        zIndex: "5",
        padding: "0",
        width: "100%",
        height: "100%",
        minHeight: "600px",
        position: "absolute",
      }}
    />
  );
}

export default GlobeAnimation;
