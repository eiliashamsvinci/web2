import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAuthenticatedUser } from "../Main/utile/session";
import type { AuthenticatedUser } from "../../types";

interface Props {
  authenticatedUser?: AuthenticatedUser;
  setAuthenticatedUser: (user: AuthenticatedUser | undefined) => void;
}

const Header = ({ authenticatedUser, setAuthenticatedUser }: Props) => {
  const nav = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("mode") === "black");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
    localStorage.setItem("mode", darkMode ? "black" : "white");
  }, [darkMode]);

  const handleLogout = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
    nav("/login");
  };

  return (
    <div style={{ display: "flex", padding: "10px", gap: "10px", alignItems: "center" }}>
      <Button variant="contained" onClick={() => nav("/")}>Home</Button>
      <Button variant="contained" onClick={() => nav("/add-film")}>Cinema</Button>
      <Button variant="contained" onClick={() => nav("/movielist")}>Movie List</Button>

      <Button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>

      <div style={{ marginLeft: "auto" }}></div>

      {authenticatedUser ? (
        <> 
          <span>{authenticatedUser.username}</span>
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
       
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => nav("/login")}>Login</Button>
          <Button onClick={() => nav("/register")}>Register</Button>
        </>
      )}
    </div>
  );
};

export default Header;
