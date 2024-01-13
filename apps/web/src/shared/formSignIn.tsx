import contactUs from "@/api/contactUs";
import signIn from "@/api/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const FormSigIn = (props: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger(); // coming to new form
    if (!isValid) {
      e.preventDefault();
    }
    if (email && name) {
      signIn({ name, email });
    }
  };
  return (
    <section>
      <form
        action="https://formsubmit.co/huynhchitrung020503@gmail.com"
        target="_blank"
        onSubmit={onSubmit}
        method="POST"
        autoComplete="false"
      >
        {/* INPUT 1 */}
        <input
          className={inputStyles}
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        {errors.name && (
          <p className="mt-1 text-primary-500">
            {errors.name.type == "required" && "This filed is requied"}
            {errors.name.type == "maxLength" && "Max length is 100"}
          </p>
        )}

        {/* INPUT 2 */}
        <input
          className={inputStyles}
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && (
          <p className="mt-1 text-primary-500">
            {errors.email.type == "required" && "This filed is requied"}
            {errors.email.type == "pattern" && "Invalid email address"}
          </p>
        )}
      </form>
    </section>
  );
};

export default FormSigIn;
