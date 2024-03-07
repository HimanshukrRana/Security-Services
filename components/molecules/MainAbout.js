/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Book_btn from "../atoms/Book-btn";
import Apply_btn from "../atoms/Apply-btn";

export default function MainAbout() {
  return (
    <div className="section-box">
      <div className="banner-hero banner-homepage6">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 mt-30">
              <div className=" mb-20">
                <span className="tag-1  bg-color-blue">
                  What you want that you will get
                </span>
              </div>
              <h1 className="text-display-4">
                About our Security Services to improve your Security
              </h1>
            </div>
            <div className="col-lg-5 offset-xl-1 mt-30">
              <p className="text-body-lead-large color-gray-500">
                SAVIOR SECURITY SERVICES is one of the most trustworthy Service
                Providers engaged in offering reliable Security Services.We
                render cost-effective and dependable Security Services.
              </p>
              <div className="mt-40">
                <Book_btn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
