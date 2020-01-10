import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    grayColor,
    defaultFont,
    tableFont
} from '../../styles/material'

const useStyles = makeStyles(theme => ({
    warningTableHeader: {
        color: warningColor[0]
    },
    primaryTableHeader: {
        color: primaryColor[0]
    },
    dangerTableHeader: {
        color: dangerColor[0]
    },
    successTableHeader: {
        color: successColor[0]
    },
    infoTableHeader: {
        color: infoColor[0]
    },
    grayTableHeader: {
        color: grayColor[0]
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
	},
	tableHeadCell: {
		color: "inherit",
		padding: "12px 8px",
        ...tableFont,
        "&, &$tableCell": {
            fontSize: "1em"
        }
    },
    tableCell: {
        ...defaultFont,
        lineHeight: "1.42857143",
        padding: "12px 8px",
        verticalAlign: "middle",
        fontSize: "0.8125rem"
    },
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing(1),
        overflowX: "auto"
    },
    tableHeadRow: {
        height: "56px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    },
    tableBodyRow: {
        height: "48px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    }
}));

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, small } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table} >
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
