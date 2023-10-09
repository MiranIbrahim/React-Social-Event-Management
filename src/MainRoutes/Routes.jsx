import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Career from "../Pages/Career/Career";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import PremiumServices from "../Pages/Home/Services/PremiumServices";
import Notfound from "../Pages/404Page/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: '/service/:id',
        element: <PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/premium',
        element: <PrivateRoute>
          <PremiumServices></PremiumServices>
        </PrivateRoute>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/career",
        element: <PrivateRoute>
          <Career></Career>
        </PrivateRoute>,
        loader: () => fetch("/career.json"),
      },
      {
        path: "*",
        element: <Notfound></Notfound> ,
      }
    ],
  },
]);

export default router;
