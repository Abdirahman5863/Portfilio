import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className=""
      >
        <Image
          src="/react.png"
          alt=""
          className="rounded-full border  border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          width={100}
          height={100}
        />

        <div>
          <p clas>100%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
