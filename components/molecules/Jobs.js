/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  const data = [
    {
      id: 1,
      avatar: "Security-Guard.jpg",
      job: "SECURITY GUARD",
      desc: "Get trained Security Guard, Supervisor and Security Officer at competitive rate with excellent track record and PCC verified.",
    },
    {
      id: 2,
      avatar: "Hrithik-Roshan-with-Bodyguards.jpg",
      job: "BOUNCER AND BODYGUARD",
      desc: " Hire professional, trained and well build Bouncers and Bodyguard for your short term or long term security needs.",
    },
    {
      id: 3,
      avatar: "Escort-Security-Guard.jpg",
      job: "ESCORT SECURITY",
      desc: "Hire Professional Escort Guard for safeguarding your female employees during commuting at night in compliance with S&E Act.",
    },
    {
      id: 4,
      avatar: "female-security.jpg",
      job: " FEMALE SECURITY GUARD",
      desc: " Trained Lady Guard for frisking female visitors and securing your business like office, factory, building, mall, school and shop.",
    },
    {
      id: 5,
      avatar: "Armed-Guard-with-Cash-Van.jpg",
      job: "BANK CASH VAN SECURITY",
      desc: "Hire trained armed guard for cash van for a trip or on monthly basis to safely transport your valuables with state of the art safety features and Best Security Guards",
    },
    {
      id: 6,
      avatar: "Dog-Squad-in-Mumbai.jpg",
      job: "DOG SQUAD SERVICES",
      desc: "Our dog squad comprises highly pedigreed and trained canine  with experienced handlers to safeguard person & property and guards  and dogs are highly trained .",
    },
    {
      id: 7,
      avatar: "event.jpeg",
      job: "EVENT SECURITY",
      desc: "Looking for Quick Short Term Security Services for an event?  We have experience and expertise in event management.",
    },
    {
      id: 8,
      avatar: "Tourist-security.jpg",
      job: "TOURIST SECURITY",
      desc: "Security concerns while travelling to India? Relax and allow us to safeguard and guide you to make your journey safe and memorable.",
    },
  ];

  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
            <h2 className="text-heading-1 color-gray-900">
              Join ou WorkForce That
              <br className="d-lg-block d-none" />
              Gives You More
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Interactively transform magnetic growth strategies whereas
              prospective outside the box thinking.
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-70">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4 col-sm-12 " key={item.id}>
              <div className="card-grid-1  jobs-blue hover-up">
                <div className="grid-1-img">
                  <Image
                    src={`/assets/imgs/page/about/about/${item.avatar}`}
                    alt="  Saviour"
                    width={260}
                    height={234}
                  />
                </div>
                <h3 className="text-heading-3 mt-20">{item.job} </h3>
                <p className="text-body-excerpt mt-20">{item.desc}</p>
                <div className="mt-30">
                  <Link href="/contact" legacyBehavior>
                    <a className="btn btn-default btn-white icon-arrow-right">
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
