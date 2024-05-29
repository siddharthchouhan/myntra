import { Link } from "react-router-dom";

const GlobalBrand = () => {
  return (
    <>
      <div className="container-fluid p-0 py-5 mt-5" id="brand">
        <h1 className="fw-bold pb-5 ps-5" style={{ letterSpacing: "3px" }}>
          GRAND GLOBAL BRANDS
        </h1>

        <Link to="/Men-Shopping">
          <div className="container-fluid m-0 p-0 w-100 d-flex" id="brandInner">
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png"
              alt=""
            />
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png"
              alt=""
            />
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png"
              alt=""
            />
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png"
              alt=""
            />
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png"
              alt=""
            />
            <img
              style={{ width: "16.6%" }}
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default GlobalBrand;
