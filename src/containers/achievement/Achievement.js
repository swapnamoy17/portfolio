import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {projects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Achievement(params) {
  
  const isProjectSection = (params?.type === "projects")
  const cards = isProjectSection ? projects.projects : achievementSection.achievementsCards

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id={isProjectSection ? "projects" : "achievements"}>
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={"heading achievement-heading"}
            >
              {isProjectSection ? projects.title : achievementSection.title}
            </h1>
            <p
              className={"subTitle achievement-subtitle"}
            >
              {isProjectSection ? projects.subtitle : achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {cards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card?.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
