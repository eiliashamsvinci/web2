import Header from "../Header";
import PageTitle from "../Main/cinema/PageTitle";
import Users from "../Main/User/Users";
import App1 from "../Main/ClickCounter";
import "./App.css";
import Cinema from "../Main/cinema/Cinema";
import ColorPlat from "../Main/ClickCounter/colorbox";
import PizzaMenu from "../Main/pizza/PizzaMenu";
import { useState, useRef, type SyntheticEvent } from "react";
import sound from "../../assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";

// Type for pizza
type Pizza = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const defaultPizzas: Pizza[] = [
    { id: 1, title: "4 fromages", content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates" },
    { id: 2, title: "Vegan", content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons" },
    { id: 3, title: "Vegetarian", content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives" },
    { id: 4, title: "Alpage", content: "Gruyère, Mozarella, Lardons, Tomates" },
    { id: 5, title: "Diable", content: "Tomates, Mozarella, Chorizo piquant, Jalapenos" },
  ];

  const [pizzas, setPizzas] = useState<Pizza[]>(defaultPizzas);
  const [pizza, setPizza] = useState("");
  const [discription, setDiscription] = useState("");

    const audioRef = useRef<HTMLAudioElement>(null); 

  const nextPizzaId = (pizzas: Pizza[]) => {
    return pizzas.reduce((maxId, pizza) => Math.max(maxId, pizza.id), 0) + 1;
  };

  // Handle form submit
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newPizza: Pizza = {
      id: nextPizzaId(pizzas),
      title: pizza,
      content: discription,
    };
    setPizzas([...pizzas, newPizza]);
  };

  const handlePizzaChange = (e: SyntheticEvent) => {
    const pizzaInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", pizzaInput.value);
    setPizza(pizzaInput.value);
  };
  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDiscription(descriptionInput.value);
  };
  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };


  return (
   <div>
      <header onClick={toggleMusic} style={{ cursor: "pointer" }}>
        <h1>My HomePage</h1>
        <p>Because we love JS, you can also click on the header to stop / start the music;</p>
      </header>

      <audio ref={audioRef} controls>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <PizzaMenu pizzas={pizzas} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="pizza">Pizza</label>
        <input
          onChange={handlePizzaChange}
          value={pizza}
          type="text"
          id="pizza"
          name="pizza"
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={handleDescriptionChange}
          value={discription}
          type="text"
          id="description"
          name="description"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default App;
