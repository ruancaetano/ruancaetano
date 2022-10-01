import React from "react";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

import * as Styles from "./contacts.styles";

export const Contacts: React.FC = () => {
  return (
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
        href="https://api.whatsapp.com/send?phone=5512997204962&text=Hello%2C%20I%27m%20Ruan"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <ImWhatsapp color="#fff" size={25} />
      </a>
      <a
        href="mailto:ruansouza_caetano@hotmail.com"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <FiMail color="#fff" size={25} />
      </a>
    </Styles.Contacts>
  );
};
