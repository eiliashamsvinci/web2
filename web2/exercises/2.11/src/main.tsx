import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/index.tsx";
import DrinkMenu from "./components/Main/drink/DrinkMenu.tsx";
import Mui from "./components/Main/Mui/mui.tsx";
import PizzaMenu, { pizzas as p } from "./components/Main/pizza/PizzaMenu.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageTitle, { Layout } from "./components/Main/cinema/PageTitle.tsx";
import Cinema from "./components/Main/cinema/Cinema.tsx";
import MovieItem from "./components/Main/cinema/MovieItem.tsx";
import App from "./components/Main/film/app.tsx";
import MovieListPage from "./components/Main/film/MovieListPage.tsx";
import AddFilmsForm from "./components/Main/film/addFilm.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <PageTitle /> },
      { path: "add-film", element: <AddFilmsForm /> },
      { path: "movielist", element: <MovieListPage /> },
    ],
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
        <RouterProvider router={router}/>  
  </StrictMode>
);
