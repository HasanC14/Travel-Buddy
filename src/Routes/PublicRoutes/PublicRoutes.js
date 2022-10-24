import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Contract from "../../Pages/Contract/Contract";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PraivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/places"),
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contract",
        element: (
          <PrivateRoute>
            <Contract></Contract>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
