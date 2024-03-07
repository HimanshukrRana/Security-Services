/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import Counter from "../components/molecules/Counter";
import Ideas from "../components/molecules/Ideas";
import MainAbout from "../components/molecules/MainAbout";
import Providing from "../components/molecules/Providing";

import Choose_Us from "../components/molecules/Choose-Us";

import Founders from "../components/molecules/Founders";

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
        <MainAbout />

        <Counter />

        <Founders />

        <Providing />

        <Ideas />

        <Choose_Us />

        {/* <AboutContact /> */}
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
