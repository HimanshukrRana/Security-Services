import React from "react";
import Apply_btn from "../atoms/Apply-btn";
import Book_btn from "../atoms/Book-btn";

export default function MainServices() {
  return (
    <section className="section-box">
      <div className="banner-hero banner-3">
        <div className="container">
          <div className="text-center">
            <span className="tag-1 bg-blue-color">Secruity Services</span>
            <h2 className="text-heading-1 color-gray-900 mb-10">
              Choose the category
              <br className="d-lg-block d-none" />
              where you expert and Apply for the Job
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              In a professional context it often happens that private or
              corporate
              <br className="d-lg-block d-none" />
              clients order a publication to publish news.
            </p>
            <div className="mt-50">
              <Apply_btn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
