import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Shop from "./../../Components/Shop/Shop";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import UserProduct from "../UserProduct/UserProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("http://localhost:3000/productCount"),
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/userProduct",
        element: <UserProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
