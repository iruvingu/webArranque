import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import NavBar from './NavBar'
import Sidebar from './Sidebar'

import routes from '../routes'

import {
    drawerWidth,
    transition,
    container
  } from "../styles/material";

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
    },
    content: {
        backgroundColor: theme.palette.extra.backWhite,
        marginTop: "70px",
        padding: "20px 10px",
        minHeight: "calc(100vh - 123px)"
    },
    container,
}))

let perfectScroll;

function filterRoutes(rutas){
    return rutas.filter(ruta => ruta.enable === true)
}

const switchRoutes = (
    <Switch>
      {filterRoutes(routes).map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/home" />
    </Switch>
  );

function Admin(props, { ...rest }) {

    const classes = useStyles();

    console.log(props.firestore)

    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    const [color, setColor] = React.useState("hardBlue");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };

    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            perfectScroll = new PerfectScrollbar(mainPanel.current, {
            suppressScrollX: true,
            suppressScrollY: false
        });
        document.body.style.overflow = "hidden";
        }
        window.addEventListener("resize", resizeFunction);
        // Specify how to clean up after this effect:
        return function cleanup() {
        if (navigator.platform.indexOf("Win") > -1) {
            perfectScroll.destroy();
        }
        window.removeEventListener("resize", resizeFunction);
        };
    }, [mainPanel]);

    return(
        <div className={classes.wrapper}>
            <Sidebar
                routes={filterRoutes(routes)}
                logoText={"Arranque Imparable"}
                logo={"/logo512.png"}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
            />
            <div className={classes.mainPanel} ref={mainPanel}>
                <NavBar
                    routes={filterRoutes(routes)}
                    handleDrawerToggle={handleDrawerToggle}
                    {...rest}
                />
                <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                </div>
            </div>
        </div>
    )
}

export default firestoreConnect()(Admin)