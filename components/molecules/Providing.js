/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Providing() {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12" />
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              Providing services of Best Quality
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              In a professional context it often happens that private or
              <br className="d-lg-block d-none" />
              corporate clients demand trained personal.
              <br className="d-lg-block d-none" />
              For That we provide
            </p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-40">
        <div className="">
          <div className=" col-md-12 col-sm-12">
            <div className="list-icons mt-50">
              <div className="item-icon">
                <span className="icon-left">
                  <Image
                    src="/assets/imgs/page/svg/icon-acquis.svg"
                    alt="  Saviour"
                    height={60}
                    width={60}
                    className="hw-auto"
                  />
                </span>
                <h4 className="text-heading-4">1. Selection</h4>
                <p className="text-body-text color-gray-600 mt-15">
                  Utmost attention is given to the recruitment of our personnel
                  in accordance with stringent parameters laid down as a group
                  policy. This includes education, age, physical fitness and
                  background. The recruitment department is responsible for
                  police verification, background checks and service records of
                  each employee.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-12 col-sm-12">
            <div className="list-icons mt-50">
              <div className="item-icon">
                <span className="icon-left">
                  <Image
                    src="/assets/imgs/page/svg/icon-active.svg"
                    alt="  Saviour"
                    height={60}
                    width={60}
                    className="hw-auto"
                  />
                </span>
                <h4 className="text-heading-4">2. Training</h4>
                <p className="text-body-text color-gray-600 mt-15">
                  All Guarding Personnel deployed by Globe Security undergo
                  Security Training Course which imparts the necessary skills to
                  perform their duties with great efficiency and productivity.
                  The training process is ongoing and progressive throughout the
                  employee’s career to refresh and further develop their
                  knowledge. We have well equipped classroom with facility such
                  as projector, training equipment and sitting capacity of 40
                  persons.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-12 col-sm-12">
            <div className="list-icons mt-50">
              <div className="item-icon">
                <span className="icon-left">
                  <Image
                    src="/assets/imgs/page/svg/icon-retent.svg"
                    alt="  Saviour"
                    height={60}
                    width={60}
                    className="hw-auto"
                  />
                </span>
                <h4 className="text-heading-4">3. Customer Care Cell</h4>
                <p className="text-body-text color-gray-600 mt-15">
                  Over and above regular checks, remote monitoring, night rounds
                  and surprise checks, we have customer care cell that keeps in
                  touch with our clients to get feedback on the services and
                  resolves issues, if any.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
