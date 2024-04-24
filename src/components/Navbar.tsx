"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="sticky top-0 flex  justify-between  z-20 items-start xl:items-center p-5 mx-auto max-w-7xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://github.com/Abdirahman5863"
          fgColor="currentcolor"
          bgColor="transparent"
          className="text-gray-500 hover:text-white"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/abdirahman-abdi-92ba53279/"
          fgColor="currentcolor"
          bgColor="transparent"
          className="text-gray-500 hover:text-white"
        />
        <SocialIcon
          url="https://twitter.com/Abdirahman5863"
          fgColor="currentcolor"
          bgColor="transparent"
          className="text-gray-500 hover:text-blue-400"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCgH2WMf_MzMyUd0irmcDN5g"
          fgColor="currentcolor"
          bgColor="transparent"
          className="text-gray-500 hover:text-red-600"
        />
        <SocialIcon
          url="https://dev.to/abdirahman5863"
          fgColor="currentcolor"
          bgColor="transparent"
          className="text-gray-500 hover:text-black"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer text-gray-500 hover:text-blue-400"
          network="email"
          fgColor="currentcolor"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </nav>
  );
};

export default Navbar;
