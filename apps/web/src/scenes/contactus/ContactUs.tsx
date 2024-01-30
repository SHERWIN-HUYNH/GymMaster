import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import axios from "axios";
import contactUs from "@/api/contactUs";
import { signUp } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import FormSignUp, { SignUp } from "./FormSignUp";
import { setToken } from "@/utils/token";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {



  const onLoginSubmit = async (data: SignUp) => {
    try {
      const res = await signUp(data);
      setToken(res.accessToken);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
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
          {/* FORM HERE */}
          <FormSignUp onSubmit={onLoginSubmit}/>

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
