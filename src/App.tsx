import { Outlet } from "react-router-dom";
// import { Button } from "./components/ui/button"
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );

}

export default App

