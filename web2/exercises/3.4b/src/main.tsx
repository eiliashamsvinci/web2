import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/index.tsx";
import DrinkMenu from "./components/Main/drink/DrinkMenu.tsx";
import PizzaMenu, { pizzas as p } from "./components/Main/pizza/PizzaMenu.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageTitle, { Layout } from "./components/Main/cinema/PageTitle.tsx";
import Cinema from "./components/Main/cinema/Cinema.tsx";
import MovieItem from "./components/Main/cinema/MovieItem.tsx";
import App from "./components/Main/film/app.tsx";
import MovieListPage from "./components/Main/film/MovieListPage.tsx";
import AddFilmsForm from "./components/Main/film/addFilm.tsx";
import JokeAPI from "./components/Main/API/joke-api.tsx";
import DogApi from "./components/Main/API/dog-api.tsx";
import Center from "./components/Main/API/temps.tsx";
import Login from "./components/Main/film/cinema.login.tsx";
import Register from "./components/Main/film/ciname.register.tsx";
import UpdateFilm from "./components/Main/film/updateFilms.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <PageTitle /> },
      { path: "add-film", element: <AddFilmsForm /> },
      { path: "movielist", element: <MovieListPage /> },
            { path: "/movie/:id", element: <App /> },
                        { path: "/update-film/:id", element: <UpdateFilm /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },


      
    ],
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>

         <RouterProvider router={router}/>   
      
  </StrictMode>
);
