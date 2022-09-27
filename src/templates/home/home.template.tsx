import React from "react";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { CustomParticles } from "./components/custom-particles/custom-particles.comp";
import { TOOLS } from "./home.constants";
import * as Styles from "./home.styles";

export const HomeTemplate = () => {
  return (
    <Styles.Container>
      <CustomParticles />
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
          {TOOLS.map((tool) => (
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
