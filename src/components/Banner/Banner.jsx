import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import avatar from '../../assets/img/avatar.jfif'
import './banner.css'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Software Engineer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(1000);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

const grabResume = () => {
    return window.open('https://github.com/renatoboucas/Resume/raw/master/Full%20Resume%20EAD_8.11.2022.pdf')
}
   
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Renato`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Web Developer", "IT Manager", "Software Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I’ve managed business world-wide with the aim of transforming
                    and empowering companies around the world, applying
                    innovation and cutting-edge technology to achieve customer
                    goals, productivity, marketing, profits and more.
                    Professional experience of more than 14 years in IT, in
                    which 13 years working as an IT Manager responsible for
                    managing projects mainly in the educational and
                    telecommunication sector related to educational games
                    development, IT infrastructure and licensing for the
                    operation of telecommunication towers. With the experience gained
                    in all these years, I believe that bringing this knowledge
                    to software development and web development it's adding great
                    value to the projects I'm working on. I am an ambitious
                    person who gets the most job satisfaction from projects that
                    require in-depth technical analysis, problem solving
                    capabilities and also the ability to respond quickly to
                    changing requirements and specifications.
                  </p>
                  
                    <button onClick={grabResume}>
                    Grab my resume <ArrowRightCircle size={25} />
                    </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={avatar} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
