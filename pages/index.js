/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import Layout from "../components/layout/Layout";

import AllServices from "../components/molecules/Services";
import MainHome from "../components/molecules/MainHome";
import Intro from "../components/atoms/Intro";

import Customers from "../components/molecules/Customers";

// import Seo from "../components/atoms/seo/Seo";

function About1() {
  // Open modal
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const openModal = () => {
    setModal(!modal);
  };
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <>
      <Layout>
        <MainHome />

        <Intro />

        {/* <Providing /> */}

        <AllServices />

        <Customers />

        {modal ? (
          <section className="modal__bg" onClick={openModal}>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <i className="fi-rr-refresh"></i>
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/oRI37cOPBQQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </Layout>
    </>
  );
}

export default About1;
