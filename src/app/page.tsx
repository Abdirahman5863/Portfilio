import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiance from "@/components/Experiance";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div className="bg-slate-900 text-white z-0 h-screen snap-y snap-mandatory overflow-scroll  ">
      <Navbar />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experiance */}
      <section id="experiance" className="snap-center pt-[200px] ">
        <Experiance />
      </section>
      <section>
        <Skills  />
      </section>
    </div>
  );
};

export default page;
