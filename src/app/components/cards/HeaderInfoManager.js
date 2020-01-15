import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    subtitleDiv: {
        with: "100%",
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingLeft:'30px',
        paddingRight:'30px'
    },
})
);

const HeaderInfoManager = ({ branchName, managerName, timeDue }) => {
    const classes = useStyles()
    return (
        <div className={classes.subtitleDiv}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant='h6' >SUC: {branchName}</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant='h6' >GERENTE: {(managerName) ? managerName : "No disponible"}</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant='h6' >ANTIGUEDAD: {(timeDue) ? timeDue : "No disponible"}</Typography>
                </Grid>

            </Grid>
        </div>
    );
};

export default HeaderInfoManager;