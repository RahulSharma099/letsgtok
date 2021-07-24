import React, { useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";
import * as yup from "yup";
import { API } from "../constants.js";
import "./contactForm.module.css";
import * as animationData from "../assets/contactUs.json";
import { toast } from "react-toastify";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const validateForm = async (contactDetails) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    message: yup.string().required(),
  });
  return await schema.isValid(contactDetails);
};

const formDetails = {
  name: "",
  email: "",
  contact: "",
  message: "",
};

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    ...formDetails,
  });

  const submitForm = async () => {
    try {
      if (!(await validateForm(contactDetails)))
        throw new Error("Invalid Form Details");
      await axios.post(
        API.BASE_URL + "/submit",
        {
          name: contactDetails.name,
          email: contactDetails.email,
          phoneNumber: contactDetails.contact,
          message: contactDetails.message,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      toast.success(
        "🚀 We've heard you already. Hold on, we'll be contacting you soon"
      );
      setContactDetails(formDetails);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row text-start">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Lottie options={defaultOptions} />
        </div>
        <form className="col-md-6 d-flex flex-column justify-content-center align-items-stretch">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email*
            </label>
            <input
              type="email"
              value={contactDetails.email}
              className="form-control"
              required
              onChange={(e) => {
                setContactDetails({ ...contactDetails, email: e.target.value });
              }}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name*
            </label>
            <input
              value={contactDetails.name}
              type="text"
              className="form-control"
              required
              onChange={(e) => {
                setContactDetails({ ...contactDetails, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Contact Number*
            </label>
            <input
              value={contactDetails.contact}
              type="tel"
              className="form-control"
              required
              onChange={(e) => {
                setContactDetails({
                  ...contactDetails,
                  contact: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Message*
            </label>
            <textarea
              value={contactDetails.message}
              type="text"
              required
              className="form-control"
              onChange={(e) => {
                setContactDetails({
                  ...contactDetails,
                  message: e.target.value,
                });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-submit"
            onClick={async (e) => {
              e.preventDefault();
              await submitForm();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
