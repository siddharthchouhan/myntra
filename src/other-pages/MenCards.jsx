import { useContext, useEffect } from "react";
import { storeDataContext } from "../store/data-store";
import { Link } from "react-router-dom";

const MenCards = () => {
  const { getSingleProducts, productsData } = useContext(storeDataContext);

  return (
    <>
      {productsData.map((menCardsItems) => (
        <div
          key={menCardsItems.key}
          className="card border-0 text-decoration-none"
          style={{ width: "17rem" }}
        >
          <Link
            className="text-decoration-none text-dark p-0 m-0 w-100"
            to="/single-products"
            onClick={() => getSingleProducts(menCardsItems)}
          >
            <div id="menCard" className="position-relative">
              <img src={menCardsItems.img} className="card-img-top w-100" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{menCardsItems.brand}</h5>
              <p className="card-text">{menCardsItems.body}</p>
              <p className="fs-5 text-black fw-bold">
                RS. {menCardsItems.prize}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MenCards;
