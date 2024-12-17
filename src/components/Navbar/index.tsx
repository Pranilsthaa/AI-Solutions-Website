import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Footer } from "../Footer";
import SearchInput from "../SearchInput";

function Navbar() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contactus";
  const isArticlesPage = location.pathname === "/articles";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > 100) {
        setIsScrolled(true); // Apply scrolled state (e.g., for a shadow effect)
      } else {
        setIsScrolled(false);
      }

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 50
      ) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Properly clean up listener
    };
  }, [lastScrollPosition]); // Add lastScrollPosition as a dependency

  return (
    <div className="max-w-[1920px] m-auto bg-[#F6FCFF]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.4 } }}
            exit={{ y: -100, transition: { duration: 0.6 } }}
            className={`flex flex-row justify-between items-center ${
              isScrolled ? "bg-nav text-slate-100" : ""
            } fixed top-0 left-0 right-0 px-16 py-3 z-40 transition-colors duration-500 ease-in-out`}
          >
            <Link to={"/"}>
              <img
                src="/image/finalpng1.png"
                alt=""
                className=" w-[180px] h-[60px] object-cover"
              />
            </Link>
            <ul
              className={`flex flex-row gap-4 text-lg font-[500] ${
                isContactPage && "text-slate-200"
              }  font-poppins tracking-wider`}
            >
              {isArticlesPage && <SearchInput />}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="events">Events</Link>
              </li>
              <li>
                <Link to="articles">Articles</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
