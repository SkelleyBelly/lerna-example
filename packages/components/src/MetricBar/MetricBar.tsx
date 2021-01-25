import { Grid, makeStyles } from "@material-ui/core";
import Counter from "../Counter";
import Doughnut from "../Doughnut";

const BORDER_STYLE = "1px solid rgba(255,255,255,0.1)";

const useStyles = makeStyles({
  wrapper: {
    borderTop: BORDER_STYLE,
    borderBottom: BORDER_STYLE,
    height: 200,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemBorder: {
    borderRight: BORDER_STYLE,
  },
});

export interface MetricBarProps {
  oldBillValue: number;
  avgEstimateValue: number;
  savingValue: number;
}

const MetricBar = ({
  oldBillValue,
  avgEstimateValue,
  savingValue,
}: MetricBarProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={4} className={`${classes.item} ${classes.itemBorder}`}>
        <Counter
          value={oldBillValue}
          icon="wallet"
          caption="Cost of Old Bill"
        />
      </Grid>
      <Grid item xs={4} className={`${classes.item} ${classes.itemBorder}`}>
        <Counter
          value={avgEstimateValue}
          icon="calculator"
          caption="Avg. New Estimate"
        />
      </Grid>
      <Grid item xs={4} className={`${classes.item}`}>
        <Doughnut value={savingValue} />
      </Grid>
    </Grid>
  );
};

export default MetricBar;
