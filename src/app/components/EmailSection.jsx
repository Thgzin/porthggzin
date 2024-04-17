"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkedinIcon from "../../../public/images/icon/linkedin-icon.svg";
import GithubIcon from "../../../public/images/icon/github-icon.svg";
import Whats from "../../../public/images/icon/whatsapp.svg";
import serviceKey from "../../../serviceKey";
import templateId from "../../../templateId";
import publicKey from "../../../publicKey";
const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contacts"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hidden from-zinc-300 to-transparent  rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-1">
        <h5 className="text-xl font-bold text-white my-2">Vamos interagir!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Estou atualmente à procura de novas oportunidades, Se você tem uma
          pergunta farei o meu melhor para entrar em contato.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Thgzin" target="_blank">
            <Image
              className="social-icon hover:opacity-90"
              src={GithubIcon}
              alt="Github Icon"
              width={33}
              height={33}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thiago-ribeiro-8bb354211/"
            target="_blank"
          >
            <Image
              className="social-icon hover:opacity-90"
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={33}
              height={33}
            />
          </Link>
          <Link href="https://wa.me/5511949008717" target="_blank">
            <Image
              className="social-icon hover:opacity-90"
              src={Whats}
              alt="Whats Icon"
              width={33}
              height={33}
            />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="user_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-white focus:outline-none focus:text-white transition duration-300 ease-in-out"
              placeholder="Seu Nome"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>

            <input
              name="user_email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-white focus:outline-none focus:text-white transition duration-300 ease-in-out"
              placeholder="Seu Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Me envie uma Mensagem!"
            />
          </div>
          <button
            type="submit"
            className="bg-[#18191E] border border-[#33353F] hover:bg-transparent  transition duration-300 ease-in-out  text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {" "}
            Enviar Mensagem
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
