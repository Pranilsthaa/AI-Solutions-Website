import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className="max-w-[1920px] m-auto bg-[#F6FCFF]">
      <div
        className={`flex flex-row justify-between items-center ${
          isScrolled ? "bg-white" : ""
        } fixed top-0 left-0 right-0 px-16 py-3 z-40 transition-all duration-500 ease-in-out`}
      >
        <img
          src="../../../public/image/finalPng1.png"
          alt=""
          className=" w-[180px] h-[60px] object-cover"
        />
        <ul className="flex flex-row gap-4 text-lg font-[500] font-poppins tracking-wider">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default Navbar;
