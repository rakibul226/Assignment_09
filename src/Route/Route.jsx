import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/Home/HomePage";
import Upcoming from "../Pages/Upcoming/Upcoming";
import Tournaments from "../Pages/Tournament/Tournaments";
import Games from "../Pages/Games/Games";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
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
        element: <Games></Games>,
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
