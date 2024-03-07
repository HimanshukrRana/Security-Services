import React from "react";

import TestimonialSlider from "../slider/Testimonial";

export default function Founders() {
  return (
    <section className="section-box">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-9 col-sm-8">
            <h3 className="text-heading-1 mb-10">Our Customers</h3>
            <p className="text-body-lead-large color-gray-600">
              Know from our Regular Customer,as we provide best Secruity
              Services
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-80 ">
        <TestimonialSlider />
      </div>
    </section>
  );
}
