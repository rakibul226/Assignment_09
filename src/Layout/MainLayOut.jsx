import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayOut = () => {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
