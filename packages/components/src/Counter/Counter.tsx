import { Typography, Box, makeStyles, Theme } from "@material-ui/core";
import { Wallet, Calculator } from "../Icons";
import { numberWithCommas } from "../utils";

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
      {/* <img
        src={icon === "wallet" ? wallet : calculator}
        alt="Wallet Icon"
        className={classes.icon}
      /> */}
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
          <b>{`$${numberWithCommas(value)}`}</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Counter;
