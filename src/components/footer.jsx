import { useContext } from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";
import { storeDataContext } from "../store/data-store";

const Footer = () => {

  const {navData, costumerPolicy} = useContext(storeDataContext)

  return (
    <>
      <div
        className="container-fluid p-0 mt-5"
        style={{ backgroundColor: "FAFBFC" }}
      >
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <p className="fw-bold">ONLINE SHOPPING</p>
                <ul className="nav flex-column">
                  {navData.map(footerItems => <li className="nav-item mb-2 ">
                    <Link
                      to={footerItems.to}
                      className="nav-link p-0 text-body-secondary text-lowercase"
                    >
                      {footerItems.name}
                    </Link>
                  </li>)}
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <p className="fw-bold">COSTUMER POLICIES</p>
                <ul className="nav flex-column">
                  {costumerPolicy.map(costumer => <li className="nav-item mb-2">
                    <a href="" className="nav-link p-0 text-body-secondary">
                      {costumer}
                    </a>
                  </li>)}
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <p className="fw-bold text-nowrap">
                  EXPERIENCE MYNTRA APP ON MOBILE
                </p>
                <ul className="nav d-flex align-items-center gap-3 flex-nowrap">
                  <li className="nav-item mb-2 w-50">
                    <a
                      href=""
                      className="nav-link p-0 text-body-secondary w-100"
                    >
                      <img
                        className="w-100"
                        src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-50">
                    <a
                      href=""
                      className="nav-link p-0 text-body-secondary w-100"
                    >
                      <img
                        className="w-100"
                        src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>

                <p className="fw-bold text-nowrap pt-3">KEEP IN TOUCH</p>
                <ul className="nav d-flex align-items-center gap-3 flex-nowrap">
                  <li className="nav-item mb-2">
                    <a href="" className="nav-link p-0 text-body-secondary">
                      <FaFacebookSquare className="fs-4" />
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="" className="nav-link p-0 text-body-secondary">
                      <FaTwitter className="fs-4" />
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="" className="nav-link p-0 text-body-secondary">
                      <FaYoutube className="fs-4" />
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="" className="nav-link p-0 text-body-secondary">
                      <ImInstagram className="fs-4" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <div className="d-flex align-items-center justify-content-center">
                  <div>
                    <img
                      className="w-75"
                      src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>
                      <span className="fw-bold">100% ORIGINAL</span>guarantee
                      for all <br /> product at myntra.com
                    </p>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center justify-content-center mt-4 gap-3"
                  style={{ marginLeft: "-10%" }}
                >
                  <div style={{ width: "12%" }}>
                    <img
                      className="w-100"
                      src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>
                      <span className="fw-bold">Retun within 14 days</span>of
                      <br />
                      receiving your orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 my-5 border-top">
              <p className="fw-bold">ONLINE SHOPPING MADE EASY AT MYNTRA</p>
              <p>
                If you would like to experience the best of online shopping for
                men, women and kids in India, you are at the right place. Myntra
                is the ultimate destination for fashion and lifestyle, being
                host to a wide array of merchandise including clothing,
                footwear, accessories, jewellery, personal care products and
                more. It is time to redefine your style statement with our
                treasure-trove of trendy items. Our online store brings you the
                latest in designer products straight out of fashion houses. You
                can shop online at Myntra from the comfort of your home and get
                your favourites delivered right to your doorstep.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
