import { Outlet } from "react-router-dom";
import portfolio from "../assets/portfolio.jpg";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
const Main = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed"
      style={{
        backgroundImage: `url(${portfolio})`,
      }}
    >
      <div className="hero-overlay bg-gray-950 bg-opacity-90 md:bg-opacity-95 flex flex-col md:flex-row-reverse justify-center md:items-center ">
        <div className=" sticky z-20 top-0">
          <Navbar></Navbar>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
