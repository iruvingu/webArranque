import React from 'react';
import {makeStyles} from "@material-ui/core";
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
    textCenter:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        textAlign: 'center',
    },
    textLeft:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        textAlign: 'start',
    },
    textRight:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        textAlign: 'end',
    }

})
);

const HeaderInfoManager = ({ branchName }) => {
    const classes = useStyles()
    return (
        <div className={classes.subtitleDiv}>
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center">
                <Grid item xs={4}>
                    <div className={classes.textLeft}>SUC: {branchName}</div>
                </Grid>

                <Grid item xs={4}>
                    <div className={classes.textCenter}>GERENTE: ENRIQUE SANGENIS</div>
                </Grid>

                <Grid item xs={4}>
                    <div className={classes.textRight}>ANTIGUEDAD: 7 MESES</div>
                </Grid>

            </Grid>
        </div>
    );
};

export default HeaderInfoManager;