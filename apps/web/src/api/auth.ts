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
 const signIn = async (): Promise<Props>=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-in`)
  const json = await res.json()
  return json.data
  
};
export const signUp = async ({ email,fullName, password }: SignUp) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-up`, {
    method: 'POST',
    body: JSON.stringify({ email,fullName, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await res.json()
  return data
}
export default signIn
