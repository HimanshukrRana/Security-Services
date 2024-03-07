import Image from "next/image";
import React from "react";

export default function Founders() {
  const data = [
    {
      id: 1,
      avatar: "f1.jpg",
      name: "Devanandan Kr. Rana",

      quote:
        " Saviour Security Services has been created with a vision of excellence, continued development and innovation in the ever-changing market of security. ",
      bg: "",
    },
    {
      id: 2,
      avatar: "f2.jpg",
      name: "Suraj Kumar",

      quote:
        "Our availability is a top priority as it is important that you should always be able to reach us whenever you need us from wherever you are.",
      bg: "bd-bg-6",
    },
    {
      id: 3,
      avatar: "f3.jpg",
      name: "Sanjeet Lal",

      quote:
        "I thank all our clients for their trust and promise to continue to always strive for excellence.",
      bg: "bd-bg-10",
    },
    {
      id: 4,
      avatar: "f4.jpg",
      name: "Anju Mishra",

      quote:
        "It has always been and is our goal to achieve this through teamwork with our employees and contractors as well as through ongoing cooperation with our partners.",
      bg: "bd-bg-6",
    },

    {
      id: 5,
      avatar: "f5.jpg",
      name: "Sujata Sinha",

      quote:
        "It has always been and is our goal to achieve this through teamwork with our employees and contractors as well as through ongoing cooperation with our partners.",
      bg: "bd-bg-6",
    },
    ,
    {
      id: 6,
      avatar: "f6.jpg",
      name: "Ujjwal Kumar",

      quote:
        "It has always been and is our goal to achieve this through teamwork with our employees and contractors as well as through ongoing cooperation with our partners.",
      bg: "bd-bg-6",
    },
  ];

  return (
    <section className="section-box">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-9 col-sm-8">
            <h3 className="text-heading-1 mb-10">Our Founders</h3>
            <p className="text-body-lead-large color-gray-600">
              Know about our Founding Members, as we are a providing Secruity
              Services in entire Jharkhand State.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-70">
        <div className="founder-div founder-div-m">
          {data.map((item) => (
            <div className=" " key={item.id}>
              <div
                className="card-grid-style-3 p-mobile  d-flex hover-up wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="d-flex justify-center items-center">
                  <Image
                    src={`/assets/imgs/page/about/about/${item.avatar}`}
                    alt="  Saviour"
                    width={280}
                    height={140}
                    // className="hw-auto"
                  />
                </div>
                <div className="ml-20">
                  <h3 className="text-heading-6 mb-5 ">{item.name}</h3>
                  {/* <span className="text-body-small d-block">Saviar Secruity</span> */}
                  <p className="text-body-text text-desc text-m color-gray-500 mt-20">
                    {item.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
