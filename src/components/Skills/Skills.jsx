import reactLogo from "../../assets/img/react.png";
import nodeLogo from "../../assets/img/nodejs.png";
import css from "../../assets/img/CSS3.png";
import html from "../../assets/img/HTML5.png";
import mongodb from "../../assets/img/mongodb.png";
import firebase from "../../assets/img/firebase.png";
import express from "../../assets/img/express.png";
import './skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { useState } from "react";

const Skills = () => {
  const [showElement, setShowElement] = useState(0);

    
 
 
  const skillSet = [
    {
      src: reactLogo,
      alt: "React",
      title: "React",
      p: "Great skill in React, 1 year of experience",
      id: 1
    },

    {
      src: nodeLogo,
      alt: "Node",
      title: "Node.JS",
      p: "Great skill in Node 1 year of experience",
      id: 2
    },
    {
      src: express,
      alt: "Express",
      title: "Express.JS",
      p: "Great skill in Express, 1 year of experience",
      id: 3
    },
    {
      src: firebase,
      alt: "Firebase",
      title: "Firebase",
      p: "Great skill in Firebase, 1 year of experience",
      id: 4
    },
    {
        src: mongodb,
        alt: "MongoDB",
        title: "MongoDB",
        p: "Great skill in MongoDB, 1 year of experience",
        id: 5
      },
      {
        src: html,
        alt: "HTML",
        title: "HTML",
        p: "Great skill in HTML, 1 year of experience",
        id: 6
      },
      {
        src: css,
        alt: "CSS",
        title: "CSS",
        p: "Great skill in CSS, 1 year of experience",
        id: 7
      },
  ];

  const allSkillSet = skillSet.map((s, i) => {

    return (
    <div className="item" key={i}>
      <img src={s.src} alt={s.alt} />
      <h5>{s.title}</h5>
    </div>
    )
  });
 
//   const allSkillDesc = skillSet.map((s, i) => {

//             return (
//             <p key={i}>
//               {showElement === i ? s.p : null}
//             </p>
//             )
           
    
//     });

  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* {allSkillDesc} */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {allSkillSet} 
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
