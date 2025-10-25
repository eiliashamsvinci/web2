import "./Header.css";
import { useState } from "react";

type HeaderProps = {
  title: string;
  image: string;
  // children: React.ReactNode ;
};

const Header = ({ title, image }: HeaderProps) => {

  const handeleClick =() =>{
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted) ; 
  }
  const [menuPrinted, setMenuPrinted] = useState(false);

  return (
    <div className="drink-menu">
      <header onClick={handeleClick}>
        <h1 className="animate__animated animate__bounce">
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        </h1>
        <img style={{ width: "10%", height: "1%" }} src={image} alt="" />
      </header>

      {/* <div className="drink-items">{children}</div> */}
    </div>
  );
};

export default Header;
