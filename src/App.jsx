import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MyntraStoreProvider from "./store/data-store";

function App() {
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
