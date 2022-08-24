import reactLogo from "../../assets/img/react.png";
import nodeLogo from "../../assets/img/nodejs.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import { useState } from "react";

const Skills = () => {
  const [showElement, setShowElement] = useState(false);

 const handleShow = (n) => {
     {
        setShowElement(true)
    }
 }
 
 
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
      alt: "React",
      title: "React",
      p: "Great skill in React, 2 year of experience",
      id: 2
    },
    {
      src: nodeLogo,
      alt: "React",
      title: "React",
      p: "Great skill in React, 3 year of experience",
      id: 3
    },
    {
      src: reactLogo,
      alt: "React",
      title: "React",
      p: "Great skill in React, 4 year of experience",
      id: 4
    },
  ];

  const allSkillSet = skillSet.map((s) => {

    return (
    <div className="item">
      <img src={s.src} alt={s.alt} />
      <h5>{s.title}</h5>
    </div>
    )
  });
 
  const allSkillDesc = skillSet.map((s) => {

            return (
            <p>
              {showElement ? s.p : null}
            </p>
            )
           
    
    });

  
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
              {allSkillDesc}
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
