import { Box, Container, Typography , Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Header = () => {

  const nav = useNavigate();

  return (
    <div className="drink-menu">
      <Button variant="contained" onClick={() => nav("/")}>
        Home
      </Button>
      <Button variant="contained" onClick={() => nav("/cinema")}>
        Cinema
      </Button>
      <Button variant="contained" onClick={() => nav("/movielist")}>
        Movie List
      </Button>

    </div>
  );
};

export default Header;
