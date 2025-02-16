import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./navbar.module.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.social}`}>
        <FaFacebookSquare size={24} color="#1877F2" />
        <FaInstagramSquare size={24} color="#E4405F" />
        <FaSquareXTwitter size={24} color="#000" />
        <FaYoutubeSquare size={24} color="#FF0000" />
      </div>
      <div className={`${styles.logo}`}>TimesTune</div>
      <div className={`${styles.mobilelogo}`}>TT</div>
      <div className={`${styles.links}`}>
        <ThemeToggle />
        <Link href="/" className={`${styles.link}`}>
          Homepage
        </Link>
        <Link href="/" className={`${styles.link}`}>
          Contact
        </Link>
        <Link href="/" className={`${styles.link}`}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
