"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "unauthenticated";

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={`${styles.link}`}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={`${styles.link}`}>
            Write
          </Link>
          <span className={`${styles.link}`}>Logout</span>
        </>
      )}

      {/* Hamburger icon */}
      <div
        className={`${styles.burger}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open ? (
          <>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.line}`}></div>
          </>
        ) : (
          <div className={`${styles.times}`}>
            <FaTimes size={24}/>
          </div>
        )}
      </div>

      {open && (
        <div className={`${styles.menuItems}`}>
          <Link href="/" className={`${styles.menuItem}`}>
            Homepage
          </Link>
          <Link href="/contact" className={`${styles.menuItem}`}>
            Contact
          </Link>
          <Link href="/about" className={`${styles.menuItem}`}>
            About
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" className={`${styles.menuItem}`}>
              Login
            </Link>
          ) : (
            <div className={`${styles.pairItems}`}>
              <Link href="/write" className={`${styles.menuItem}`}>
                Write
              </Link>
              <span className={`${styles.pairItem} ${styles.menuItem}`}>
                Logout
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
