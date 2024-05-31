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
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/Men-Shopping", element: <Men /> },
      { path: "/bag", element: <Bag /> },
      { path: "/single-products", element: <SingleProducts /> },
      { path: "/bag/Address", element: <BagAddress /> },
      { path: "/bag/Address/Payment", element: <BagPayment /> },
    ],
  },
  { path: "/bag/Address/order-confirm", element: <OrderPlaced /> },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="myntra-sidd.us.auth0.com"
    clientId="KxanJjdih5leQaqLdqr3F3LxQjJ89jJ9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
