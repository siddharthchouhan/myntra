import { useContext, useEffect } from "react";
import { storeDataContext } from "../store/data-store";
import { Link } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import BagAlert from "./bagAlert";

const BagAddress = () => {
  useEffect(() => {
    document.title = "Shopping bag Address";
  }, []);

  const { bagItems } = useContext(storeDataContext);

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
                <li>
                  <Link
                    to="/bag"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 fs-6 text-secondary"
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
                <li className="border-bottom border-2 border-success">
                  <a
                    href="#"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-success fs-6 fw-bold"
                  >
                    ADDRESS
                  </a>
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
                <div className=" px-3 py-2 d-flex align-items-center justify-content-between">
                  <div>
                    <small>
                      <p className="m-0 fw-bold fs-6">
                        Select Delivery Address
                      </p>
                    </small>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark fw-bold btn-sm">
                      ADD NEW ADDRESS
                    </button>
                  </div>
                </div>

                <div className="px-3 py-2">
                  <small className="fw-bold text-secondary">
                    DEFAULT ADDRESS
                  </small>
                </div>

                <div className="border border-1 rounded-1 px-3 py-2 mt-2 lh-lg ">
                  <input type="radio" className="text-danger bg-danger" />
                  <small className="fw-bold text-black ps-2">
                    Siddharth Singh Chouhan
                  </small>
                  <span class="badge text-bg-success ms-3">HOME</span>
                  <small>
                    <p className="m-0">
                      Address, Ajmer, Rajasthan, India, 305001
                    </p>
                  </small>
                  <small>
                    <p className="m-0">Mobile No: 1234567890</p>
                  </small>
                  <ul>
                    <small>
                      <li>Pay on delivery not available</li>
                    </small>
                  </ul>
                  <button className="btn btn-sm btn-outline-dark">
                    REMOVE
                  </button>
                  <button className="btn btn-sm btn-outline-dark ms-3">
                    EDIT
                  </button>
                </div>

                <div
                  className="rounded-1 px-3 py-2 mt-2 lh-lg "
                  style={{ border: "1px dotted gray" }}
                >
                  <p className="fw-bold text-danger m-0 py-3">
                    + Add New Address
                  </p>
                </div>
              </div>
            </div>
            <div className="container border-start border-1 d-flex" id="bagRight">
              <div style={{ width: "75%" }} id="bagRightInner">
                <div>
                  <small className="fw-bold">DELIVERY ESTIMATES</small>
                  <p className="w-100 py-3">
                    {bagItems.map((items) => (
                      <>
                        <img
                          src={items.img}
                          style={{ width: "10%" }}
                          className="ms-2"
                        />
                      </>
                    ))}
                    <span className="ps-2">
                      Estimated Delivery By:
                      <span className="fw-bold">
                        {new Date().toDateString()}
                      </span>
                    </span>
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
                        RS.{" "}
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
                        RS.
                        {bagItems.reduce((amount, value) => {
                          return amount + Number(value.prize);
                        }, 30)}
                      </span>
                    </small>
                  </p>

                  <Link to="/bag/Address/Payment">
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

export default BagAddress;
