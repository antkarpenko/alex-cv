import { animated, useInView } from "@react-spring/web";

const FadeInUp = ({ children, delay = 0 }) => {
  const [ref, springs] = useInView(
    () => ({
      from: { transform: "translate3d(0,100%,0)" },
      to: { transform: "translate3d(0,0,0)" },

      config: { duration: 800 },
    }),
    {
      amount: 0.1,
      delay,
      once: true,
    }
  );

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default FadeInUp;
