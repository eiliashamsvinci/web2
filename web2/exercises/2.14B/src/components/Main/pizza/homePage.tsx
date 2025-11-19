
import { useOutletContext } from "react-router-dom";
import sound from "../../../assets/sounds/pizza.mp3";
import { useEffect , useState } from "react";
import PizzaMenu from "./PizzaMenu";
import DrinkMenu from "../drink/DrinkMenu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import type { PizzeriaContext } from "../../../types";
import { pizzas } from './PizzaMenu';
import type { Pizza } from "../../../types";

const HomePage = () => {
  const { actionToBePerformed, clearActionToBePerformed ,   pizzas, drinks,
  }: PizzeriaContext = useOutletContext();

  const [pizza, setPizza] = useState<Pizza[]>([]);

  //   useEffect(() => {
  //   fetch("http://localhost:3000/pizzas")
  //     .then((response) => {
  //       if (!response.ok)
  //         throw new Error(
  //           `fetch error : ${response.status} : ${response.statusText}`
  //         );
  //       return response.json();
  //     })
  //     .then((pizzaa) => setPizza(pizzaa))
  //     .catch((err) => {
  //       console.error("HomePage::error: ", err);
  //     });
  // }, []);


useEffect( () => {
  const fetchPizzas = async()=>{
    try {
      const response = await fetch("http://localhost:3000/pizzas");

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const pizzas = await response.json();
      setPizza(pizzas);
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
  } ; 
  fetchPizzas() ; 
},[]);


  return (
    <>
      <h1>Ma Pizzeria</h1>
      <p>
        Parce que nous aimons le JS/TS, vous pouvez cliquer sur le header pour
        démarrer / stopper la musique ; 
      </p>
      <AudioPlayer
        sound={sound}
        actionToBePerformed={actionToBePerformed}
        clearActionToBePerformed={clearActionToBePerformed}
      />

      <PizzaMenu pizzas={pizzas} />

      <DrinkMenu title="Nos boissons" drinks={drinks} />
    </>
  );
};
