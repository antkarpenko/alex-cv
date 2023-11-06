import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

const RubberBand = ({
  delay = 0,
  duration = 150,
  children,
  startAnimation,
}) => {
  const [rubberBandProps, apiRubberBand] = useSpring(
    () => ({
      from: { transform: "scale3d(1,1,1)" },
    }),
    []
  );

  useEffect(() => {
    if (startAnimation) {
      apiRubberBand.start({
        from: { transform: "scale3d(1,1,1)" },
        to: [
          { transform: "scale3d(1.25, 0.75, 1)" },
          { transform: "scale3d(0.75, 1.25, 1)" },
          { transform: "scale3d(1.15, 0.85, 1" },
          { transform: "scale3d(0.95, 1.05, 1)" },
          { transform: "scale3d(1.05, 0.95, 1)" },
          { transform: "scale3d(1, 1, 1)" },
        ],
        config: {
          duration,
        },
        delay,
      });
    }
  }, [apiRubberBand, delay, duration, rubberBandProps, startAnimation]);

  return <animated.div style={rubberBandProps}>{children}</animated.div>;
};

export default RubberBand;
