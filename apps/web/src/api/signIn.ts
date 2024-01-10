import axios from "axios";
import { request } from "./request";

type Props = {
    name:string,
    email:string
}

const signIn = async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-in`)
  const json = await res.json()
  return json.data
  
};
export default signIn