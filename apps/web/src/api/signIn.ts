import axios from "axios";

type Props = {
    name:string,
    email:string
}

const signIn = async ({name,email}:Props)=>{
    axios.get('http://localhost:3004/comment')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    
};
export default signIn