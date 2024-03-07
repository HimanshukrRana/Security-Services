/* eslint-disable @next/next/no-img-element */
import React from "react";

function Choose_Us() {
  const data = [
    {
      id: "1",
      text: "Free Survey of your site and input from our security expert on various security parameters.",
    },
    {
      id: "2",
      text: "Flexible budget option by offering tailor made quotations.",
    },
    {
      id: "3",
      text: "Trained Guards plus regular onsite training to keep sharpening their job-related skill.",
    },
    {
      id: "4",
      text: "100% compliance with monthly report submission.",
    },
    {
      id: "5",
      text: "Remote monitoring of security guards through live tracking app.",
    },
    {
      id: "6",
      text: "On time payment of salary irrespective of overdue payment status.",
    },
    {
      id: "7",
      text: "Regular day and night patrolling.",
    },
    {
      id: "8",
      text: "Replacement of non-performing guards without any question asked.",
    },
    {
      id: "9",
      text: "Zero deficiency throughout the year.",
    },
    {
      id: "10",
      text: "Committed to resolve any issue within 48 hours.",
    },
    {
      id: "11",
      text: "We constantly evolve and upgrade to give you the best security experience.",
    },
  ];

  return (
    <section className="section-box mt-4">
      <div className="container d-flex gap justify-content-between">
        <div className="d-none d-lg-block m-auto">
          <img
            alt="check-mark"
            src="assets/imgs/page/about/1/hero-banner-1.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="col-md-7 desc my-auto">
          <div className="mid-title  mb-4">
            <h2 className="f3  mobile-h2">Why Choose Us?</h2>
          </div>
          <div className="textwidget">
            <ul className="list ">
              {data.map((item) => (
                <li
                  className="text-body-lead-large color-gray-600 mt-20 d-flex "
                  key={item.id}
                >
                  <div className="pr-10">
                    <img
                      alt="check-mark"
                      src="assets/imgs/page/about/1/check.png"
                    />
                  </div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
export default Choose_Us;
