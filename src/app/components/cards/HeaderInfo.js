import React, {Component} from 'react';
import {Card, Grid, Typography} from "@material-ui/core";
import {grayColor, whiteColor} from "../../styles/material";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
        backgroundColor: "#151a30",
        padding: '20px'
    },
    mainContainer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '2px',
        width: '58px',
        height: '24px',
    },
    cardBannerTitle: {
        width: '250px',
        height: '24px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingRight: '15px',
        paddingLeft:'15px',
        paddingTop:'5px',
        paddingBottom:'5px',
        textAlign: 'center',

    },
    textWhite:{
        fontFamily: 'Roboto',
        color: theme.palette.primary.contrastText,
        fontStretch: 'normal',
        fontStyle: 'normal',
    },
    textRed:{
        fontFamily: 'Roboto',
        color: '#ef2c2c',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
    },
    textYellow:{
        fontFamily: 'Roboto',
        color:'#f5c11b',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
    },
    textGreen:{
        fontFamily: 'Roboto',
        color:'#b2b38f',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
    }

}));

const HeaderInfo = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                >

                <Typography variant='h6' className={classes.textWhite}>FISA NM - MEDIANA</Typography>
                <Card>
                    <CardHeader
                        className={classes.cardBannerTitle}
                        title={<Typography variant='subtitle1'>Días hábiles: 22 dias</Typography>} />
                </Card>

                <Card>
                    <CardHeader
                        className={classes.cardBannerTitle}
                        title={<Typography variant='subtitle1'>Días transcurridos: 10</Typography>} />

                </Card>

                <Card>
                    <CardHeader
                        className={classes.cardBannerTitle}
                        title={<Typography variant='subtitle1'>% ACELERADOR: 80%</Typography>} />
                </Card>

            </Grid>

            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center">

                <Typography variant='subtitle1' className={classes.textRed}>PREVIO: ROJO</Typography>
                <Typography variant='subtitle1' className={classes.textRed}>ACTUAL: ROJO</Typography>
                <Typography variant='subtitle1' className={classes.textYellow}>PROYECTA: AMARILLO</Typography>
                <Typography variant='subtitle1' className={classes.textWhite}>Azul-Verde: 45</Typography>
                <Typography variant='subtitle1' className={classes.textWhite}>Amarillo, Naranja, Rojo: 32</Typography>
                <Typography variant='subtitle1' className={classes.textWhite}>Sin pago: -20</Typography>
                <Typography variant='subtitle1' className={classes.textWhite}>Total nuevos: 57</Typography>
                <Typography variant='subtitle1' className={classes.textGreen}>RIESGO BAJO</Typography>

            </Grid>

        </div>
    );
};

export default HeaderInfo;