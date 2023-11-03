import { Col, Container, Modal, Row, Stack } from "react-bootstrap";
import styles from "./ProjectModal.module.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

const PROJECTS_DETAILS = [
  {
    title: "FAWO",
    project_info: `Admin dashboard management system for orphanage staff. Using it, orphanage departments are able to easily identify children’s placement history, exchange information, book missions and assignments to those responsible.`,
    technologies: "React, TypeOrm, MySQL, Express",
    project_details: `I was hired as a full stack developer for this project to set up a new application armed with DB scheme and business logic. Here are the most significant tasks:`,
    project_details_list: [
      `Setting up a whole new DB according to the client’s purposes and scheme;`,
      `Setting up a React app from scratch;`,
      `Configuring deployment process;`,
      `Implementing UI elements for Missions and Assignments pages (along with view-edit parts and region searches functionality);`,
      `Implementing signup process;`,
      `Various bug fixes.`,
    ],
    outcome: `By utilizing cutting-edge technologies, namely React and Express, the app gains the ability to manage increasing demand and data processing. This ensures its scalability for future growth.`,
  },
];

const ProjectModal = ({ modalShow, modalHide, project }) => {
  return (
    <Modal
      show={modalShow}
      onHide={modalHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles.wrapper_modal} project-modal`}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <h2 className="text-6 fw-600 text-center mb-4">
            {PROJECTS_DETAILS[project].title}
          </h2>
          <Row className="g-4">
            <Col>
              <ProjectCarousel />
              <Stack>
                <h4 className="fs-4 fw-600 mt-3">Project Info:</h4>
                <p>{PROJECTS_DETAILS[project].project_info}</p>
                <hr />
                <h4 className="fs-4 fw-600 mt-3">Technologies:</h4>
                <p>{PROJECTS_DETAILS[project].technologies}</p>
                <hr />
                <h4 className="fs-4 fw-600 mt-3">Project Details:</h4>
                <p>{PROJECTS_DETAILS[project].project_details}</p>
                <ul>
                  {PROJECTS_DETAILS[project].project_details_list.map(
                    (detail, index) => (
                      <li key={index}>{detail}</li>
                    )
                  )}
                </ul>
                <hr />
                <h4 className="fs-4 fw-600 mt-3">Outcome:</h4>
                <p>{PROJECTS_DETAILS[project].outcome}</p>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
