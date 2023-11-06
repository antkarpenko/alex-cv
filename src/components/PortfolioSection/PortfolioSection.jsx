import { Col, Container, Image, Ratio, Row, Stack } from "react-bootstrap";
import FadeInUp from "../FadeInUp";
import fawo from "../../assets/Fawo.png";
import styles from "./PortfolioSection.module.css";
import photoland from "../../assets/Photoland.png";
import vroomchat from "../../assets/Vroomchat.png";
import { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

const PortfolioSection = () => {
  const [project, setProject] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Stack className="section bg-light" id="portfolio">
      <Container>
        <Row>
          <Col>
            <FadeInUp>
              <p className="text-center mb-2">
                <span className="bg_section text-dark px-2">Portfolio</span>
              </p>
            </FadeInUp>
          </Col>
        </Row>
        <Row>
          <Col>
            <FadeInUp>
              <h2 className="text-1">Some of my most recent projects</h2>
            </FadeInUp>
          </Col>
        </Row>

        <Row className="g-4">
          <Col className={styles.portfolio} lg={4}>
            <FadeInUp>
              <div className="position-relative">
                <Ratio aspectRatio={2 / 3}>
                  <Image alt="fawo" fluid src={fawo} />
                </Ratio>
                <div
                  className={styles.portfolio_details}
                  onClick={() => {
                    setProject(0);
                    setModalShow(true);
                  }}
                >
                  <i className="bi bi-file-earmark-text-fill mb-3" />

                  <h5 className="text-white text-5">FAWO</h5>
                  <span className="text-light">Admin dashboard</span>
                </div>
              </div>
            </FadeInUp>
          </Col>

          <Col className={styles.portfolio} lg={4}>
            <FadeInUp>
              <div
                className="position-relative"
                onClick={() => {
                  setProject(1);
                  setModalShow(true);
                }}
              >
                <Ratio aspectRatio={2 / 3}>
                  <Image alt="photoland" fluid src={photoland} />
                </Ratio>
                <div className={styles.portfolio_details}>
                  <i className="bi bi-file-earmark-text-fill mb-3" />

                  <h5 className="text-white text-5">Photoland</h5>
                  <span className="text-light">
                    Marketplace for professional photographers
                  </span>
                </div>
              </div>
            </FadeInUp>
          </Col>

          <Col className={styles.portfolio} lg={4}>
            <FadeInUp>
              <div className="position-relative">
                <Ratio aspectRatio={2 / 3}>
                  <Image alt="vroomchat" fluid src={vroomchat} />
                </Ratio>
                <div
                  className={styles.portfolio_details}
                  onClick={() => {
                    setProject(2);
                    setModalShow(true);
                  }}
                >
                  <i className="bi bi-file-earmark-text-fill mb-3" />

                  <h5 className="text-white text-5">Vroomchat</h5>
                  <span className="text-light">Video Communications Apps</span>
                </div>
              </div>
            </FadeInUp>
          </Col>
        </Row>
      </Container>
      <ProjectModal
        modalShow={modalShow}
        modalHide={() => setModalShow(false)}
        project={project}
      />
    </Stack>
  );
};

export default PortfolioSection;
