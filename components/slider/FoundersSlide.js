/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSlider = () => {
  const { width } = useWindowSize();
  const [slideCount, setSlideCount] = useState(1);
  const data = [
    {
      id: 1,
      avatar: "f1.jpg",
      name: "Devanandan Kr. Rana",

      quote:
        "I thank all our clients for their trust and promise to continue to always strive for excellence. ",
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
        "Saviour Security Services has been created with a vision of excellence, continued development and innovation in the ever-changing market of security.",
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

  useEffect(() => {
    handleSildes(width);
  }, [width]);

  const handleSildes = (width) => {
    if (width > 1200) {
      return setSlideCount(4);
    } else if (width > 1024) {
      return setSlideCount(3);
    } else if (width > 768) {
      return setSlideCount(2);
    } else {
      return setSlideCount(1);
    }
  };

  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-4">
          <Swiper
            slidesPerView={slideCount}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            // breakpoints={{
            //   320: {
            //     slidesPerView: 1,

            //   },
            //   640: {
            //     slidesPerView: 1,

            //   },
            //   768: {
            //     slidesPerView: 2,

            //   },
            //   1024: {
            //     slidesPerView: 3,

            //   },
            //   1200: {
            //     slidesPerView: 4,

            //   },
            // }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide active">
                  <div className={`card-grid-style-3 hover-up ${item.bg}`}>
                    <div className="grid-3-img">
                      <img
                        src={`assets/imgs/page/about/about/${item.avatar}`}
                        alt="  Saviour"
                      />
                    </div>
                    <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                    <p className="text-body-small d-block">{item.company}</p>
                    <p className="text-body-text text-desc color-gray-500 mt-20">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" />
      </div>
    </>
  );
};

export default TestimonialSlider;
