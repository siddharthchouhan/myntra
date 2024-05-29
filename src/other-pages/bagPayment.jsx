import { useContext, useEffect, useState } from "react";
import { storeDataContext } from "../store/data-store";
import { Link } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import BagAlert from "./bagAlert";
import { BiSolidOffer } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { IoCashSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import {
  Banking,
  Card,
  PayLater,
  PayOnDelivery,
  Recommended,
  UPI,
  Wallet,
} from "./payments/paymentsMethod";

const BagPayment = () => {
  useEffect(() => {
    document.title = "Shopping bag Payment";
  }, []);

  const { bagItems } = useContext(storeDataContext);

  const [payment, setPayment] = useState("recommended");

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
                <li>
                  <Link
                    to="/bag/Address"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary"
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
                <li className="border-bottom border-2 border-success">
                  <Link
                    to="/bag/Address/Payment"
                    style={{ letterSpacing: "2px" }}
                    className="nav-link px-2 text-secondary fs-6  text-success fw-bold"
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
                <div className="border border-1 rounded-1 px-3 py-2 mt-2">
                  <p className="m-0">
                    <BiSolidOffer className="fs-4" />
                    <small className="fw-bold ps-2">Available Offers</small>
                  </p>
                  <small>
                    10% Instant Discount on SBI Credit Card and Credit Card EMI
                    transactions on min. spend of ₹5,000. TCA
                  </small>
                </div>

                <div className="px-3 py-3">
                  <small className="fw-bold text-dark fs-6">
                    Choose Payment Mode
                  </small>
                </div>

                <div className="border border-1 rounded-1 mt-2 lh-lg d-flex">
                  <ul
                    className="list-group m-0 rounded-0 border-0"
                    style={{ width: "70%" }}
                  >
                    <li
                      className={` ${
                        payment === "recommended" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("recommended")}
                    >
                      <CiStar />
                      <span className="fw-normal text-secondary">
                        Recommended
                      </span>
                    </li>
                    <li
                      className={` ${
                        payment === "cash" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("cash")}
                    >
                      <IoCashSharp />
                      <span className="fw-normal text-secondary">
                        Cash On Delivery
                      </span>
                    </li>
                    <li
                      className={` ${
                        payment === "upi" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("upi")}
                    >
                      <MdPayment />
                      <span className="fw-normal text-secondary">
                        UPI (Pay Via Any Apps)
                      </span>
                    </li>
                    <li
                      className={` ${
                        payment === "card" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("card")}
                    >
                      <CiCreditCard1 />{" "}
                      <span className="fw-normal text-secondary">
                        Credit/Debit Card
                      </span>
                    </li>
                    <li
                      className={` ${
                        payment === "wallet" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("wallet")}
                    >
                      <CiWallet />
                      <span className="fw-normal text-secondary">Wallet</span>
                    </li>
                    <li
                      className={` ${
                        payment === "payLater" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("payLater")}
                    >
                      <MdOutlineCurrencyRupee />
                      <span className="fw-normal text-secondary">
                        Pay Later
                      </span>
                    </li>
                    <li
                      className={` ${
                        payment === "banking" && "payActive"
                      } list-group-item fw-normal d-flex align-items-center gap-2`}
                      style={{ backgroundColor: "#f4f4f5", cursor: "pointer" }}
                      onClick={() => setPayment("banking")}
                    >
                      <AiFillBank />
                      <span className="fw-normal text-secondary">
                        Net Banking
                      </span>
                    </li>
                  </ul>

                  <div className="w-100 px-5 py-3">
                    {payment === "recommended" && <Recommended />}
                    {payment === "cash" && <PayOnDelivery />}
                    {payment === "upi" && <UPI />}
                    {payment === "card" && <Card />}
                    {payment === "wallet" && <Wallet />}
                    {payment === "payLater" && <PayLater />}
                    {payment === "banking" && <Banking />}
                  </div>
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
                      <span>Total MRP</span>
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
                        RS.
                        {bagItems.reduce((amount, value) => {
                          return amount + Number(value.prize);
                        }, 30)}
                      </span>
                    </small>
                  </p>

                  <Link to="/bag/Address/order-confirm">
                    <button
                      className="btn btn-danger w-100"
                      style={{ letterSpacing: "2px" }}
                    >
                      PLACE ORDER
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

export default BagPayment;
