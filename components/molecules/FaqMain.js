/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FaqMain() {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Feel free to ask any questions regarding applying for the job or
              Want to hire security guards.Here you can{" "}
              <Link href="/contact"> -- Contact Us</Link>
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      {/* <div className="container mt-70">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/market.svg"
                        alt="  Saviour"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">Market research</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/consulting.svg"
                        alt="  Saviour"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">
                      Strategic Consulting
                    </h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/cognity.svg"
                        alt="  Saviour"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">Cognitive Solution</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
    </section>
  );
}
