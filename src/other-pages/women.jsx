import { useEffect } from "react";
import MenCards from "./MenCards";
import WomenCards from "./womenCards";

const Women = () => {
  useEffect(() => {
    document.title = "Shopping for Women";
  }, []);
  return (
    <>
      <a href="#menCards">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/29/1ec0c4aa-ae29-4885-afb0-7c40a8d9cab51716983601539-DESKTOP-WP-BANNER.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </a>

      <div className="container-fluid p-0 mt-5 pt-5">
        <h1 className="fw-bold pb-5 ps-5" style={{ letterSpacing: "3px" }}>
          BIGGEST DEALS ON TOP BRANDS
        </h1>

        <a href="#menCards">
          <div className="container-fluid px-5 d-flex justify-content-center flex-wrap gap-5">
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/19/f3acbe47-0f10-4e85-9dff-53bff27e2cdc1716102058220-image_png_505564337.png"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/19/55f10079-69a1-4955-bf45-e0da0a3ddc201716102152348-image_png_1131324270.png"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/17/d9292678-d410-4df9-8d25-54ebc406b9841715935572961-Boohoo-_DP.png"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/19/ed3873ed-2476-48dc-a680-b900570213a01716102202804-image_png992980488.png "
              alt=""
            />
          </div>
        </a>

        <div className="container-fluid p-0 px-5 mt-5 py-5" id="menCards">
          <h1
            className="fw-bold pb-5 ps-5 py-5"
            style={{ letterSpacing: "3px" }}
          >
            Men Products
          </h1>
          <div className="container-fluid d-flex justify-content-evenly flex-wrap">
            <WomenCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
