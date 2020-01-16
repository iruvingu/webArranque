import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    bannerPaper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: theme.palette.primary.dark
    },
    paper2: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    gridItemMargin: {
        marginTop: theme.spacing(1)
    },
    ROJO: {
        color: theme.palette.colorIndicator.red
    },
    AMARILLO: {
        color: theme.palette.colorIndicator.yellow
    },
    VERDE: {
        color: theme.palette.colorIndicator.green
    },
    AZUL: {
        color: theme.palette.colorIndicator.blue
    },
    GRAY: {
        color: theme.palette.colorIndicator.gray
    },
    WHITE: {
        color: theme.palette.primary.contrastText
    }
}))

export default function SubHeader({ General }){

    const [noUnable, setNoUnable] = useState("No disponible")

    const { tipo_sucursal, work_days, elapsed_days, ascelerador, color_prev, color_proy, color_today, blue_green, 
        orange_red, without_pay, total, risk_points } = General
    
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.bannerPaper}>
                <Grid container xs={12} >
                    <Grid container xs={12} spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'><div style={{color: "#fff"}}>{(tipo_sucursal) ? tipo_sucursal : noUnable}</div></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días Hábiles: {(work_days) ? work_days : noUnable}</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días transcurridos: {(elapsed_days) ? elapsed_days : noUnable }</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>ACELERADOR: {(ascelerador) ? ascelerador : noUnable}</Paper>
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItemMargin} container xs={12} spacing={1}>
                        {
                            (color_prev) 
                            ?   <Grid item xs={6} sm={2} md={2}>
                                <Typography><div className={classes[color_prev]}>PREVIO: {color_prev}</div></Typography>
                            </Grid>
                            :   null
                        }
                        {
                            (color_today)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                    <Typography>
                                        <div className={classes[color_today]}>ACTUAL: {(color_today)} </div>
                                    </Typography>
                                </Grid>
                            :   null
                        }
                        
                        {
                            (color_proy)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                    <Typography>
                                        <div className={classes[color_proy]}>PROYECTA: {(color_proy)} </div>
                                    </Typography>
                            </Grid>
                            :   null
                        }
                        
                        {
                            (blue_green)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                    <Typography>
                                        <div className={classes.WHITE}>Azul-Verde: {(blue_green) ? blue_green : noUnable} </div>  
                                    </Typography>
                                </Grid>
                            :   null
                        }
                        
                        {
                            (orange_red)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                    <Typography>
                                        <div className={classes.WHITE}>Amarillo,Naranja,Rojo: {(orange_red)} </div>   
                                    </Typography>
                                </Grid>
                            :   null
                        }
                        
                        {
                            (without_pay)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                    <Typography>
                                        <div className={classes.WHITE}>Sin Pago: {(without_pay)} </div>            
                                    </Typography>
                                </Grid>
                            :   null
                        }
                        
                        {
                            (total)
                            ?<Grid item xs={6} sm={2} md={2}>
                                <Typography>
                                    <div className={classes.WHITE}>Total nuevos: {(total) ? total : noUnable} </div> 
                                </Typography>
                            </Grid>
                            :   null
                        }
                        
                        {
                            (risk_points)
                            ?   <Grid item xs={6} sm={2} md={2}>
                                <Typography>
                                    <div className={classes.WHITE}>Riesgo: {(risk_points) ? risk_points : noUnable}</div>
                                </Typography>
                                </Grid>
                            :   null
                        }
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
        
    )

}