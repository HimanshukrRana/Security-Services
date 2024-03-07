/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import FaqMain from "../components/molecules/FaqMain";
import Support from "../components/molecules/Support";
import ContactUs from "../components/molecules/ContactUs";

function Faq2() {
  return (
    <Layout>
      <FaqMain />

      <Accordion />

      <Support />

      {/* <section className="bg-gray-100">
        <ContactUs />
      </section> */}
    </Layout>
  );
}

export default Faq2;
