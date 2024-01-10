import axios from "axios";
import { request } from "./request";
type Props = {
  firstName: string;
  email: string;
  message: string;
};
const user = axios.create()
const contactUs = async ({ firstName, email, message }: Props) => {
  
  request
    .post(`https://api-tau-seven-72.vercel.app/api/sign-in`, {
      firstName: firstName,
      email: email,
      message: message,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default contactUs;
