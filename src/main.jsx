import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContextProvider from "./context/StoreContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/index.jsx";
import PlaceOrder from "./pages/PlaceOrder/index";
import Home from "./pages/Home/index";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </React.StrictMode>
);
