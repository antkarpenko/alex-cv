import { Col, Container, Nav, Row } from "react-bootstrap";
import styles from "./Header.module.css";
import { useState } from "react";

const MAP_LINKS = [
  "home",
  "about",
  "services",
  "resume",
  "portfolio",
  "faq",
  "client",
  "contact",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrapper}>
      <Nav
        className={`${styles.nav_wrapper}`}
        defaultActiveKey="#home"
        variant="underline"
      >
        <Container>
          <Row className={`${styles.nav_content}`}>
            <Col xs={2}></Col>
            <Col xs={8} className={styles.nav_link}>
              <div
                className={`${styles.nav_dropdown} ${open ? styles.open : ""}`}
              >
                {MAP_LINKS.map((link, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link
                      className="text-uppercase"
                      eventKey={index}
                      href={`#${link}`}
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </div>

              {open ? (
                <i
                  className={`${styles.pointer} bi bi-x`}
                  onClick={() => setOpen(!open)}
                  style={{ fontSize: "34px" }}
                />
              ) : (
                <i
                  className={`${styles.pointer} bi bi-list d-lg-none d-xl-none d-xxl-none`}
                  onClick={() => setOpen(!open)}
                  style={{ fontSize: "34px" }}
                />
              )}
            </Col>
            {/* <Col className={`${styles.nav_icon}`} xs={8}>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
            </Col> */}
          </Row>
        </Container>
      </Nav>
    </header>
  );
};

export default Header;
