import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is a required Field"),
  email: yup.string().email().required("Email is a required Field"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export type Contact = yup.InferType<typeof contactSchema>;
