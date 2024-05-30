import { Link } from "react-router-dom";

const BagAlert = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center alig-items-center py-3"
        style={{ height: "40vh" }}
      >
        <div className="text-center">
          <img
            className="w-50"
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            alt=""
          />
          <p className="fw-bold text-secondary fs-5">Hey, it feel so light!</p>
          <small>There is nothing in your bag. Let's add some items</small>{" "}
          <br /> <br />
          <Link to="/">
            <button className="btn btn-outline-danger rounded-0">
              ADD ITEMS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BagAlert;
