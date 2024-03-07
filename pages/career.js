/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Apply_btn from "../components/atoms/Apply-btn";
import Book_btn from "../components/atoms/Book-btn";
import JobDesc from "../components/atoms/JobDesc";
import Layout from "../components/layout/Layout";
import ContactUs from "../components/molecules/ContactUs";
import AllJobs from "../components/molecules/Jobs";
import MainServices from "../components/molecules/MainServices";

function Career() {
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
        <MainServices />

        <JobDesc />

        <AllJobs />

        <ContactUs />

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

export default Career;
