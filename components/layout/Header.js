/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Book_btn from "../atoms/Book-btn";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" legacyBehavior>
                  <a className="d-flex">
                    {headerStyle ? (
                      <img
                        alt="Saviour"
                        src="/assets/imgs/template/logo-white.svg"
                      />
                    ) : (
                      <Image
                        alt="saviour"
                        src="/assets/imgs/template/savior-logo.svg"
                        width={112}
                        height={82}
                        className="mobile-logo"
                      />
                    )}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="has-children">
                      <Link href="/" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-home" />
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="/about" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-star" />
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="/career" legacyBehavior>
                        <a className="closer">
                          <i className="fi fi-rr-briefcase" />
                          Service
                        </a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="/contact" legacyBehavior>
                        <a>
                          <i className="fi fi-rr-paper-plane" />
                          Contact
                        </a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="/faqs" legacyBehavior>
                        <a className="closer">
                          <i className="fi fi-rr-headset" />
                          FAQs
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="block-signin">
                <Book_btn />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
