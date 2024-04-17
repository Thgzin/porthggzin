"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9b5e2] to-white to-bg-[#4169E1]">
              Olá,{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9b5e2] to-white to-bg-[#4169E1]">
              Eu{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9b5e2] to-white  to-bg-[#4169E1]]">
              Sou o{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Thiago", 1000, "Th", 1000, "Thiago", 1000]}
              wrapper="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9b2d5] to-white  to-bg-[#4169E1]"
              speed={-80}
              repeat={0}
            />
          </h1>

          <TypeAnimation
            sequence={["Desenvolvedor Front-End", 1000, "Desenvolvedor", 500]}
            wrapper="span"
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            speed={50}
            repeat={Infinity}
          />

          <div>
            <Link
              href="/#contacts"
              className="px-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500  text-white border border-[#181818] hover:bg-tranparent  hover:bg-transparent hover:scale-105"
            >
              Contacte-me
            </Link>
            <a
              download
              href="./curriculoThiago.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-transparent  text-white mt-3"
            >
              <span className="block mt-15 bg-[#121212] hover:bg-transparent border border-[#181818] hover:scale-105 hover:border-[#959393b4] transition ease-linear delay-150  rounded-full px-5 py-3">
                Baixar CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#0d11244a] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
