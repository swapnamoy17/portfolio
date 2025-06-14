import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <div className="skill-row">
            <p className={"subTitle skills-text-subtitle"}>{"Cloud Technologies"}</p>
        </div>       
        <ul className="dev-icons dev-icons-one-line">
          <div className="dev-icons-div">
            {skillsSection.cloudSkills.map((skills, i) => {
              return (
                
                <li
                  key={i}
                  className="software-skill-inline-one"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="skill-row">
          <p className={"subTitle skills-text-subtitle"}>{"Languages"}</p>
          <p className={"subTitle skills-text-subtitle"}>{"Frontend"}</p>
        </div>       
        <ul className="dev-icons">
          <div className="dev-icons-div">
            {skillsSection.languageSkills.map((skills, i) => {
              return (
                
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
          <div>
            {skillsSection.frontendSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="skill-row">
          <p className={"subTitle skills-text-subtitle"}>{"Backend"}</p>
          <p className={"subTitle skills-text-subtitle"}>{"Machine Learning / Data Science"}</p>
        </div>
        <ul className="dev-icons">
          <div className="dev-icons-div">
            {skillsSection.backendSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
          <div className="dev-icons-div">
            {skillsSection.mlSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="skill-row">
          <p className={"subTitle skills-text-subtitle"}>{"Databases"}</p>
          <p className={"subTitle skills-text-subtitle"}>{"Dev Ops"}</p>
        </div>
        <ul className="dev-icons">
          <div className="dev-icons-div">
            {skillsSection.databaseSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
          <div className="dev-icons-div">
            {skillsSection.devopsSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="skill-row">
            <p className={"subTitle skills-text-subtitle"}>{"Other Skills"}</p>
        </div>       
        <ul className="dev-icons dev-icons-one-line">
          <div className="dev-icons-div">
            {skillsSection.otherSkills.map((skills, i) => {
              return (
                
                <li
                  key={i}
                  className="software-skill-inline-one"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <span>{skills.skillName}</span>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
