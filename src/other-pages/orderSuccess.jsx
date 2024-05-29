import { useEffect } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
    useEffect(() => {
        document.title = "Order Confirmed!"
    }, [])
  return (
    <>
      <div
        className="container-fluid d-flex flex-column text-center align-items-center justify-content-center"
        style={{ height: "90vh" }}
      >
        <RiVerifiedBadgeFill className="text-success display-1" />
        <h1>Order Confirmed</h1>
        <p className="fs-5 text-secondary py-1">
          you will recieve an order confirmation email shortly with the expected
          delivery date.{" "}
          <span className="fw-bold" style={{ color: "#ee5f73" }}>
            View Order
          </span>
        </p>
        <Link to="/">
          <button className="btn btn-danger rounded-0 px-2 py-1">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
};

export default OrderPlaced;
