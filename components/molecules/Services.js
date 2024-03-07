/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Book_btn from "../atoms/Book-btn";

export default function Services() {
  const data = [
    {
      id: 1,
      avatar: "office.jpg",
      title: "OFFICE SECURITY",
    },
    {
      id: 2,
      avatar: "Security-Guard.jpg",
      title: "BUILDING SECURITY",
    },
    {
      id: 3,
      avatar: "Security-Guard-in-Bank-.jpg",
      title: "BANK SECURITY",
    },
    {
      id: 4,
      avatar: "Industrial-Guard-.jpg",
      title: "INDUSTRIAL SECURITY",
    },
    {
      id: 5,
      avatar: "Security-Guard-in-Mall.jpg",
      title: "RETAIL SECURITY",
    },
    {
      id: 6,
      avatar: "Property-Security.jpg",
      title: "PROPERTY SECURITY",
    },
    {
      id: 7,
      avatar: "School-Guard.jpg",
      title: "SCHOOL SECURITY",
    },
    {
      id: 8,
      avatar: "Security-Guard-in-Hospital.jpg",
      title: "HOSPITAL SECURITY",
    },
    {
      id: 9,
      avatar: "event.jpeg",
      title: "EVENT SECURITY",
    },
  ];

  return (
    <section className="section-box">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-8">
            <h3 className="text-heading-1 mb-10">Our Services</h3>
            <p className="text-body-lead-large color-gray-600">
              Know more about our Services
            </p>
          </div>
          <div className="col-lg-4 text-lg-end text-start pt-30">
            <Book_btn />
          </div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4 col-sm-12 pr-30" key={item.id}>
              <div className="card-grid-style-4">
                <a className="text-heading-4">{item.title}</a>

                <div className="grid-4-img color-bg-4">
                  <Image
                    src={`/assets/imgs/page/about/about/${item.avatar}`}
                    alt="services"
                    width={340}
                    height={304}
                    className="mobile-hw "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
