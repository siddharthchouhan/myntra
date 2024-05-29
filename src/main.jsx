import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/mainContentComponents/MainContainer.jsx";
import Men from "./other-pages/Men.jsx";
import Bag from "./other-pages/bag.jsx";
import SingleProducts from "./other-pages/singleProducts.jsx";
import BagAddress from "./other-pages/bagAddress.jsx";
import BagPayment from "./other-pages/bagPayment.jsx";
import OrderPlaced from "./other-pages/orderSuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/Men-Shopping", element: <Men />},
      {
        path: "/bag",
        element: <Bag />,
      },
      { path: "/single-products", element: <SingleProducts /> },
      { path: "/bag/Address", element: <BagAddress /> },
      { path: "/bag/Address/Payment", element: <BagPayment /> },
    ],
  },
  { path: "/bag/Address/order-confirm", element: <OrderPlaced /> },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
