import { useEffect } from "react";
import MenCards from "./MenCards";

const Men = () => {
  useEffect(() => {
    document.title = "Shopping for Men";
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
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg"
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
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
              alt=""
            />
          </div>
        </a>

        <a href="#menCards">
          <div className="container-fluid px-5 d-flex justify-content-center flex-wrap gap-5">
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg"
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
            <MenCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
