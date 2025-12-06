import { Outlet } from "react-router-dom";
import type { PizzeriaContext } from "../../../types";
import type { Pizza, Drink } from "../../../types";

function PizzaLayout() {
  const pizzas: Pizza[] = [
    { id: 1, title: "Margherita", content: "tomato mozzarella basil" },
    { id: 2, title: "Pepperoni", content: "tomato mozzarella pepperoni" }
  ];

  const drinks: Drink[] = [
    { title: "No drink", image: "/images/no-drink.png", volume: "0ml", price: "0" }
  ];

  const registerUser = async (user: { username: string; password: string }) => {
    console.log("registerUser called", user);
  };

  const loginUser = async (user: { username: string; password: string }) => {
    console.log("loginUser called", user);
  };

  return <Outlet context={{ pizzas, drinks, registerUser, loginUser }} />;
}

export default PizzaLayout;
