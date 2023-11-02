import { animated, useSpring } from "@react-spring/web";
import { forwardRef } from "react";

const FadeInUp = forwardRef(({ children, delay = 0, isVisible }, ref) => {
  const configSpring = isVisible ? {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay,
    config: { duration: 800 },
  }: {};

  const spring = useSpring(configSpring);

  return (
    <animated.div ref={ref} style={spring}>
      {children}
    </animated.div>
  );
});

export default FadeInUp;
