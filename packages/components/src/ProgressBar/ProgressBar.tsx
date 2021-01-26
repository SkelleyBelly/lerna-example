import {
  Box,
  LinearProgress,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const BORDER_WIDTH = 10;

const useStyles = makeStyles<Theme, ProgressBarProps>((theme: Theme) => ({
  root: {
    flex: 1,
    backgroundColor: "#1E2336",
    height: 20,
    borderRadius: 10,
    boxShadow: `rgba(255,255,255,0.06) 0px 0px 0px ${BORDER_WIDTH}px`,
    margin: BORDER_WIDTH,
  },
  bar: ({ value }) => ({
    borderRadius: 10,
    "&::before": {
      color: "white",
      content: `"${value}%"`,
      display: "block",
      textAlign: "right",
      paddingRight: 8,
    },
  }),
  label: {
    marginRight: theme.spacing(15),
  },
}));

export interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  const normalised = Math.round(Math.min(100, value));

  const classes = useStyles({ value: normalised });

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5" className={classes.label}>
        Your Bids
      </Typography>
      <LinearProgress
        variant="determinate"
        value={normalised}
        classes={classes}
      />
    </Box>
  );
};

export default ProgressBar;
