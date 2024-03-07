/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="text-center mb-20">
          <span className="tag-1 bg-6 bg-color-blue">
            What We Do, What You Get
          </span>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900">
              Bringing the worlds
              <br className="d-lg-block d-none" />
              ideas to life
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Developers are trusted to create an engaging experience for their
              companies, so we build tools to help them.
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-70">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="card-grid-style-3 pb-40 bg-5 mb-30">
              <div className="grid-1-img">
                <Image
                  src="/assets/imgs/page/svg/local.svg"
                  alt="  Saviour"
                  height={10}
                  width={10}
                  className="hw-auto"
                />
              </div>
              <h3 className="text-heading-3 mt-20">Vision</h3>
              <p className="text-body-excerpt mt-20">
                We are committed to the pursuit of excellence in all aspects of
                service delivery through a high degree of motivation and
                continuous upskilling of our personnel, in order to surpass
                client expectations.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
              <div className="grid-1-img">
                <Image
                  src="/assets/imgs/page/svg/local.svg"
                  alt="  Saviour"
                  height={10}
                  width={10}
                  className="hw-auto"
                />
              </div>
              <h3 className="text-heading-3 mt-20">Mission</h3>
              <p className="text-body-excerpt mt-20">
                Our mission is to provide ironclad security and protection to
                our clients through tailored service delivery, based on trust
                and loyalty, by combining seamless operations and total
                conformity to the governing statutes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card-grid-style-3 bg-2 pb-40 mb-30">
              <div className="grid-1-img">
                <Image
                  src="/assets/imgs/page/svg/social.svg"
                  alt="  Saviour"
                  height={10}
                  width={10}
                  className="hw-auto"
                />
              </div>
              <h3 className="text-heading-3 mt-20">Objective</h3>
              <p className="text-body-excerpt mt-20">
                To provide our clients a well-trained team of security personnel
                and surveillance products that will relieve them from all
                unwanted botherations and vexations from bad elements pertaining
                to their safety, security and protection within their premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
