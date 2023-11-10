import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Destination from "../pages/Destination/Destination";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/destination',
          element: <PrivateRoutes><Destination></Destination></PrivateRoutes>
        }
      ]
    },
  ]);