"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix",
    description:
      "• Utilizando React, desenvolvemos clone da página inicial da Netflix, integrado com API",
    image: "images/projects/netflix-project.png",
    tag: ["Todos", "Web", "Celular"],
    gitUrl: "https://github.com/Thgzin/Netflix",
    previewUrl: "https://netflix-two-tawny.vercel.app",
  },
  {
    id: 2,
    title: "LetMeAsk",
    description:
      "• Uma aplicação que permite a criação de salas ao vivo com chat através de um login com o Firebase.",
    image: "images/projects/letmeask-project.png",
    tag: ["Todos", "Web", "Celular"],
    gitUrl: "https://github.com/Thgzin/letMeAsk-Rocketseat",
    previewUrl: "https://let-me-ask-ed8b7.web.app",
  },
  {
    id: 3,
    title: "Pomodoro",
    description:
      "• O Pomodoro aumenta a produtividade com intervalos de trabalho e descanso definidos.",
    image: "images/projects/pomodoro-project.png",
    tag: ["Todos", "Web", "Celular"],
    gitUrl: "https://github.com/Thgzin/pomodoro-app",
    previewUrl: "https://pomodoro-app-eight-gilt.vercel.app",
  },
  {
    id: 4,
    title: "Agenda",
    description:
      "• Desenvolvi um sistema CRUD para o gerenciamento de contatos, utilizando conexão MySQL",
    image: "images/projects/agenda-project.png",
    tag: ["Todos", "Web", "Celular"],
    gitUrl: "https://github.com/Thgzin/Agenda",
    previewUrl: "http://35.199.124.84",
  },
  {
    id: 5,
    title: "API REST",
    description:
      "• O objetivo desta API é fornecer um sistema completo de CRUD para o cadastro de usuários e alunos, garantindo que todas as operações sejam controladas por tokens JWT de autenticação do usuário.",
    image: "images/projects/api-project.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Thgzin/apiRest",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Celular"
          isSelected={tag === "Celular"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
