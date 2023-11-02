import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./ServicesSection.module.css";
import FadeInUp from "../FadeInUp";
import frontendSvg from "../../assets/frontend.svg";
import chartSvg from "../../assets/chart.svg";
import backendSvg from "../../assets/back.svg";
import databaseSvg from "../../assets/database.svg";
import mobileSvg from "../../assets/mobile.svg";
import cloudSvg from "../../assets/cloud.svg";

const ServicesSection = () => {
  return (
    <Stack className="section bg-light" id="services">
      <Container>
        <Row>
          <Col>
            <FadeInUp>
              <p className="text-center mb-2">
                <span className="bg_section text-dark px-2">What I Do?</span>
              </p>
            </FadeInUp>
          </Col>
        </Row>
        <Row>
          <Col>
            <FadeInUp>
              <h2 className="text-1">How I can help your next project</h2>
            </FadeInUp>
          </Col>
        </Row>
        <Row >
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img
                    alt="frontend"
                    className={styles.icon}
                    src={frontendSvg}
                  ></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Frontend</h3>
                <p className="text-muted mb-0">
                  Deep understanding of React, Angular, Next.js, including their
                  core concepts, architecture, and best practices. Able to
                  design, develop, and test complex and scalable frontend
                  applications using these frameworks.
                </p>
              </div>
            </FadeInUp>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img alt="chart" className={styles.icon} src={chartSvg}></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Data Visualization</h3>
                <p className="text-muted mb-0">
                  Have skills and knowledge to create informative and engaging
                  data visualizations using charting libraries such as Chart.js,
                  D3.js, and Apache ECharts.
                </p>
              </div>
            </FadeInUp>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img
                    alt="backend"
                    className={styles.icon}
                    src={backendSvg}
                  ></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Backend</h3>
                <p className="text-muted mb-0">
                  Master of server-side technologies, including Node.js, Python,
                  Nest.js, Django, and other modern frameworks. Able to design,
                  develop, and deploy scalable and secure backend applications.
                </p>
              </div>
            </FadeInUp>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img
                    alt="databases"
                    className={styles.icon}
                    src={databaseSvg}
                  ></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Databases</h3>
                <p className="text-muted mb-0">
                  Proficiency in relational and NoSQL databases, including
                  MongoDB, Redis, PostgreSQL, and MySQL, and is able to design,
                  develop, and manage complex and scalable database solutions.
                </p>
              </div>
            </FadeInUp>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img
                    alt="mobile Dev"
                    className={styles.icon}
                    src={mobileSvg}
                  ></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Mobile Dev</h3>
                <p className="text-muted mb-0">
                  Experience in Mobile Dev including React Native and Ionic.
                  Good understanding of the frameworks and able to use them to
                  build hybrid mobile apps for iOS and Android.
                </p>
              </div>
            </FadeInUp>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <FadeInUp>
              <div className="position-relative text-center px-md-4">
                <div className="box-icon">
                  <img
                    alt="cloud"
                    className={styles.icon}
                    src={cloudSvg}
                  ></img>
                </div>
                <h3 className="text-6 fw-600 mb-3">Cloud Services</h3>
                <p className="text-muted mb-0">
                  Knowledge of Cloud Technologies such as Amazon Web Services
                  (AWS) and Google Cloud Platform (GCP), including their core
                  services, architecture, and best practices.
                </p>
              </div>
            </FadeInUp>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ServicesSection;
