import { useContext } from "react";
import { storeDataContext } from "../store/data-store";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SingleProducts = () => {
  const { singleProduct, addToBag } = useContext(storeDataContext);

  return (
    <>
      <p className="ps-5 ms-5 pt-5" id="singlePages">
       <Link to="/" className="text-dark text-decoration-none"> Home </Link> / <Link to="/Men-Shopping" className="text-dark text-decoration-none"> Men </Link> / {singleProduct[0].brand} / {singleProduct[0].body}
      </p>

      <div className="container-fluid mt-5 d-flex justify-content-center">
        <div
          className="d-flex justify-content-between gap-5"
          id="singleProducts"
          style={{ width: "80%" }}
        >
          <img
            src={singleProduct[0].img}
            className="card-img-top"
            style={{ width: "40%" }}
          />
          <div className="card-body">
            <div className="border-bottom border-bottom-1 border-secondary pb-2">
              <h2 className="card-title fw-bold">{singleProduct[0].brand}</h2>
              <p className="card-text fs-5 text-secondary pt-2">
                {singleProduct[0].body}
              </p>
              <p className="d-inline-flex px-3 align-items-center gap-2 border border-1">
                <span className="d-flex align-items-center gap-2 fw-bold border-end border-end-1 pe-2">
                  {singleProduct[0].rating}
                  <FaStar className="text-success" />
                </span>
                <span>{singleProduct[0].peopleRated} Ratings</span>
              </p>
            </div>
            <p className="d-flex gap-3 fs-4 pt-2">
              <span className="fw-bold">RS. {singleProduct[0].prize}</span>
              <span className="text-danger fw-bold">
                ({singleProduct[0].discount}OFF)
              </span>
            </p>
            <small className="fw-bold text-success">
              inclusive of all taxes
            </small>
            <p className="fw-bold text-black fs-5 pt-3">SELECT SIZE</p>
            {singleProduct[0].size.map((shoeSize) => (
              <div className="btn-group">
                <label className="btn btn-outline-danger mx-1 rounded-5">
                  {shoeSize}
                </label>
              </div>
            ))}
            <br /> <br />
            <div className="border-bottom border-bottom-1 border-secondary pb-4">
              <a
                href="#"
                onClick={() => addToBag(singleProduct[0])}
                className="btn btn-danger px-4 py-2 fs-5 d-flex align-items-center gap-3 w-50"
              >
                <IoBagHandleOutline className="fs-4" />
                ADD TO BAG
              </a>
            </div>
            <div className="py-2">
              <p className="fw-bold text-dark fs-6">PRODUCT DETAIL</p>

              {singleProduct[0].productDetail.map((detail) => (
                <div className="d-flex flex-column lh-sm">
                  <p className="text-dark fs-6">
                    <span className="fw-bold pe-2">Color:</span> {detail.color}
                  </p>
                  <p className="text-dark fs-6">
                    <span className="fw-bold pe-2">Warranty:</span>
                    {detail.warranty}
                  </p>
                  <p className="text-dark fs-6">
                    <span className="fw-bold pe-2">Material:</span>
                    {detail.material}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SingleProducts;
