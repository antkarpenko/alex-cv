import { Button, Image, Stack } from "react-bootstrap";
import styles from "./HireMeSection.module.css";
import banner from "../../assets/banner1.jpg";
import FadeInUp from "../FadeInUp";
import { useState } from "react";
import RubberBand from "../RubberBand";

const HireMeSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <Stack className={styles.wrapper_hire_me_section}>
      <Image src={banner} />
      <div className={styles.bg_dark}></div>

      <div className={styles.content}>
        <FadeInUp onRest={() => setStartAnimation(true)}>
          <Stack className={styles.animation_box}>
            <h2 className="text-white fs-1 fw-600 mb-5">
              Interested in working with me?
            </h2>
            <RubberBand startAnimation={startAnimation} delay={200}>
              <Button
                className={styles.hire_button}
                href="#home"
                size="lg"
                variant="primary"
              >
                Hire Me!
              </Button>
            </RubberBand>
          </Stack>
        </FadeInUp>
      </div>
    </Stack>
  );
};

export default HireMeSection;
