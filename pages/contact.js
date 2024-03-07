/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import ContactUs from "../components/molecules/ContactUs";
import Location from "../components/molecules/Location";

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero jobs-blue banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">
                Contact Us
              </h1>
              <p className="text-body-text color-gray-500">
                Please fill up the Inquiry Form.
                <br className="d-lg-block d-none" />
                We will contact you as soon we can.
              </p>
            </div>
          </div>
        </section>

        <ContactUs />

        <Location />
      </Layout>
    </>
  );
}

export default Contact;
