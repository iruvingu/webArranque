import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

import {
    container,
    defaultFont,
    defaultBoxShadow,
  } from '../styles/material'

const useStyles = makeStyles(theme => ({
    appBar: {
      backgroundColor:  theme.palette.primary.main,
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: theme.palette.extra.grayColor,
      border: "0",
      borderRadius: "0px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    container: {
      ...container,
      minHeight: "50px"
    },
    flex: {
      flex: 1
    },
    title: {
      ...defaultFont,
      letterSpacing: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    },
    appResponsive: {
      top: "8px"
    },
    primary: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      ...defaultBoxShadow
    },
    info: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.contrastText,
      ...defaultBoxShadow
    },
    success: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.primary.contrastText,
      ...defaultBoxShadow
    },
    warning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.primary.contrastText,
      ...defaultBoxShadow
    },
    danger: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.primary.contrastText,
      ...defaultBoxShadow
    }
  }));


function NavBar(props) {

    const classes = useStyles();

    function makeBrand() {
        var name;
        props.routes.map(prop => {
          if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
            name = props.rtlActive ? prop.rtlName : prop.name;
          }
          return null;
        });
        return name;
    }

    const { color } = props;

    const appBarClasses = classNames({
    [" " + classes[color]]: color
    });

    return (
        <AppBar className={classes.appBar + appBarClasses}>
          <Toolbar className={classes.container}>
          <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Hidden>
            <div className={classes.flex}>
              {/* Here we create navbar brand, based on route name */}
              <div className={classes.title}>
                {makeBrand()}
              </div>
            </div>
            {/* <Hidden smDown implementation="css">
              <AdminNavbarLinks />
            </Hidden> */}
            
          </Toolbar>
        </AppBar>
      );
}

export default NavBar
