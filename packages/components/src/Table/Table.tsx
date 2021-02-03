import { Fragment } from "react";
import {
  Divider,
  makeStyles,
  Switch,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@material-ui/core";
import { numberWithCommas } from "../utils";
import Rating from "./Rating";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    overflow: "hidden",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "rgba(30, 35, 54,0.6)",
  },
  header: {
    backgroundColor: "#1E2336",
  },
  headerCell: {
    padding: "12px",
    borderBottom: "none",
  },
  bodyCell: {
    borderBottom: "none",
    color: "inherit",
  },
  dividerCell: {
    padding: 0,
  },
  divider: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: theme.spacing(0, 10),
  },
  rowHeader: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
  rowHover: {
    height: 100,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export interface TableProps {
  data: Array<{
    company: string;
    rating: number;
    term: number;
    setup: number;
    monthly: number;
    total: number;
    selected: boolean;
  }>;
  onToggle: (toggledIndex: number) => void;
}

const Table = ({ data, onToggle }: TableProps) => {
  const classes = useStyles();

  return (
    <MuiTable className={classes.table}>
      <TableHead className={classes.header}>
        <TableRow>
          <TableCell align="center" className={classes.headerCell}>
            COMPANY
          </TableCell>
          <TableCell align="center" className={classes.headerCell}>
            RATING
          </TableCell>
          <TableCell align="center" className={classes.headerCell}>
            TERM
          </TableCell>
          <TableCell align="center" className={classes.headerCell}>
            SETUP
          </TableCell>
          <TableCell align="center" className={classes.headerCell}>
            MONTHLY
          </TableCell>
          <TableCell align="center" className={classes.headerCell}>
            TOTAL
          </TableCell>
          <TableCell className={classes.headerCell} />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(
          (
            { company, rating, term, setup, monthly, total, selected },
            index
          ) => (
            <Fragment key={company}>
              <TableRow hover classes={{ hover: classes.rowHover }}>
                <TableCell
                  align="center"
                  className={`${classes.bodyCell} ${classes.rowHeader}`}
                >
                  {company}
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  <Rating value={rating} />
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  {`${term} `}
                  <Typography variant="caption">years</Typography>
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  {`$${numberWithCommas(setup)}`}
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  {`$${numberWithCommas(monthly)}`}
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  {`$${numberWithCommas(total)}`}
                </TableCell>
                <TableCell align="center" className={classes.bodyCell}>
                  <Switch
                    color="primary"
                    checked={selected}
                    onChange={() => onToggle(index)}
                  />
                </TableCell>
              </TableRow>
              {index < data.length - 1 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className={`${classes.bodyCell} ${classes.dividerCell}`}
                  >
                    <Divider className={classes.divider} />
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          )
        )}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
