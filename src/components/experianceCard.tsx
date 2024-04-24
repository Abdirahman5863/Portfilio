import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function experianceCard({}: Props) {
  return (
    <article className="flex  flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[500px] justify-center p-10 snap-center bg-blue-400 ">
      <motion.div
        className="object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/handson.jpg"
          alt=""
          width={100}
          height={100}
          className="w-32 h-32 rounded-full object-top  xl:w-[200px] xl:h-[200px] object-cover"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Founder of Hands-On</h4>
        <p>Hands-On</p>
        <div className="h-10 w-10 rounded-full">
          <Image src="/react.png" width={200} height={200} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-500">
          Started Work 1/1 /2024 until Prisent
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary Point</li>
          <li>summary Point</li>
          <li>summary point</li>
          <li>summary point</li>
        </ul>
      </div>
    </article>
  );
}

export default experianceCard;
