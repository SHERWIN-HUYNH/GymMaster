import axios from "axios";
import { request } from "./request";

interface Props {
  name: string;
  id: number;
}
interface SignUp {
  email: string;
  fullName: string;
  password: string;
}
interface SignIn {
  email: string;
  password: string;
}
export const signIn = async ({ email, password }: SignIn) => {
  const res = await request.post("/sign-in", {
    email,
    password,
  });
  return res.data;
};
export const signUp = async ({ email, fullName, password }: SignUp) => {
  const res = await request.post("/sign-up", {
    email,
    fullName,
    password,
  });
  return res.data;
};
export const resetPassword = async (token: string, password: string) => {
  const res = await request.post(
    "/reset-password",
    { password },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// export const forgotPassword = async ({email}: string) => {
//   const res = await request.post("/forgot-password", {
//     password,
//   });
//   return res.data
// };
