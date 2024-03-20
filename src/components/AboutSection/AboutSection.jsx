import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import styles from "./AboutSection.module.css";
import cvPdf from "../../assets/cv.pdf";
import FadeInUp from "../FadeInUp";
import { useEffect, useState } from "react";
import RubberBand from "../RubberBand";

const AboutSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const [hearBeatProps, apiHearBeat] = useSpring(
    () => ({
      from: { transform: "scale(1)" },
    }),
    []
  );

  useEffect(() => {
    if (startAnimation) {
      apiHearBeat.start({
        from: { transform: "scale(1)" },
        to: [
          { transform: "scale(1)" },
          { transform: "scale(1.3)" },
          { transform: "scale(1)" },
          { transform: "scale(1.3)" },
          { transform: "scale(1)" },
        ],
        delay: 700,
        config: {
          duration: 300,
        },
      });
    }
  }, [apiHearBeat, startAnimation]);

  return (
    <Stack className={`${styles.wrapper_about_section} section`} id="about">
      <Container>
        <Row>
          <Col>
            <FadeInUp>
              <p className="text-center mb-2">
                <span className="bg_section text-dark px-2">About Me</span>
              </p>
            </FadeInUp>
          </Col>
        </Row>
        <Row>
          <Col>
            <FadeInUp>
              <h2 className="text-1">Know Me More</h2>
            </FadeInUp>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-lg-start fs-2" lg={8}>
            <FadeInUp>
              <h2 className=" mb-3 fw-normal">Hello there!</h2>
              <p className="fs-5" style={{ lineHeight: 1.8 }}>
                I'm a Senior Software Engineer with over 9 years of experience,
                specializing in full-stack development. I thrive on solving a
                wide range of challenges and I'm always eager to dive into new
                learning opportunities. My superpower? Crafting elegant,
                efficient code at lightning speed. If you're in need of a coding
                maestro to tackle your project or collaborate with your team,
                I'm ready to bring my expertise to the table. Let's create
                something amazing together!
              </p>
            </FadeInUp>
          </Col>
          <Col className="mt-4 mt-lg-0" lg={4}>
            <FadeInUp delay={350} onRest={() => setStartAnimation(true)}>
              <div className={styles.experience_box}>
                <Stack className={styles.experience_box_icon}>
                  <animated.div style={hearBeatProps}>
                    <span>9</span>
                  </animated.div>
                </Stack>
                <RubberBand
                  startAnimation={startAnimation}
                  delay={2000}
                  duration={150}
                >
                  <h3>
                    Years of <span className="fw-bold">Experiance</span>
                  </h3>
                </RubberBand>
              </div>
            </FadeInUp>
          </Col>
        </Row>
        <Row className="gy-3 mt-4">
          <Col lg={3} md={6}>
            <FadeInUp delay={200}>
              <p className="text-muted fw-normal mb-0">Name:</p>
              <p className="fs-18 text-dark mb-0">Anton Karpenko</p>
            </FadeInUp>
          </Col>
          <Col className="p-0" lg={4} md={6}>
            <FadeInUp delay={400}>
              <p className="text-muted fw-normal mb-0">Email:</p>
              <p className="fs-18 mb-0">
                <a className="link-dark" href="mailto:drshnk.alex@gmail.com">
                  hi@antonkarpenko.dev
                </a>
              </p>
            </FadeInUp>
          </Col>
          <Col lg={2} md={6}>
            <FadeInUp delay={600}>
              <p className="text-muted fw-normal mb-0">From:</p>
              <p className="fs-18 text-dark mb-0">Ukraine</p>
            </FadeInUp>
          </Col>
          <Col className="d-flex align-items-center" lg={3} md={6}>
            <FadeInUp delay={800}>
              <Button
                className="rounded-0  btn-download"
                size="lg"
                variant="outline-dark"
              >
                <a
                  className="text-decoration-none link-dark"
                  download="CV"
                  href={cvPdf}
                >
                  Download CV
                </a>
              </Button>
            </FadeInUp>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default AboutSection;
