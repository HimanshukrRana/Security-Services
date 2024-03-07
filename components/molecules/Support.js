/* eslint-disable @next/next/no-img-element */
import React from "react";
import SupportSlider from "../slider/SupportSlide";
export default function Support() {
  return (
    <section className="section-box mt-100">
      <div className="container text-center">
        <h3 className="text-heading-1 mb-10">Still have a questions?</h3>
        <p className="text-body-lead-large color-gray-600 mt-30">
          If you cannot find answer to your question in our FAQ, you can always
          <br className="d-lg-block d-none" />
          contact us. We will answer to you shortly! Meet our Support team
        </p>
      </div>
      <div className="container mt-80 ">
        <SupportSlider />
      </div>
    </section>
  );
}
