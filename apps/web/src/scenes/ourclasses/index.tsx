import { ClassType, SelectedPage } from "@/shared/types";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const classes: Array<ClassType>  = [
    {
        name:"Weiht Traineing Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image:image1,
    },
    {
        name:"Advanture Classes",
        image:image2,
    },
    {
        name:"Weiht Traineing Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image:image3,
    },
    {
        name:"Ab Core Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image:image4,
    },
    {
        name:"Weiht Traineing Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image:image5,
    },
    {
        name:"Weiht Traineing Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image:image6,
    },

]
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              provident nihil accusamus enim quia, inventore cupiditate beatae
              maiores minus, culpa quisquam earum incidunt dicta tempore odit?
              Illo, aperiam quod nesciunt sequi cumque accusamus sed voluptates
              dolores quisquam maiores! Expedita, consectetur.
            </p>
          </div>
        </motion.div>
        {/* SIDE ROLLER */}
        <div className="mt-10 h-80 w-full overflow-x-auto overflow-y-hidden ">
        <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item:ClassType,index) =>(
                <Class
                key= {`${item.name} - ${item}`}
                name = {item.name}
                description={item.description}
                image = {item.image}/>
            ))}
        </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
