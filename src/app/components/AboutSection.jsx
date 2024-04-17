"use client";
import React, { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="mt-2 flex flex-wrap space-x-2">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/JS-ICON.svg"
              alt="Javascript image icon"
              width={100}
              height={50}
              title="Javascript"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/TS-icon.svg"
              alt="Typescript image icon"
              width={100}
              height={50}
              title="Typescript"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/node.svg"
              alt="Node.js image icon"
              width={100}
              height={50}
              title="Node.js"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/react.svg"
              alt="React image icon"
              width={100}
              height={50}
              title="React"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/nextjsicon.svg"
              alt="Next.js image icon"
              width={100}
              height={50}
              title="Next.js"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/express.svg"
              alt="Express image icon"
              width={150}
              height={50}
              title="Express"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/mariaDB.svg"
              alt="MariaDB image icon"
              width={100}
              height={50}
              title="MariaDB"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/mongodb-icon.svg"
              alt="MongoDB image icon"
              width={80}
              height={50}
              title="MongoDB"
              className="fill-current hover:scale-x-105"
            />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/css3.svg"
              alt="CSS3 image icon"
              width={100}
              height={50}
              title="CSS3"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary mt-5 rounded-3xl border border-secondary text-center max-w-21 text-white w-28 hover:opacity-90 transition-all delay-100 cursor-default flex justify-center items-center"
        >
          <div className="group flex justify-center items-center">
            <Image
              src="/images/icon/bootstrap.svg"
              alt="Bootstrap image icon"
              width={100}
              height={50}
              title="Bootstrap"
              className="fill-current hover:scale-105"
            />
          </div>
        </motion.li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary border border-secondary rounded-3xl text-center max-w-21 text-white w-80 mt-3 hover:opacity-90 transition-all delay-100 cursor-default"
        >
          ITB - Instituto Técnico de Barueri (Informática)
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="bg-primary border border-secondary rounded-3xl text-center max-w-21 text-white w-80 mt-3 hover:opacity-90 transition-all delay-100 cursor-default"
        >
          UNIP - Análise e Desenvolvimento de Sistemas
        </motion.li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [visibleItems, setVisibleItems] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true }); // Correção aqui

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      setVisibleItems([]);
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    setVisibleItems(Array.from(elements));
  }, [tab]);

  const currentTab = TAB_DATA.find((item) => item.id === tab);

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-20">
        <div className="flex justify-center">
          <Image
            src="/images/projects/about-image.png"
            alt="about image"
            width={550}
            height={500}
            className="w-full h-auto animate-bounce-slow"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200  to-white mb-4">
            Sobre Mim
          </h2>

          <p className="text-base md:text-lg">
            Sou um jovem de 19 anos especializado em desenvolvimento de
            interfaces e software. Estou constantemente buscando oportunidades
            para me atualizar em novas linguagens, bibliotecas e tecnologias.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div id="projects" className="mt-8 bg-custom">
            {currentTab && (
              <div ref={ref} className="animate-on-scroll">
                {currentTab.content}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
