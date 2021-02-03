import { useTheme } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { numberWithCommas } from "../utils";

export interface AnimatedTextProps {
  value: number;
}

const AnimatedText = ({ value }: AnimatedTextProps) => {
  const theme = useTheme();

  const { width } = useSpring<{ width: number }>({
    width: value || 0,
    config: { duration: theme.transitions.duration.standard },
  });

  return (
    <animated.span>
      {width.interpolate((x) => numberWithCommas(x as number))}
    </animated.span>
  );
};

export default AnimatedText;
