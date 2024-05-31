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
          <button onClick={() => loginWithRedirect()}>Login</button>
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default Bag;
