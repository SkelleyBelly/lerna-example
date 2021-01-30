import { Typography, Box, makeStyles, Theme } from "@material-ui/core";
import AnimatedText from "../AnimatedText";
import { Wallet, Calculator } from "../Icons";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    lineHeight: 1,
  },
  icon: {
    opacity: 0.3,
    marginRight: theme.spacing(5),
  },
}));

export interface CounterProps {
  value: number;
  caption: string;
  icon: "wallet" | "calculator";
}

const Counter = ({ value, icon = "wallet", caption }: CounterProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box className={classes.icon}>
        {icon === "wallet" ? <Wallet /> : <Calculator />}
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.title}
        >
          {caption}
        </Typography>
        <Typography variant="h4" color="primary">
          <b>
            <span>$</span>
            <AnimatedText value={value} />
          </b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Counter;
