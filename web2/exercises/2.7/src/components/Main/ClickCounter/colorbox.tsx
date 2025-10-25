import { useState } from "react";

type ColoresProps = {
  title: string;
};

const colors: { [key: number]: string } = {
  1: "red",
  2: "green",
  3: "blue",
  4: "yellow",
  5: "purple",
};

const lights = ["white", "black"];

const ColorPlat = ({ title }: ColoresProps) => {
  const [color, setColor] = useState(1);
  const [light, setLight] = useState(0);

  const changeColor = () => {
    setColor(color === 5 ? 1 : color + 1);
  };

  const changeLight = () => {
    setLight((x) => (x + 1) % lights.length);
  };

  const currentColor = colors[color];
  const currentLight = lights[light];

  return (
    <div
      style={{width: "100vw", height: "100vh", backgroundColor: currentLight,display: "flex",flexDirection: "column", alignItems: "center",gap: "20px",}}>
      <h1>{title}</h1>

      <button onClick={changeLight}> {currentLight =="white" ? "dark mode" : "Light mode"} </button>
      <div
        style={{ width: "120px",height: "120px", border: "1px solid white", backgroundColor: currentColor, }}
      ></div>

      <button onClick={changeColor}>Next Color</button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorPlat;
