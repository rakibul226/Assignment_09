import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/Home/HomePage";
import Tournaments from "../Pages/Tournament/Tournaments";
import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import AllGames from "../Pages/Games/AllGames";
import AllUpcoming from "../Pages/Upcoming/AllUpcoming";

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
        element: <AllUpcoming></AllUpcoming>,
        loader: ()=>fetch("battlezone.json"),
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
