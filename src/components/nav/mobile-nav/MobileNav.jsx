import { Button, Drawer, IconButton } from "@material-tailwind/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";

function MobileNav() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <div className="block lg:hidden">
      <div>
        <span onClick={openDrawerRight} className="hamburger-icon">
          <RxHamburgerMenu />
        </span>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="text-right">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          >
            Home
          </NavLink>
        </div>
        <div className="mb-6">
          <NavLink
            to="/another"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          >
            Another
          </NavLink>
        </div>
        <div className="mb-0">
          <Button
            variant="gradient"
            className="rounded-full font-normal text-lg capitalize w-full hover:shadow-none"
          >
            Login
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileNav;
