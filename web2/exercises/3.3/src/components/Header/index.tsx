import {  Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Header = () => {

  const nav = useNavigate();
  const [darkMode , setDarkMode] = useState(localStorage.getItem('mode') === 'black' ? true : false) ;
  


const storeName = 'mode';

// const setUserSession = (name : string) => {
//   const storageVlaue = JSON.stringify({ name });
//   localStorage.setItem(storeName , storageVlaue) ;
// }

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      localStorage.setItem('mode' , 'black') ;   
      // setUserSession('black') ;   
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      localStorage.setItem('mode' , 'white') ;
      // setUserSession('white') ;
      
    }
  }, [darkMode]);


  return (
    <div className="drink-menu">
      <Button variant="contained" onClick={() => nav("/")}>
        Home
      </Button>
      <Button variant="contained" onClick={() => nav("/add-film")}>
        Cinema
      </Button>
      <Button variant="contained" onClick={() => nav("/movielist")}>
        Movie List
      </Button>

      <Button onClick={() => setDarkMode(!darkMode)}> 
        {darkMode ? "Light Mode" : "Dark Mode"}
      
      </Button > 

        
    </div>
  );
};

export default Header;
