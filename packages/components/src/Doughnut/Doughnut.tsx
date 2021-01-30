import {
  Box,
  CircularProgress,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import AnimatedText from "../AnimatedText";

const [CIRCLE_SIZE, CIRCLE_THICKNESS] = [140, 5];

const useStyles = makeStyles((theme: Theme) => ({
  top: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottom: {
    color: "#1E2336",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  labelWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  labelCaption: {
    marginBottom: theme.spacing(-2),
  },
  labelCount: {
    marginBottom: theme.spacing(1),
  },
}));

export interface DoughnutProps {
  value: number;
}

const Doughnut = ({ value }: DoughnutProps) => {
  const classes = useStyles();

  return (
    <Box position="relative" display="inline-block">
      <CircularProgress
        variant="determinate"
        value={100}
        size={CIRCLE_SIZE}
        thickness={CIRCLE_THICKNESS}
        classes={{ svg: classes.bottom }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={CIRCLE_SIZE}
        thickness={CIRCLE_THICKNESS}
        className={classes.top}
      />
      <Box className={classes.labelWrapper}>
        <Typography variant="caption" className={classes.labelCaption}>
          You Save
        </Typography>
        <Typography variant="h4" color="primary" className={classes.labelCount}>
          <b>
            <AnimatedText value={value} />
            <span>%</span>
          </b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Doughnut;
