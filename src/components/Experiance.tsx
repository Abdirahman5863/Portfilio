"use client";
import { motion } from "framer-motion";
import ExperianceCard from "./experianceCard";
type Props = {};
function Experiance({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiance
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        <ExperianceCard />
        <ExperianceCard />
        <ExperianceCard />
      </div>
    </motion.div>
  );
}

export default Experiance;
