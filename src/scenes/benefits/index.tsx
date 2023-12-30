import React from "react";
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis amet reiciendis minus architecto illum magni laboriosam velit ea dignissimos?",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis amet reiciendis minus architecto illum magni laboriosam velit ea dignissimos?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro trainers",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis amet reiciendis minus architecto illum magni laboriosam velit ea dignissimos?",
  },
];
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae nam itaque ut, laborum eius, quis consequuntur quod
            corporis sint commodi doloribus possimus quidem incidunt porro vitae
            dolorem ratione dolores maiores!
          </p>
        </div>
        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit:BenefitType) => (
            <Benefit setSelectedPage={setSelectedPage} key={benefit.title} icon = {benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
