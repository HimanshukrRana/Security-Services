import React from "react";

import { useFormik } from "formik";

import * as Yup from "yup";
import { toast } from "react-hot-toast";

function Contact_form() {
  const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(20).required("Please enter your Name"),

    email: Yup.string().email().required("Please enter your Email"),
    phoneNumber: Yup.string()
      .min(10)
      .max(10)
      .required("Please enter your Phone Number"),
    address: Yup.string().min(5).max(30).required("Please enter your Address"),
    message: Yup.string()
      .min(10)
      .max(100)
      .required("Please enter your Reason for Contacting"),

    //   checkbox: Yup.bool().oneOf(
    //     [true],
    //     "You need to accept the terms and conditions"
    //   ),
    //   job_option: Yup.bool().oneOf([true], "You need to select a Option"),
  });

  const initialValues = {
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    address: "",
    job_option: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        action.resetForm();
        sendContactForm(values);
      },
    });

  const sendContactForm = async (data) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      toast.success("Your Enquiry has been submitted successfully");

      console.log(res, "res");
    });
  };
  return (
    <form className="col-lg-8" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="font-mono color-red">{errors.name}</p>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder=" Company-Name (optional)"
              name="company"
              onChange={handleChange}
              value={values.company}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="font-mono color-red">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Phone number"
              type="number"
              name="phoneNumber"
              pattern="[0-9]{10}"
              onChange={handleChange}
              value={values.phoneNumber}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <p className="font-mono color-red">{errors.phoneNumber}</p>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your Address"
              name="address"
              onChange={handleChange}
              value={values.address}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <p className="font-mono color-red">{errors.address}</p>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <select
              id="countries"
              className="form-control "
              name="job_option"
              onChange={handleChange}
              value={values.job_option}
              onBlur={handleBlur}
            >
              <option defaultValue="No option selected">
                CHOOOSE A JOB OPTION
              </option>
              <option value="SECURITY GUARD">SECURITY GUARD</option>
              <option value="DOG SQUAD">DOG SQUAD</option>
              <option value="BOUNCER AND BODYGUARD">
                BOUNCER AND BODYGUARD
              </option>
              <option value="FEMALE SECURITY GUARD">
                FEMALE SECURITY GUARD
              </option>
              <option value="BANK CASH VAN">BANK CASH VAN</option>
              <option value="EVENT SECURITY">EVENT SECURITY</option>
              <option value="TOURIST SECURITY">TOURIST SECURITY</option>
              <option value="ESCORT GUARD">ESCORT GUARD</option>
            </select>
            {errors.job_option && touched.job_option ? (
              <p className="font-mono color-red">{errors.job_option}</p>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Enter your Reason for Contacting"
              type="text"
              name="message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              // onSubmit={onSubmit}
            />
            {errors.message && touched.message ? (
              <p className="font-mono color-red">{errors.message}</p>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12 mt-15">
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
          <br className="d-lg-none d-block" />
          <span className="text-body-text-md color-gray-500 mb-20">
            By clicking contact us button, you agree our terms and policy,
          </span>
        </div>
      </div>
    </form>
  );
}

export default Contact_form;
