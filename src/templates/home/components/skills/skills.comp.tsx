import React from "react";

import { skillList } from "./skills.constants";
import * as Styles from "./skills.styles";

export const Skills = () => {
  return (
    <Styles.Skills>
      {skillList.map((tool) => (
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
  );
};
