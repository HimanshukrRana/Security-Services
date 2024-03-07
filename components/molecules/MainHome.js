/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function MainHome() {
  const big = {
    img: "hero-banner-1.jpg",
  };

  const small = {
    img: "hero-banner-2.jpg",
  };

  return (
    <section className="section-box">
      <div className="banner-hero banner-2 bg-about-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <span className="tag-1 bg-color-blue">
                What You Want, that You Get
              </span>
              <h1 className="text-display-3 mt-30">
                A small well disciplined team excited to provide Security
              </h1>
              <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                To delight our clients by offering truly comprehensive and
                customized services which cater to even smallest need of each
                client and providing high quality service by delivering value
                for money to our clients.
              </p>
              <div className="mt-40">
                <Link href="/contact" legacyBehavior>
                  <a className="btn bg-color-blue btn-color shape-square icon-arrow-right-white">
                    Book Now
                  </a>
                </Link>

                <Link href="/contact" legacyBehavior>
                  <a className="btn btn-link color-gray-900 shape-square  text-heading-6">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-1 main-img">
                  <img
                    src={`/assets/imgs/page/about/1/${small.img}`}
                    alt="security"
                  />
                </div>
                <img
                  className="img-responsive shape-2 border-radius-20"
                  alt="security"
                  src={`assets/imgs/page/about/1/${big.img}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
