import { Col, Container, Row, Stack } from 'react-bootstrap';
import styles from './ContactSection.module.css';

const EMAIL = 'hi@antonkarpenko.dev';
const LINKEDIN = 'https://www.linkedin.com/in/senior-fullstack-dev/';

const ContactSection = () => {

  return (
    <Stack className={`${styles.wrapper_contact_section} section`} id='contact'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-center' lg={6}>
            <h2 className='fs-1 fw-600 mb-5'>Let's get in touch</h2>
            <p className='fs-5 mb-5'>
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </p>
            <h3 className='fs-5 fw-600'>Contact:</h3>
            <Stack>
              <div>
                <i className='bi bi-envelope-at-fill fs-5' />
                <a href={`mailto: ${EMAIL}`} className='text-dark ms-3'>
                  {EMAIL}
                </a>
              </div>

              <div className='mt-2'>
                <i className='bi bi-linkedin fs-5' />
                <a
                  href={LINKEDIN}
                  rel='noreferrer'
                  target='_blank'
                  className='text-dark ms-3'
                >
                  Linkedin
                </a>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ContactSection;
