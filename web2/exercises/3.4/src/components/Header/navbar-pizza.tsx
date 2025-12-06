import { useNavigate } from "react-router-dom";
import type { NavBarProps } from "../../types";

const NavBarPizza = ({ authenticatedUser, clearUser }: NavBarProps) => {
  const navigate = useNavigate();

  if (authenticatedUser) {
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/add-pizza")}>Ajouter une pizza</button>
        <button onClick={() => clearUser()}>Se déconnecter</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </nav>
    );
  }
};

export default NavBarPizza;
