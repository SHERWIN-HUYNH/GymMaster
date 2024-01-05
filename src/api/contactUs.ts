import axios from "axios";
type Props = {
  firstName: string;
  email: string;
  message: string;
};
const contactUs = async ({ firstName, email, message }: Props) => {
  axios
    .post(`https://gym-master-lake.vercel.app//api`, {
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
