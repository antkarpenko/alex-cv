import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import styles from "./HomeSection.module.css";
import { TypeAnimation } from "react-type-animation";
import avatar from "../../assets/avatar.jpg";
import { animated, useSpring } from "@react-spring/web";

const HomeSection = () => {
  const springs = useSpring({
    from: { opacity: 0, transform: "scale3d(0.3, 0.3, 0.3)" },
    to: { opacity: 1, transform: "scale3d(1 , 1, 1)" },
  });

  return (
    <Stack id="home" className={styles.wrapper_home_section}>
      <Container className="my-auto py-5 py-lg-0">
        <Row className="py-y">
          <Col
            className="text-center text-lg-start align-self-center order-1 order-lg-0"
            lg={8}
          >
            <h1 className="fw-light mb-0 text-uppercase">
              Hi there, I am Alex Doroshenko
            </h1>
            <h4 className="text-uppercase mb-0 ms-1 text-typing">
              <TypeAnimation
                className={styles.typing_text}
                sequence={[
                  "SENIOR ENGINEER",
                  1000,
                  "FREELANCER",
                  1000,
                  "PROBLEM SOLVER",
                  1000,
                  "FULL-STACK",
                  1000,
                  "WEB-DEVELOPER",
                  1000,
                ]}
                speed={20}
                repeat={Infinity}
              />
            </h4>
            <p className="fs-4">Based in Ukraine.</p>
            <Button className="fs-6 rounded-0 mt-3" href="" variant="dark">
              View My Works
            </Button>
            <Button
              className={styles.contact_button}
              href="#contact"
              variant="link"
            >
              Contact Me
              <span className="ms-2">
                <i className="bi bi-arrow-down-circle" />
              </span>
            </Button>
          </Col>
          <Col
            className="text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1"
            lg={4}
          >
            <animated.div style={springs}>
              <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg">
                <Image fluid src={avatar} roundedCircle />
              </div>
            </animated.div>
          </Col>
        </Row>
      </Container>
      <a className={styles.scroll_down_arrow} href="#about">
        <i className="bi bi-arrow-down-short" />
      </a>
    </Stack>
  );
};

export default HomeSection;
