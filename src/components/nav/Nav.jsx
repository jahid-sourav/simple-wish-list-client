import { Button } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import MobileNav from "./mobile-nav/MobileNav";

function Nav() {
  return (
    <div className="template-container">
      <div className="flex items-center justify-between">
        {/* Logo Starts Here */}
        <Link to="/" className="logo">
          Logo
        </Link>
        {/* Logo Ends Here */}

        {/* Nav Links Starts Here */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : "default-nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/another"
              className={({ isActive }) =>
                isActive ? "active-nav-link" : "default-nav-link"
              }
            >
              Another Page
            </NavLink>
          </div>
        </div>
        {/* Nav Links Ends Here */}

        {/* Login Starts Here */}
        <div className="hidden lg:block">
          <Button
            variant="gradient"
            className="rounded-full font-normal text-lg capitalize hover:shadow-none"
          >
            Login
          </Button>
        </div>
        {/* Login Ends Here */}

        {/* Mobile Nav Starts Here */}
        <MobileNav />
        {/* Mobile Nav Ends Here */}
      </div>
    </div>
  );
}

export default Nav;
