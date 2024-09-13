import React, { useEffect, useState } from "react";
import { primaryHardSkillsData } from "../../Data/SkillsData";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const [text, setText] = useState("minhas tecnologias");
  const [isVisible, setIsVisible] = useState(true);
  const [moveCheck, setMoveCheck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 50 ? true : false);
      setMoveCheck(window.scrollY >= 50 && true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationListPrimaryHardSkills = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const animationItemPrimaryHardSkills = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut" },
    },
  };

  return (
    <>
      {isVisible ? (
        <motion.div
          className="containerHardSkill"
          variants={animationListPrimaryHardSkills}
          initial="hidden"
          animate="visible"
        >
          <div className="title" id="skills">Skills</div>
          <div className="subtitle">{text}</div>

          <div className="containerTecnologies">
            {primaryHardSkillsData.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  variants={animationItemPrimaryHardSkills}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      scale: { duration: 0.3 },
                      color: { duration: 0.1 },
                    },
                  }}
                  onMouseOver={() => setText(item.description)}
                  onMouseOut={() => setText("minhas tecnologias")}
                >
                  {item.icon}
                  <h3>{item.name}</h3>
                </motion.li>
              );
            })}
          </div>
        </motion.div>
      ) : (
        <div className="containerHardSkill" style={{ height : '30vh' }}>
           <div className="title" id="skills">Skills</div>
        </div>
      )}
    </>
  );
};

export default Skills;
