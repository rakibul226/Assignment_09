import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
