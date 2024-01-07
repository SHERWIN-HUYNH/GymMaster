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
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
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
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae nam itaque ut, laborum eius, quis consequuntur quod
            corporis sint commodi doloribus possimus quidem incidunt porro vitae
            dolorem ratione dolores maiores!
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              setSelectedPage={setSelectedPage}
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 tems-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESC */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay:0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                velit quidem qui architecto reiciendis obcaecati quas quod
                maiores reprehenderit provident neque, ullam alias consequuntur,
                ratione enim deserunt dolore aliquam porro! Est quod facere
                minus voluptates culpa magnam consequatur, autem animi.
              </p>
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                nam architecto magni repellendus repudiandae ab perferendis
                quisquam ipsum quasi dolores exercitationem illo, assumenda nisi
                nihil quam id unde sequi numquam corporis! Facilis sequi velit
                ad!
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative  mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-abstractwaves">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
