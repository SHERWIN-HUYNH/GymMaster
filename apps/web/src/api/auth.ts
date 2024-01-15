import axios from "axios";
import { request } from "./request";

interface Props {
    name:string,
    id:number
}
interface SignUp {
  name: string
  email: string
  password: string
}
const signIn = async (): Promise<Props>=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/test`)
  const json = await res.json()
  return json.data
  
};
export const signUp = async ({name, email, password }: SignUp) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-up`, {
    method: 'POST',
    body: JSON.stringify({ name,email, password }),
    headers: {
      "Content-Type": "application/json",   
    },
  })
  const data = await res.json()
  return data
}
export default signIn