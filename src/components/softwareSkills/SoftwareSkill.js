import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
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
                  <p>{skills.skillName}</p>
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
                  <p>{skills.skillName}</p>
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
                  <p>{skills.skillName}</p>
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
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="skill-row">
          <p className={"subTitle skills-text-subtitle"}>{"Databases"}</p>
          <p className={"subTitle skills-text-subtitle"}>{"Other Tools"}</p>
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
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </div>
          <div className="dev-icons-div">
            {skillsSection.otherSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.imgPath} alt={skills.skillName} />
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
