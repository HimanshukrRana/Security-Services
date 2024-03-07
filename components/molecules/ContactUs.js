import React from "react";
import Contact_form from "./Contact-form";

// const initState = { values: initValues };

const ContactUs = () => {
  // const [responseMessage, setResponseMessage] = useState({
  //   isSuccessful: false,
  //   message: "",
  // });

  return (
    <section className="section-box">
      <div className="container mb-20 mt-140">
        <div className="bdrd-58 box-gray-100 icon-wave">
          <div className="row">
            <div className="col-lg-12 mb-60 color-blue">
              <span className="text-body-capitalized text-uppercase">
                Contact us
              </span>
              <h2 className="text-heading-3 color-gray-900 mt-10">
                Are you intrested our Security Services?
              </h2>
              <p className="text-body-text color-gray-600 mt-20">
                The right move at the right time saves your Life.
                <br className="d-lg-block d-none" />
                Do your business Safely with Our Security.
              </p>
            </div>
            <div className="col-lg-4 mb-40">
              <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                Saviour Security
              </h4>
              <p className="text-body-text color-gray-600">
                Gram-Masratu, Mahudar
                <br />
                P.O- Rewali, P.S- Katkamdag,
                <br />
                Hazaribag, Jharkhand-825301
              </p>
              <p className="text-body-text color-gray-600  mt-10">
                (+91) 80800-90143
                <br />
                (+91) 62065-08033
                <br />
                (+91) 99999-16256
              </p>
              <p className="text-body-text color-gray-600 ">
                soumeyaenterprises.savior@gmail.com
              </p>
            </div>
            <Contact_form

            // onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
