import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const cycleColors = () => {
    const colors = showPurple
      ? ["red", "green", "yellow", "purple"]
      : ["red", "green", "yellow"];
    const nextIndex = (colors.indexOf(activeColor) + 1) % colors.length;
    setActiveColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-light-container text-center">
      <div
        className={`light red ${activeColor === "red" ? "glow" : ""}`}
        onClick={() => setActiveColor("red")}
      ></div>
      <div
        className={`light yellow ${activeColor === "yellow" ? "glow" : ""}`}
        onClick={() => setActiveColor("yellow")}
      ></div>
      <div
        className={`light green ${activeColor === "green" ? "glow" : ""}`}
        onClick={() => setActiveColor("green")}
      ></div>
      {showPurple && (
        <div
          className={`light purple ${activeColor === "purple" ? "glow" : ""}`}
          onClick={() => setActiveColor("purple")}
        ></div>
      )}

      <div className="mt-3">
        <button onClick={cycleColors} className="btn btn-primary me-2">
          Cycle
        </button>
        <button onClick={() => setShowPurple(true)} className="btn btn-secondary">
          Add Purple
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
