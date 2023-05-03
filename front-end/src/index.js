import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/stylesheet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
import UseStateTest from "./components/UseStateTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StudentTable />,
      },
      {
        path: "addStudent",
        element: <AddStudent />,
      },
    ],
  },
  {
    path: "/testUseState",
    element: <UseStateTest />,
    children: [],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
