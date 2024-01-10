import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import axios from "axios";
import contactUs from "@/api/contactUs";
import signIn from "@/api/signIn";
import { useQuery } from "@tanstack/react-query";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // CALL API
  const onSubmit = async () => {
      
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500 ">JOIN NOW</span>
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            architecto odio recusandae officiis porro provident cum veniam
            ducimus soluta odit velit omnis reprehenderit assumenda facere,
            neque cupiditate obcaecati quasi voluptates!
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
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

              {/* INPUT 3 */}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type == "required" && "This field is requied"}
                  {errors.message.type == "maxLength" && "Max length is 2000"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="z-[-1] w-full before:absolute before:-bottom-20 before:-right-20 md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
