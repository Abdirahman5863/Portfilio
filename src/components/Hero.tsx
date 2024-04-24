"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};
function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name's Abdirahman Abdi",
      "Fullstack Developer",
      "Blockchain Developer",
      "UI/UX Designer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center  text-center overflow-hidden justify-center">
      <BackgroundCircles />
      <Image
        src="/profile.png"
        alt=""
        width={200}
        height={200}
        className="rounded-full relative w-36 h-36 mx-0 "
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-blue-400 pb-2 tracking-[13px] ">
          SOFTWARE ENGINEER
        </h2>
        <h1 className="text-5xl lg-text-6xl font-semibold px-10">
          <span className="mr-5">{text}</span>
          <Cursor cursorColor="blue" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiance">
            <button className="heroButton">Experiance</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
