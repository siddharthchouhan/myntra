import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MyntraStoreProvider from "./store/data-store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Online shopping for Women, Men, Kids";
  })
  return (
    <MyntraStoreProvider>
      <div
        className="container-fluid p-0 position-relative"
        id="navMain"
        style={{ marginBottom: "8rem" }}
      >
        <Navbar></Navbar>
      </div>
      <div className="container-fluid p-0">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </MyntraStoreProvider>
  );
}

export default App;
