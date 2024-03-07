import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(4).max(20).required("Please enter your Name"),

  email: Yup.string().email().required("Please enter your Email"),
  phoneNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your Phone Number"),
  address: Yup.string().min(5).max(30).required("Please enter your Address"),
  message: Yup.string().min(10).max(100).required("Please enter your Message"),

  //   checkbox: Yup.bool().oneOf(
  //     [true],
  //     "You need to accept the terms and conditions"
  //   ),
  //   job_option: Yup.bool().oneOf([true], "You need to select a Option"),
});
