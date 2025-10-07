import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks";
import filmRouter from "./routes/films";
import textsRoutes from "./routes/texts";


const app = express();

let counter = 0;
app.use((req, _res, next) => {
  if (req.method === "GET") {
    counter++;
    console.log(" GET counter :  " + counter);
  }
  next();
});

let GetCounterPizza = 0;
app.use((req, _res, next) => {
  if (req.method === "GET" && req.path === "/pizzas") {
    GetCounterPizza++;
    console.log("GET /pizzas :" + GetCounterPizza);
  }
  next();
});

let PostCounterPizza = 0;
app.use((req, _res, next) => {
  if (req.method === "POST" && req.path === "/pizzas") {
    PostCounterPizza++;
    console.log("Post/pizzas" + PostCounterPizza);
  }
  next();
});

let deleteCounterPizza = 0;
app.use((req, _res, next) => {
  if (req.method === "DELETE" && req.path === "/pizzas") {
    deleteCounterPizza++;
    console.log("Post/pizzas" + deleteCounterPizza);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks", drinkRouter);
app.use("/films", filmRouter);
app.use("/texts", textsRoutes);


export default app;
