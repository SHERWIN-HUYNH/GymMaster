import axios from "axios";
import { request } from "./request";

interface Props {
    name:string,
    id:number
}
interface SignUp {
  email: string
  fullName:string
  password: string
}
 const signIn = async ({ email,fullName, password }: SignUp)=>{
    const res =await request.post("/sign-in",{
      email,fullName,password
    })
   return res.data
};
export const signUp = async ({ email,fullName, password }: SignUp) => {
  // const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-up`, {
  //   method: 'POST',
  //   body: JSON.stringify({ email,fullName, password }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // const data = await res.json()
  // return data.data

  const res = await request.post("/sign-up",{
    email,fullName,password
  })
  return res.data
}
export default signIn
