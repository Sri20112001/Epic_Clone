import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Components/HomePage/HomePage";
import { SupportPage } from "./Components/SupportPage/SupportPage";
import { BrowsePage } from "./Components/BrowsePage/BrowsePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Support",
    element: <SupportPage />,
  },
  {
    path: "/Browse",
    element: <BrowsePage/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
