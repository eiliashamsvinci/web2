import { useState } from "react";

type ClickProps = {
  title: string;
  successMessage: string;
  hoverMessage: string;
};

const ClickCounter = ({ title, successMessage, hoverMessage }: ClickProps) => {
  const [number, setNumber] = useState(0);
  const [hover, setHover] = useState(false);

  const counterClick = () => {
    setNumber(number + 1);
  };

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <h1>{title}</h1>

      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >
        
        {hover && <p>{hoverMessage}</p>}

        <button
          onClick={counterClick}
          style={{ width: "200px",height: "40px", marginTop: "10px",}}  > +1</button>
      </div>
      <p>{number}</p>

      {number >= 10 && <p>{successMessage}</p>}
    </div>
  );
};

export default ClickCounter;
