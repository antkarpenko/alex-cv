import { animated,  useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FadeInUp = ({ children, delay = 0, onRest=()=>{} }) => {

  const [isVisible, setIsVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const springs = useSpring({
    from: isVisible
      ? { transform: "translate3d(0,100%,0)", opacity: 1 }
      : { opacity: 0 },
    to: isVisible
      ? { transform: "translate3d(0,0,0)", opacity: 1 }
      : { opacity: 0 },

    config: { duration: 800 },
    delay,
    onRest,
  });

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default FadeInUp;
