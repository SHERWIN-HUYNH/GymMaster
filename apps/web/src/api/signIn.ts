import axios from "axios";
import { request } from "./request";

type Props = {
    name:string,
    id:number
}

const signIn = async (): Promise<Props>=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/test`)
  const json = await res.json()
  return json.data
  
};
export default signIn