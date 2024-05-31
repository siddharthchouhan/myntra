import { useContext, useEffect } from "react";
import { storeDataContext } from "../store/data-store";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import { Link, Outlet } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import BagAlert from "./bagAlert";

const Bag = () => {

  useEffect(() => {
    document.title = "Shpping Bag";
  }, []);

  const { bagItems, removeToCart } = useContext(storeDataContext);

  return (
    <>
      {bagItems.length === 0 ? (
        <BagAlert />
      ) : (
        <>
          <div className="container-fluid px-5">
            <header className="d-flex flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom" id="bagHeader">
              <div className="col-md-3 mb-2 mb-md-0">
                <Link
                  to="/"
                  className="d-inline-flex link-body-emphasis text-decoration-none"
                >
                  <p className="fw-bold fs-5 text-secondary">Shopping Bag</p>
                </Link>
              </div>

              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="border-bottom border-2 border-success">
                  <Link
                    to="/bag"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-success fs-6 fw-bold"
                  >
                    BAG
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary fs-6"
                  >
                    ------
                  </a>
                </li>
                <li>
                  <Link
                    to="/bag/Address"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary fs-6"
                  >
                    ADDRESS
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary fs-6"
                  >
                    ------
                  </a>
                </li>
                <li>
                  <Link
                    to="/bag/Address/Payment"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary fs-6"
                  >
                    PAYMENT
                  </Link>
                </li>
              </ul>

              <div className="col-md-3 text-end">
                <MdVerifiedUser className="fs-1 text-success" />
                <span style={{ letterSpacing: "2px" }}>100% SECURE</span>
              </div>
            </header>
          </div>
          <div className="container p-0 d-flex justify-content-center" id="bagOuter">
            <div className="container d-flex flex-column align-items-end">
              <div style={{ width: "100%" }}>
                <div
                  style={{ backgroundColor: "#fff6f4" }}
                  className="border border-1 rounded-1 px-3 py-2 d-flex align-items-center justify-content-between flex-wrap"
                >
                  <div>
                    <small>
                      <p className="m-0">
                        Deliver to:
                        <span className="fw-bold ps-1">
                          Siddharth Singh Chouhan, 305001
                        </span>
                      </p>
                    </small>
                    <small>ABC Ajmer, Rajasthan, India, 305001</small>
                  </div>
                  <div>
                    <button className="btn btn-outline-danger">
                      CHANGE ADDRESS
                    </button>
                  </div>
                </div>

                <div className="border border-1 rounded-1 px-3 py-2 mt-2">
                  <p className="m-0">
                    <BiSolidOffer className="fs-4" />{" "}
                    <small className="fw-bold ps-2">Available Offers</small>
                  </p>
                  <small>
                    10% Instant Discount on SBI Credit Card and Credit Card EMI
                    transactions on min. spend of ₹5,000. TCA
                  </small>
                </div>

                {bagItems.map((menCardsItems) => (
                  <div
                    key={menCardsItems.key}
                    className="card border p-2 border-1 d-flex flex-row mt-2"
                    id="singleCards"
                    style={{ width: "100%" }}
                  >
                    <div className="w-25" id="singleCardImage">
                      <img
                        src={menCardsItems.img}
                        className="card-img-top w-100"
                      />
                    </div>
                    <div className="card-body lh-lg">
                      <h5 className="card-title">{menCardsItems.brand}</h5>
                      <p className="card-text m-0">{menCardsItems.body}</p>
                      <p className="fs-5 text-black fw-bold m-0 pb-2">
                        RS. {menCardsItems.prize}
                      </p>
                      <button
                        onClick={() => removeToCart(menCardsItems)}
                        className="btn btn-outline-danger text-nowrap d-flex align-items-center gap-2 justify-content-evenly"
                      >
                        Remove From Bag
                        <IoIosRemoveCircleOutline className="fs-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container border-start border-1 d-flex" id="bagRight">
              <div style={{ width: "75%" }} id="bagRightInner">
                <div>
                  <small className="fw-bold">COUPONS</small>
                  <p className="d-flex justify-content-between align-items-center border-bottom border-1 pb-3">
                    <span>
                      <MdOutlineLocalOffer className="fs-4 fw-lighter" />{" "}
                      <small className="fw-bold ps-3">Apply Coupons</small>
                    </span>
                    <button className="btn btn-sm btn-outline-danger">
                      APPLY
                    </button>
                  </p>
                </div>
                <div>
                  <small className="fw-bold text-secondary">
                    PRIZE DETAILS: ({bagItems.length} Items)
                  </small>
                  <p className="pt-4 m-0 pb-1">
                    <small className="d-flex justify-content-between">
                      <span>Total MRP</span>{" "}
                      <span>
                        RS.
                        {bagItems.reduce((amount, value) => {
                          return amount + Number(value.prize);
                        }, 0)}
                      </span>
                    </small>
                  </p>
                  <p className="pb-1 m-0">
                    <small className="d-flex justify-content-between">
                      <span>Social Work Donation</span> <span>RS. 10</span>
                    </small>
                  </p>
                  <p className="pb-1 m-0">
                    <small className="d-flex justify-content-between">
                      <span>Platform Fee</span> <span>RS. 20</span>
                    </small>
                  </p>
                  <p className="pb-3 m-0 border-bottom border-1">
                    <small className="d-flex justify-content-between">
                      <span>Shipping Fee</span>{" "}
                      <span className="text-success">FREE</span>
                    </small>
                  </p>

                  <p className="py-2 m-0">
                    <small className="d-flex justify-content-between">
                      <span className="fw-bold">Total Amount</span>{" "}
                      <span className="fw-bold">
                        RS.{" "}
                        {bagItems.reduce((amount, value) => {
                          return amount + Number(value.prize);
                        }, 30)}
                      </span>
                    </small>
                  </p>

                  <Link to="/bag/Address">
                    <button
                      className="btn btn-danger w-100"
                      style={{ letterSpacing: "2px" }}
                    >
                      CONTINUE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default Bag;
