import { Col, Container, Modal, Row, Stack } from 'react-bootstrap';
import styles from './ProjectModal.module.css';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';

const PROJECTS_DETAILS = [
  {
    title: 'FAWO',
    project_info: `Admin dashboard management system for orphanage staff. Using it, orphanage departments are able to easily identify children’s placement history, exchange information, book missions and assignments to those responsible.`,
    technologies: 'React, TypeOrm, MySQL, Express',
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
  {
    title: 'Photoland',
    project_info:
      'Marketplace for professional photographers. Here photographers can create a personal account and store their portfolio images in high quality. There is a possibility for clients to hire talents or buy their photos.',
    technologies:
      'React, Redux, Node.js, Nest.js, TypeScript, AWS: Lambda, DataDog',
    project_details:
      'Hired as a seasoned full-stack developer with good mathematics knowledge, since image editor development requires it. My responsibilities included refactoring the existing code base, fixing bugs, and developing new features for the MVP stage. My main tasks were:',
    project_details_list: [
      `Transferring an existing code base to modern TypeScript standards;`,
      `Carrying out integration with AWS Lambda and DataDog to keep tracking errors and logging information;`,
      `Developing a new image editing feature;`,
      `Integrating with a third-party payment gateway to enable photographers to sell their photos to clients;`,
      `Writing unit tests and integration tests to ensure the quality and reliability of the code.`,
    ],
    outcome: `This innovative marketplace allowed users to identify premier photographers, hire them and buy the masterpieces. Proud to be engaged in this project and to produce tangible results covering both architecture and UI.`,
  },
  {
    title: 'Vroomchat',

    project_info:
      'Zoom-like application that allows users to create rooms and have video calls with their friends/partners. The key difference was that Vroomchat was more aimed at small and thematic groups who wanted to play some built-in games or just have fun talking to each other. The app has some open rooms for everyone or for a fee users can create private rooms (visible only in their profiles and people whom they invite by the custom link).',
    technologies:
      'React, Twilio WebRTC API, TypeScript, NodeJS, Express, WebSockets, PostgreSQL, Heroku, Zeplin, Stripe.',
    project_details:
      'Hired as a Full Stack Dev in a small team to help build the project. I completed tons of tasks and assignments. Here are the most significant ones:',
    project_details_list: [
      `Developed the video chat based on the WebRTC using Twilio API;`,
      `Implemented Nodejs of our API and socket server;`,
      `Rewrote the whole app on TypeScript + transferred all the data from MongoDB to PostgreSQL;`,
      `Developed various pages based on designs;`,
      `Integrating with a third-party payment gateway.`,
    ],
    outcome:
      'It was another wonderful development journey. My expertise helped the client get the app ready in a timely manner. Due to the efforts applied, there is a wonderful app connecting millions of people.',
  },
];

const ProjectModal = ({ modalShow, modalHide, project }) => {
  return (
    <Modal
      show={modalShow}
      onHide={modalHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className={`${styles.wrapper_modal} project-modal`}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <h2 className='text-6 fw-600 text-center mb-4'>
            {PROJECTS_DETAILS[project].title}
          </h2>
          <Row className='g-4'>
            <Col>
              <ProjectCarousel project={project} />
              <Stack>
                <h4 className='fs-4 fw-600 mt-3'>Project Info:</h4>
                <p>{PROJECTS_DETAILS[project].project_info}</p>
                <hr />
                <h4 className='fs-4 fw-600 mt-3'>Technologies:</h4>
                <p>{PROJECTS_DETAILS[project].technologies}</p>
                <hr />
                <h4 className='fs-4 fw-600 mt-3'>Project Details:</h4>
                <p>{PROJECTS_DETAILS[project].project_details}</p>
                <ul>
                  {PROJECTS_DETAILS[project].project_details_list.map(
                    (detail, index) => (
                      <li key={index}>{detail}</li>
                    )
                  )}
                </ul>
                <hr />
                <h4 className='fs-4 fw-600 mt-3'>Outcome:</h4>
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
