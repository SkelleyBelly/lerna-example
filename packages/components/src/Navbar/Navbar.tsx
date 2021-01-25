import {
  Box,
  ButtonBase,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import { Quotes, Activity, Market, Settings } from "../Icons";

const useStyles = makeStyles((theme: Theme) => ({
  navWrapper: {
    paddingTop: theme.spacing(40),
    width: "130px",
    height: "100%",
    backgroundColor: "#1E2336",
    display: "flex",
    flexDirection: "column",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    marginBottom: theme.spacing(15),
    transition: theme.transitions.create("background-color"),
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navWrapper}>
      {([
        [Quotes, "Quotes"],
        [Activity, "Activity"],
        [Market, "Market"],
        [Settings, "Settings"],
      ] as const).map(([Icon, label]) => (
        <Fragment key={label}>
          <ButtonBase className={classes.buttonWrapper} focusRipple>
            <Box mb={1} clone>
              <Icon />
            </Box>
            <Typography variant="caption" align="center">
              {label}
            </Typography>
          </ButtonBase>
        </Fragment>
      ))}
    </nav>
  );
};

export default Nav;
