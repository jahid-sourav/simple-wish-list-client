import { FaRegHeart } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <div className="template-container">
      <p className="footer-text">
        <span>
          <MdCopyright />
        </span>
        <a
          href="https://github.com/jahid-sourav"
          target="_blank"
          className="mr-1 text-blue-500"
        >
          Jahid
        </a>{" "}
        All rights reserved || Made with{" "}
        <span className="text-red-500 ml-1">
          <FaRegHeart />
        </span>
      </p>
    </div>
  );
}

export default Footer;
