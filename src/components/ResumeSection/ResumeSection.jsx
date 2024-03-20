import { Col, Container, ProgressBar, Row, Stack } from "react-bootstrap";
import FadeInUp from "../FadeInUp";
import styles from "./ResumeSection.module.css";

const ResumeSection = () => {
  return (
    <Stack className="section" id="resume">
      <Container>
        <Row>
          <Col>
            <FadeInUp>
              <p className="text-center mb-2">
                <span className="bg_section text-dark px-2">Resume</span>
              </p>
            </FadeInUp>
          </Col>
        </Row>
        <Row>
          <Col>
            <FadeInUp>
              <h2 className="text-1">A summary of My Resume</h2>
            </FadeInUp>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <FadeInUp>
              <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">Master of Computer Science</div>
                <p className="mb-2">
                  Kharkiv National Automobile and Highway University / 2010-2015
                </p>
              </div>
            </FadeInUp>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <FadeInUp>
              <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">1) Senior Software Engineer</div>
                <p className="mb-2">Freelancer / 2021 - Now</p>
                <p className="text-muted">
                  As I ventured into the world of freelancing, I eagerly tackled
                  a diverse array of projects. This multifaceted experience not
                  only expanded my skills but also granted me a distinctive
                  insight into various industries and their distinct
                  requirements.
                </p>
                <p className="text-muted">
                  In essence, my time as a freelancer encouraged me to cultivate
                  versatility, flexibility, and an unwavering commitment to
                  ongoing learning. Additionally, it allowed me to directly
                  engage with clients, fostering stronger client relationships,
                  and facilitating a deeper understanding of their specific
                  needs and expectations.
                </p>
                <p className="text-muted">
                  These interactions have proven to be invaluable in honing my
                  ability to provide tailored solutions and deliver exceptional
                  results.
                </p>
                <hr className="my-4" />
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">2) Senior Software Engineer</div>
                <p className="mb-2">MaybeWorks / 2019 -2021</p>
                <p className="text-muted">
                  During my time at the company as a Senior Software Engineer, I
                  was involved in various tasks, including the development of
                  high-performance web applications and microservices. I have
                  successfully used Express.js and Koa.js to build scalable and
                  reliable backend solutions. My work also included working with
                  AWS, where I configured and optimized the infrastructure to
                  ensure the high availability and scalability of our
                  applications. On the front end, I have extensively used
                  Angular and React.js to develop modern and dynamic user
                  interfaces. This included creating reactive components,
                  processing data, and interacting with the backend server.
                </p>
                <p className="text-muted">
                  Additionally, my experience includes working with the Django
                  framework, where I created reliable and secure APIs for our
                  applications. I participated in the design and development of
                  functionality, ensuring high performance and security of
                  applications.
                </p>
                <p className="text-muted">
                  In general, as a Senior Software Engineer, I participated in
                  the development and support of the full software development
                  cycle, guaranteeing the high quality and reliability of our
                  products.
                </p>
                <hr className="my-4" />
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">3) Full Stack Engineer</div>
                <p className="mb-2">QArea / 2016 - 2019</p>
                <p className="text-muted">
                  QArea / 2016 - 2019 While working as a full-stack developer in
                  a progressive organization, I took on a wide range of roles
                  covering both the front-end and back-end domains. On the
                  front-end, I utilized React and Next.js to create interactive
                  and adaptable user interfaces. TypeScript played a vital role
                  in maintaining code precision, fostering team collaboration,
                  and simplifying upkeep. Back-end frameworks empowered me to
                  build resilient server-side structures and APIs, ensuring
                  seamless communication with the front-end.
                </p>
                <hr className="my-4" />
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">4) Frontend Web Developer</div>
                <p className="mb-2">MWDN Ltd / 2013 - 2016</p>
                <p className="text-muted">
                  As a Frontend Web Developer, I have used my skills in
                  JavaScript and TypeScript to create interactive and
                  high-performance front ends using Angular and React.js. My job
                  involved collaborating with the backend team using Node.js and
                  NestJS to ensure a smooth experience between client and
                  server.
                </p>
                <hr className="my-4" />
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className={`${styles.border} ps-3`}>
                <div className="fs-4">5) Frontend Developer</div>
                <p className="mb-2">NIX Solutions / 2011 - 2013</p>
                <p className="text-muted">
                  Starting my development odyssey, I wielded HTML/CSS and then
                  dived into PHP for backend wizardry. The enchantment of
                  interactivity was ignited by JavaScript and TypeScript, while
                  React, Angular, and Node.js moulded my mastery of full-stack
                  sorcery. Every obstacle was boldly confronted with the backing
                  of an amazing team, turning each stride into a gratifying
                  journey of enrichment and knowledge.
                </p>
                <hr className="my-4" />
              </div>
            </FadeInUp>
          </Col>
        </Row>
        <FadeInUp>
          <h2 className="text-7 fw-600 mb-4 pb-2 mt-5">My Skills</h2>
        </FadeInUp>

        <Row className="gx-5">
          <Col md={6}>
            <FadeInUp>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">React</p>
                <span>95%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={95} />
            </FadeInUp>
          </Col>
          <Col md={6}>
            <FadeInUp>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">Angular</p>
                <span>90%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={90} />
            </FadeInUp>
          </Col>
          <Col md={6}>
            <FadeInUp delay={200}>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">Typescript</p>
                <span>90%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={90} />
            </FadeInUp>
          </Col>
          <Col md={6}>
            <FadeInUp delay={200}>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">Nest.js</p>
                <span>90%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={90} />
            </FadeInUp>
          </Col>
          <Col md={6}>
            <FadeInUp delay={400}>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">Django</p>
                <span>80%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={80} />
            </FadeInUp>
          </Col>
          <Col md={6}>
            <FadeInUp delay={400}>
              <Stack className="justify-content-between" direction="horizontal">
                <p className="fw-500 text-start mb-2">Mongo/Postgres</p>
                <span>90%</span>
              </Stack>
              <ProgressBar className={`${styles.progress_sm} mb-4`} now={90} />
            </FadeInUp>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ResumeSection;
