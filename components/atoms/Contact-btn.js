import React from "react";
// import { sendContactForm } from "../../lib/api";

export default function Contact_btn() {
  // console.log(values, "hahahahaha");

  // await sendContactForm(values);

  return (
    <div>
      <button
        className="btn bg-color-blue btn-color icon-arrow-right-white mr-40 mb-20"
        type="submit"
        value="Submit"
        // onClick={}
      >
        Contact Us
      </button>
    </div>
  );
}
