import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Grid from '@material-ui/core/Grid'
import SVG from 'react-inlinesvg';

import {
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryBoxShadow,
    hexToRgb
  } from "../styles/material"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "1",
        ...boxShadow,
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark,
        [theme.breakpoints.up("md")]: {
          width: drawerWidth,
          position: "fixed",
          height: "100%"
        },
        [theme.breakpoints.down("sm")]: {
          width: drawerWidth,
          ...boxShadow,
          position: "fixed",
          display: "block",
          top: "0",
          height: "100vh",
          right: "auto",
          left: "0",
          zIndex: "1032",
          visibility: "visible",
          overflowY: "visible",
          borderTop: "none",
          textAlign: "left",
          paddingRight: "0px",
          paddingLeft: "0",
          transform: `translate3d(${drawerWidth}px, 0, 0)`,
          ...transition
        }
      },
    logo: {
        position: "relative",
        flex: 1,
        padding: theme.spacing(2),
        zIndex: "4",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(" + hexToRgb(theme.palette.extra.grayColor) + ", 0.3)"
        }
    },
    logoGrid: {
        padding: "5px 0",
        display: "block",
    },
    logoLink: {
        ...defaultFont,
        textTransform: "uppercase",
        padding: "5px 0",
        display: "block",
        fontSize: "16px",
        textAlign: "left",
        fontWeight: "400",
        lineHeight: "30px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
            color: "#fff"
        }
    },
    logoImage: {
        width: "30px",
        maxHeight: "30px",
    },
    img: {
        width: "35px",
    },
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#fff"
        }
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
        ...defaultFont
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(" + hexToRgb(theme.palette.primary.contrastText) + ", 0.8)"
    },
    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: "#fff"
    },
    whiteFont: {
        color: "#fff"
    },
    hardBlue: {
        backgroundColor: theme.palette.primary.main,
        ...primaryBoxShadow,
        "&:hover,&:focus": {
            backgroundColor: theme.palette.primary.main,
            ...primaryBoxShadow
        }
    },
    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: "260px",
        zIndex: "4",
        overflowScrolling: "touch"
    },
    imageRoot: {
		textAlign: 'center'
    },
    image: {
		height: '100%',
		width: '100%'
    }
}))

const LogoImage = () => <SVG src="/icons/logo_white.svg" />;

function SideBar(props) {

    const classes = useStyles()

    // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  const { color, logo, image, logoText, routes } = props;


    var links = (
        <List className={classes.list}>
            {routes.map((prop, key) => {
            var listItemClasses;
            
            listItemClasses = classNames({
                [" " + classes[color]]: activeRoute(prop.layout + prop.path)
            });
            
            const whiteFontClasses = classNames({
                [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
            });
            return (
                <NavLink
                to={prop.layout + prop.path}
                className={classes.item}
                activeClassName="active"
                key={key}
                >
                <ListItem button className={classes.itemLink + listItemClasses}>
                    {typeof prop.icon === "string" ? (
                    <Icon
                        className={classNames(classes.itemIcon, whiteFontClasses)}
                    >
                        {prop.icon}
                    </Icon>
                    ) : (
                    <prop.icon
                        className={classNames(classes.itemIcon, whiteFontClasses)}
                    />
                    )}
                    <ListItemText
                    primary={prop.name}
                    className={classNames(classes.itemText, whiteFontClasses)}
                    disableTypography={true}
                    />
                </ListItem>
                </NavLink>
            );
            })}
        </List>
    );
    var appName = (
        <div className={classes.logo}>
            <Grid container wrap="nowrap"
                className={classNames(classes.logoGrid)} 
                spacing={1}>
                <LogoImage />
            </Grid>
        </div>
    );

    return (
        <div>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={"left"}
              open={props.open}
              classes={{
                paper: classNames(classes.drawerPaper)
              }}
              onClose={props.handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {appName}
              <div className={classes.sidebarWrapper}>
                {/* {<AdminNavbarLinks />} */}
                {links}
              </div>
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              anchor={"left"}
              variant="permanent"
              open
              classes={{
                paper: classNames(classes.drawerPaper)
              }}
            >
              {appName}
              <div className={classes.sidebarWrapper}>{links}</div>
			  <div className={classes.imageRoot}>
			  	<img src="/icons/fuerza.png" />
			  </div>
            </Drawer>
          </Hidden>
        </div>
      );


}

export default SideBar
