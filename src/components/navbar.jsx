import { useContext } from "react";
import logo from "../images/logo.webp";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { storeDataContext } from "../store/data-store";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { bagItems, navData } = useContext(storeDataContext);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav
        className="navbar navbar-expand-xxl bg-white px-5 fixed-top my-0 py-0"
        id="navbar"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ width: "4%" }} to="/">
            <img src={logo} alt="...Logo" className="w-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse h-100"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav me-auto mb-lg-0 gap-4 text-black fs-6 ms-5"
              id="navUl"
            >
              {navData.map((navItems) => (
                <li className="nav-item py-4">
                  <Link className="nav-link fw-bold" to="/Men-Shopping">
                    {navItems}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex" style={{ width: "40%" }} role="search">
              <div
                style={{ backgroundColor: "#f5f5f6", width: "74%" }}
                className="d-flex align-items-center px-3 rounded-2"
              >
                <a href="/" className="nav-link">
                  <CiSearch className="fs-4" />
                </a>
                <input
                  className="form-control me-2 border-0"
                  style={{
                    width: "100%",
                    backgroundColor: "#f5f5f6",
                    border: "1px solid #f5f5f6",
                  }}
                  type="search"
                  placeholder="Search for products, brands & more"
                  aria-label="Search"
                />
              </div>
            </form>
            <div
              className="d-flex gap-4 flex-wrap justify-content-start"
              id="navRight"
            >
              <div className="dropdown">
                <li
                  className="nav-item fw-bold d-flex flex-column align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CiUser className="fs-3 fw-bold" />
                  User
                </li>
                <ul
                  className="dropdown-menu p-3 ms-0"
                  id="userInfo"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {isAuthenticated ? (
                    <>
                      <p
                        className="fw-bold d-flex flex-column align-items-center"
                        style={{ color: "#ee5f73" }}
                      >
                        <span>Welcome!</span>
                        {user.name}
                      </p>
                      <li>
                        <a
                          href="/"
                          className="nav-link fw-bold d-flex flex-column align-items-center"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          <CiUser className="fs-3 fw-bold" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a
                        href="/"
                        className="nav-link fw-bold d-flex flex-column align-items-center"
                        onClick={() => loginWithRedirect({auto_login: false, loginAfterSignup: false})}
                      >
                        <CiUser className="fs-3 fw-bold" />
                        <span>Login</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <a
                href="/"
                className="nav-link fw-bold d-flex flex-column align-items-center"
              >
                <CiHeart className="fs-3 fw-bold" />
                <span>Wishlist</span>
              </a>
              <Link
                to="/bag"
                className="position-relative nav-link fw-bold d-flex flex-column align-items-center"
              >
                <span>
                  <IoBagHandleOutline className="fs-3 fw-bold" />
                </span>
                <span>Bag</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {bagItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
