import React from "react";

export default function AboutContact() {
  return (
    <section className="section-box box-gray-100 mt-120 mb-20">
      <div className="container">
        <div className="icon-wave">
          <div className="row">
            <div className="col-lg-12 mb-60">
              <span className="text-body-capitalized text-uppercase">
                Contact us
              </span>
              <h2 className="text-heading-3 color-gray-900 mt-10">
                Do you need Secruity?
              </h2>
              <p className="text-body-text color-gray-600 mt-20">
                The right move at the right time saves your Bussiness or People
                Life.
                <br className="d-lg-block d-none" />
                No need to tense we are here for you.
              </p>
            </div>
            <div className="col-lg-4 mb-40">
              <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                Saviour Security
              </h4>
              <p className="text-body-text color-gray-600">
                4517 Collector Ave.
                <br />
                Hazaribagh, Jharkhand 39495
              </p>
              <p className="text-body-text color-gray-600">(+91) 96555-01082</p>
              <p className="text-body-text color-gray-600">
                soumeyaenterprises.savior@gmail.com
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Company (optional)"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input className="form-control" placeholder="Your email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Full Address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Tell us about yourself"
                    />
                  </div>
                </div>
                <div className="col-lg-12 mt-15">
                  <button
                    className="btn bg-color-blue icon-arrow-right-white mr-40 mb-20"
                    type="submit"
                  >
                    Contact Us
                  </button>
                  <br className="d-lg-none d-block" />
                  <span className="text-body-text-md color-gray-500 mb-20">
                    By clicking contact us button, you agree our terms and
                    policy,
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
