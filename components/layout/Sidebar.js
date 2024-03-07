/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Book_btn from "../atoms/Book-btn";
// import Contact_btn from "../atoms/Contact-btn";
// import ContactUs from "../molecules/ContactUs";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = () => {
    document.body.classList.remove("mobile-menu-active");
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style right-sidebar-height perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div>
            <div className="mobile-header-top">
              <Link href="/" className="">
                <Image
                  src="/assets/imgs/template/savior-logo.svg"
                  alt="logo"
                  width={102}
                  height={82}
                />
              </Link>
            </div>
            {/* <div
              className="burger-icon burger-icon-white"
              onClick={handleToggle}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div> */}
          </div>
          <div className="mobile-header-content-area right-sidebar-height ml-15">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border ml-20">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-home" />
                          Home
                        </a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/about" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-star" />
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/career" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-briefcase" />
                          Services
                        </a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/contact" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-paper-plane" />
                          Contact
                        </a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/faqs" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-headset" />
                          FaQs
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="btn-sidebar mt-4">
                <Book_btn />
              </div>

              <div className="site-copyright color-gray-400 mt-4">
                Copyright 2023 © Saviour Secruity Services.
                <br />
                Developed by --
                <Link href="#" legacyBehavior>
                  <a>Hkr</a>
                </Link>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
