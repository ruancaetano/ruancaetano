import React from "react";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import * as Styles from "./home.styles";

const mappedTools = [
  {
    link: "https://aws.amazon.com/pt/",
    title: "AWS",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/aws.svg",
  },
  {
    link: "https://www.typescriptlang.org/",
    title: "Typescript",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/typescript-icon.svg",
  },
  {
    link: "https://nodejs.org/",
    title: "Node.js",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/nodejs-icon.svg",
  },
  {
    link: "https://go.dev/",
    title: "Go",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/go.svg",
  },
  {
    link: "https://nestjs.com/",
    title: "NestJS",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/nestjs.svg",
  },
  {
    link: "https://www.postgresql.org/",
    title: "Postgres",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/postgresql.svg",
  },
  {
    link: "https://dev.mysql.com/",
    title: "MySQL",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/mysql.svg",
  },
  {
    link: "https://www.mongodb.org/",
    title: "MongoDB",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/mongodb-icon.svg",
  },
  {
    link: "https://www.docker.com/",
    title: "Docker",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/docker-icon.svg",
  },
  {
    link: "https://reactjs.org/",
    title: "React",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/react.svg",
  },
  {
    link: "https://zeit.co/next",
    title: "Next.js",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/nextjs.svg",
  },
  {
    link: "https://graphql.org/",
    title: "GraphQL",
    image:
      "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/graphql.svg",
  },
];
export const HomeTemplate = () => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.AvatarWrapper>
          <Image
            src="https://cdn.ruancaetano.dev/images/me.jpeg"
            alt="Ruan Caetano Image"
            width={200}
            height={200}
          />
        </Styles.AvatarWrapper>

        <Styles.TitleWrapper>
          <h1>Hello, I&apos;m Ruan</h1>
        </Styles.TitleWrapper>

        <p>
          Sou apaixonado por tecnologia e tenho como missão impactar
          positivamente a vida das pessoas, através de contribuições em
          projetos, aos quais venho tendo a oportunidade de participar durante
          essa minha jornada, colocando em prática os conhecimentos que venho
          construindo nessa área.
        </p>

        <Styles.Contacts>
          <a
            href="https://github.com/ruancaetano"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FiGithub color="#fff" size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/ruanscaetano/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FiLinkedin color="#fff" size={25} />
          </a>
          <a
            href="mailto:ruansouza_caetano@hotmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FiMail color="#fff" size={25} />
          </a>
        </Styles.Contacts>

        <p>
          <span>
            Dentre as ferramentas que tenho utilizado atualmente estão:
          </span>
        </p>

        <Styles.Skills>
          {mappedTools.map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              title={tool.title}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={tool.image} alt={tool.title} />
            </a>
          ))}
        </Styles.Skills>
      </Styles.Content>
    </Styles.Container>
  );
};
