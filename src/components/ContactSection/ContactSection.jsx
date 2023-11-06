import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import styles from "./ContactSection.module.css";
import * as formik from "formik";
import * as yup from "yup";
import FadeInUp from "../FadeInUp";

const ContactSection = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Text: yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("values", values);
    resetForm({ Name: "", Email: "", Text: "" });
  };

  return (
    <Stack className={`${styles.wrapper_contact_section} section`}>
      <Container>
        <Row>
          <Col className="text-center text-lg-start" lg={5}>
            <FadeInUp>
              <h2 className="fs-1 fw-600 mb-5">Let's get in touch</h2>
              <p className="fs-5 mb-5">
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <h3 className="fs-5 fw-600">Living In:</h3>
              <address className="fs-6">
                Kyiv, 11 Bankova Str., Ukraine.
              </address>
              <h3 className="fs-5 fw-600">Call:</h3>
              <p className="fs-5">+38 050 000 000 0</p>
            </FadeInUp>
          </Col>
          <Col className="ms-auto mt-5 mt-lg-0" lg={6}>
            <FadeInUp>
              <h2 className="fs-1 fw-600 mb-5">Estimate your Project?</h2>
              <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                  Name: "",
                  Email: "",
                  Text: "",
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form id="contact-form" onSubmit={handleSubmit}>
                    <Row className="g-4">
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId="validationFormik01"
                      >
                        <Form.Label>What is Your Name:</Form.Label>
                        <Form.Control
                          className={`${styles.form_border} py-1`}
                          name="Name"
                          value={values.Name}
                          onChange={handleChange}
                          isInvalid={!!errors.Name}
                          type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId="validationFormik02"
                      >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                          className={`${styles.form_border} py-1`}
                          type="email"
                          name="Email"
                          value={values.Email}
                          onChange={handleChange}
                          isInvalid={!!errors.Email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={12}
                        controlId="validationFormik03"
                      >
                        <Form.Label>How can I Help you?</Form.Label>
                        <Form.Control
                          as="textarea"
                          className={`${styles.form_border} py-1`}
                          rows="4"
                          type="text"
                          name="Text"
                          value={values.Text}
                          onChange={handleChange}
                          isInvalid={!!errors.Text}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Text}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Col className="text-center text-lg-start" xs={12}>
                        <Stack
                          className="justify-content-center justify-content-lg-start"
                          direction="horizontal"
                        >
                          <Button
                            className={styles.submit_button}
                            form="contact-form"
                            size="lg"
                            type="submit"
                            variant="dark"
                          >
                            Send
                            <span className="ms-3">
                              <i className="bi bi-arrow-right-short h2" />
                            </span>
                          </Button>
                        </Stack>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </FadeInUp>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ContactSection;
