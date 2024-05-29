import { RiSecurePaymentFill } from "react-icons/ri";
import { SiPhonepe } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiAirtel } from "react-icons/si";
import { CiMoneyBill } from "react-icons/ci";

export const Recommended = () => {
  return (
    <>
      <p className="fw-bold text-dark fs-5">
        <small>Recommended Payment Options</small>
      </p>

      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="d-flex align-items-center gap-3 w-100">
          <span>
            <input type="radio" checked />
          </span>
          <span>
            <p className="fw-bold m-0">
              <small>1234567890@axl</small>
            </p>
            <p className="fw-light m-0">
              <small>SIDDHARTH SINGH CHOUHAN</small>
            </p>
          </span>
        </div>
        <span>
          <RiSecurePaymentFill />
        </span>
      </div>

      <button className="btn w-100 btn-danger mt-2">PAY NOW</button>
    </>
  );
};

export const PayOnDelivery = () => {
  return (
    <>
      <div
        className="border-0 rounded-2 p-2 lh-sm"
        style={{ backgroundColor: "#f4f4f5" }}
      >
        <p
          className="text-capitalize m-0 fw-bold pb-2"
          style={{ color: "#ee5f73" }}
        >
          <small>pay on delivery is not available</small>
        </p>
        <p className="fw-light m-0">
          <small>
            Pay on Delivery payment option is not available for your shipping
            address
          </small>
        </p>
      </div>
    </>
  );
};

export const UPI = () => {
  return (
    <>
      <p className="fw-bold text-dark fs-5">
        <small>Pay Using UPI</small>
      </p>

      <ul className="list-group lh-base">
        <li className="list-group-item d-flex gap-2 align-items-center border-0">
          <input type="radio" name="payment" />
          <p className="d-flex align-items-center mt-2">
            <span>
              <SiPhonepe className="fs-3" />
            </span>
            <span className="fw-light pt-1 ps-2">PhonePe</span>
          </p>
        </li>
        <li className="list-group-item d-flex gap-2 align-items-center border-0">
          <input type="radio" name="payment" />
          <p className="d-flex align-items-center mt-2">
            <span>
              <FaGooglePay className="fs-3" />
            </span>
            <span className="fw-light pt-1 ps-2">Google Pay</span>
          </p>
        </li>
      </ul>

      <button className="btn w-100 btn-danger mt-2">PAY NOW</button>
    </>
  );
};

export const Card = () => {
  return (
    <>
      <p className="m-0 lh-sm fw-bold">
        <small>
          please ensure your card can be used for online transaction{" "}
        </small>
      </p>

      <div className="mt-2 cardInp">
        <input
          type="text"
          className="border border-1 w-100 px-3 my-3"
          placeholder="Card Number"
        />
        <input
          type="text"
          className="border border-1 w-100 px-3 my-3"
          placeholder="Name On Card"
        />
        <div className="d-flex gap-3">
          <input
            type="text"
            className="border border-1 w-50 px-3 my-3"
            placeholder="Valid Thru (MM/YY)"
          />
          <input
            type="text"
            className="border border-1 w-50 px-3 my-3"
            placeholder="CVV"
          />
        </div>
      </div>
      <button className="btn w-100 btn-danger mt-2">PAY NOW</button>
    </>
  );
};

export const Wallet = () => {
  return (
    <>
      <p className="fw-bold text-dark fs-5">
        <small>Pay Using UPI</small>
      </p>

      <ul className="list-group lh-base">
        <li className="list-group-item d-flex gap-2 align-items-center border-0">
          <input type="radio" name="payment" />
          <p className="d-flex align-items-center mt-2">
            <span>
              <SiAirtel className="fs-3" />
            </span>
            <span className="fw-light pt-1 ps-2">Airtel Payment Bank</span>
          </p>
        </li>
        <li className="list-group-item d-flex gap-2 align-items-center border-0">
          <input type="radio" name="payment" />
          <p className="d-flex align-items-center mt-2">
            <span>
              <CiMoneyBill className="fs-3" />
            </span>
            <span className="fw-light pt-1 ps-2">
              OlaMoney (Wallet + PostPaid)
            </span>
          </p>
        </li>
      </ul>

      <button className="btn w-100 btn-danger mt-2">PAY NOW</button>
    </>
  );
};

export const PayLater = () => {
  return (
    <>
      <div
        className="border-0 rounded-2 p-3 lh-sm"
        style={{ backgroundColor: "#f4f4f5" }}
      >
        <p className="text-capitalize m-0 fw-bold" style={{ color: "#ee5f73" }}>
          <small>Currently Not Eligibl For Pay Later!</small>
        </p>
      </div>
    </>
  );
};

export const Banking = () => {
  return (
    <>
      <div
        className="border-0 rounded-2 p-3 lh-sm"
        style={{ backgroundColor: "#f4f4f5" }}
      >
        <p className="text-capitalize m-0 fw-bold" style={{ color: "#ee5f73" }}>
          <small>
            Currently Net Banking is Not Available Try On your second Purchase!!
          </small>
        </p>
      </div>
    </>
  );
};
