import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  signUpSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
export type SignUp = z.infer<typeof signUpSchema>
interface Props {
    onSubmit: SubmitHandler<SignUp>;
  }
  export default function FormSignUp({ onSubmit }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<SignUp>({
        mode: "onSubmit",
        resolver: zodResolver(signUpSchema),
      });
      const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
      px-5 py-3 placeholder-white h-12`;
  return (
    <div>
     <form
        className="w-3/4"
        autoComplete="false"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* INPUT 1 */}
        <Input
          className={inputStyles}
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <p className="mt-1 text-primary-500">{errors.email.message}</p>
        )}
        {/* INPUT 2 */}
        <Input
          className={inputStyles}
          {...register("fullName")}
          placeholder="Full Name"
        />
        {errors.fullName && (
          <p className="mt-1 text-primary-500">{errors.fullName.message}</p>
        )}
        {/* INPUT 3 */}
        <Input
          className={inputStyles}
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p className="mt-1 text-primary-500">{errors.password.message}</p>
        )}
        <Button
          type="submit"
          className="mt-5 w-full rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
