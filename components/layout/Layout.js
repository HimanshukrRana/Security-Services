import Head from "next/head";
import { useState } from "react";
import Seo from "../atoms/seo/Seo2";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, headerStyle }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    } else {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
    }
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/imgs/template/savior-logo.svg"
        />
      </Head>
      <Seo />

      <Header handleOpen={handleOpen} headerStyle={headerStyle} />
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
