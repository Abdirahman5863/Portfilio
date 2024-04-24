"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly  mx-auto items-center "
    >
      <h1 className="absolute top-16 uppercase tracking-[20px] text-gray-600 text-2xl ">
        About
      </h1>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="pt-[100px] flex w-screen justify-center items-center"
      >
        <Image
          src="/asama.jpg"
          alt=""
          width={150}
          height={150}
          className="flex-shrink-0 md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[460px] rounded-full h-[100px]
           md:mb-0  w-[100px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a<span className="underline decoration-slice">little</span>{" "}
          background🪄:
        </h4>
        <p className="text-base w-auto md:w-[700px]">
          Hey there! 👋 It's{" "}
          <span className="underline decoration-blue-200 ">
            Abdirahman Abdi
          </span>
          , your friendly neighborhood{" "}
          <span className="underline decoration-blue-200 ">
            fullstack developer
          </span>{" "}
          and{" "}
          <span className="underline decoration-blue-400">
            {" "}
            blockchain enthusiast!
          </span>
          💻🔗 My journey in tech has been nothing short of exhilarating – from
          soaking up knowledge at Code 3 Camp under the guidance of real
          industry pros to diving deep into hands-on projects at Ngeni Labs,
          where every line of code felt like a masterpiece in the making. 🚀 And
          let's not forget my unforgettable three-month internship at Ngeni,
          where I dove even deeper into the tech world, learning, growing, and
          making meaningful contributions along the way. 💼 Now, armed with
          passion, perseverance, and a whole lot of code, I'm ready to take on
          whatever challenges come my way and continue pushing the boundaries of
          innovation in the tech sphere! 💪💡 Let's code the future together! 🌟
        </p>
      </div>
    </motion.div>
  );
}
