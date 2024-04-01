import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/Home/HomePage";
import Upcoming from "../Pages/Upcoming/Upcoming";
import Tournaments from "../Pages/Tournament/Tournaments";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import AllGames from "../Pages/Games/AllGames";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: ()=>fetch("battlezone.json"),
      },
      {
        path: "/upcoming",
        element: <Upcoming></Upcoming>, 
      },
      {
        path: "/tournament",
        element: <Tournaments></Tournaments>,
      },
      {
        path: "/games",
        element: <AllGames></AllGames>,
        loader: ()=>fetch("battlezone.json"),

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default myCreatedRoute;
