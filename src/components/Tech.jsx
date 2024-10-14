import React from "react";

import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies I use   
      </h2>
      </motion.div>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
