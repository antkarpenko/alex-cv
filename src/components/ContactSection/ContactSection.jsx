import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import styles from './ContactSection.module.css';
import * as formik from 'formik';
import * as yup from 'yup';
import FadeInUp from '../FadeInUp';
import { useState } from 'react';

const EMAIL = 'hi@antonkarpenko.dev';
const LINKEDIN = 'https://www.linkedin.com/in/senior-fullstack-dev/';

const ContactSection = () => {
  const { Formik } = formik;
  const [result, setResult] = useState('');

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    text: yup.string().required(),
  });

  const onSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('email', 'xtenor1@mailforspam.com');

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append('access_key', process.env.REACT_APP_ACCESS_KEY);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
    } else {
      setResult(res.message);
    }

    setTimeout(() => {
      setResult('');
    }, 3000);

    resetForm({ name: '', email: '', text: '' });
  };

  return (
    <Stack className={`${styles.wrapper_contact_section} section`} id='contact'>
      <Container>
        <Row>
          <Col className='text-center text-lg-start' lg={5}>
            <FadeInUp>
              <h2 className='fs-1 fw-600 mb-5'>Let's get in touch</h2>
              <p className='fs-5 mb-5'>
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <h3 className='fs-5 fw-600'>Contact:</h3>
              <Stack>
                 <div>
                  <i className='bi bi-envelope-at-fill fs-5' />
                  <a
                    href={`mailto: ${EMAIL}`}
                    className='text-dark ms-3'
                  >
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
            </FadeInUp>
          </Col>
          <Col className='ms-auto mt-5 mt-lg-0' lg={6}>
            <FadeInUp>
              <h2 className='fs-1 fw-600 mb-5'>Estimate your Project?</h2>
              <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={false}
                initialValues={{
                  name: '',
                  email: '',
                  text: '',
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form id='contact-form' onSubmit={handleSubmit}>
                    <Row className='g-4'>
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId='validationFormik01'
                      >
                        <Form.Label>What is Your Name:</Form.Label>
                        <Form.Control
                          className={`${styles.form_border} py-1`}
                          name='name'
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          type='text'
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId='validationFormik02'
                      >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                          className={`${styles.form_border} py-1`}
                          type='email'
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId='validationFormik03'
                      >
                        <Form.Label>How can I Help you?</Form.Label>
                        <Form.Control
                          as='textarea'
                          className={`${styles.form_border} py-1`}
                          rows='4'
                          type='text'
                          name='text'
                          value={values.text}
                          onChange={handleChange}
                          isInvalid={!!errors.text}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.text}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Col className='text-center text-lg-start' xs={12}>
                        <Stack
                          className='justify-content-center justify-content-lg-start'
                          direction='horizontal'
                        >
                          <Button
                            className={styles.submit_button}
                            form='contact-form'
                            size='lg'
                            type='submit'
                            variant='dark'
                          >
                            Send
                            <span className='ms-3'>
                              <i className='bi bi-arrow-right-short h2' />
                            </span>
                          </Button>
                        </Stack>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </FadeInUp>
            <Stack className='mt-3'>{result}</Stack>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ContactSection;
