import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import EmptyBag from "./emptyBagError";

const Bag = () => {
  useEffect(() => {
    document.title = "Shpping Bag";
  }, []);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <EmptyBag />
      ) : (
        <>
          <div
            className="container-fluid d-flex justify-content-center alig-items-center py-3"
            style={{ height: "40vh" }}
          >
            <div className="d-flex justify-content-center gap-1 align-items-center flex-column">
              <h1 className="fw-bold text-center" style={{color: "#ee5f73"}}>Login to check Bag Items!</h1>
              <p className="text-secondary m-0 pb-2"><small>click the button below to login</small></p>
              <button className="btn btn-danger" onClick={() => loginWithRedirect({auto_login: false})}>Login</button>
            </div>
          </div>
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default Bag;
