import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// components
import QuickStartCard from '../../components/cards/QuickStartCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    bannerPaper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.light
    },
    grid: {
        padding: theme.spacing(2),
    },
    redColor: {
        color: theme.palette.error.main
    },
    bannerCard: {
        width: "100%"
    },
    cardBannerTitle: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    cardBannerContent: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: '14px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 140,
    },
    singleLineGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: 310
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}))

const tileData = [
    {
      id: 1,
      title: "Titulo1",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 2,
      title: "Titulo1",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 3,
      title: "Titulo1",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 4,
      title: "Titulo1",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    }
  ];

function QuickStart(){

    const classes = useStyles()

    const [sucursal, setSucursal] = React.useState('')
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setSucursal(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    let bannerCardTitle1 = `7 meses`
    let bannerCardTitle2 = '22'
    let bannerCardTitle3 = '10' 

    return(
        <div className={classes.root}>
            <Paper className={classes.bannerPaper}>
                <Grid container xs={12} column>
                    <Grid container xs={12} direction="row" justify="flex-start" alignItems="center" spacing={2}>
                        <Grid item><Typography variant='h6' color='primary'>FISA NM - MEDIANA</Typography></Grid>
                        <Grid item><Typography>COLOR:</Typography></Grid>
                        <Grid item><Typography className={classes.redColor} >ROJO</Typography></Grid>
                    </Grid>
                    <Grid className={classes.grid} container xs={12} justify="space-between" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.bannerCard}>
                                <CardHeader
                                    className={classes.cardBannerTitle}
                                    title={<Typography variant='subtitle1'>Antigüedad: ${bannerCardTitle1}</Typography>} />
                                <CardContent
                                    className={classes.cardBannerContent}>
                                    <Typography variant='button'>COLOCACIÓN: 80%</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.bannerCard}>
                            <CardHeader
                                    className={classes.cardBannerTitle}
                                    title={<Typography variant='subtitle1'>Días Hábiles: ${bannerCardTitle2}</Typography>} />
                                <CardContent
                                    className={classes.cardBannerContent}>
                                    <Typography variant='button'>eprc: 80%</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.bannerCard}>
                            <CardHeader
                                    className={classes.cardBannerTitle}
                                    title={<Typography variant='subtitle1'>Días transcurridos: ${bannerCardTitle3}</Typography>} />
                                <CardContent
                                    className={classes.cardBannerContent}>
                                    <Typography variant='button'>%cálidad: 80%</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <div>
                <FormControl variant='filled' className={classes.formControl}>
                    <InputLabel id="sucursal">Sucursal</InputLabel>
                    <Select
                    labelId="sucursal"
                    id="open-select-sucursal"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sucursal}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Toluca</MenuItem>
                    <MenuItem value={20}>Xalapa</MenuItem>
                    <MenuItem value={30}>Lazaro Cardenas</MenuItem>
                    <MenuItem value={30}>San Cristobal de las casas</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                Banner
            </div>
            <div>
                <div className={classes.singleLineGrid}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <QuickStartCard
                        id={tile.id}
                        title={tile.title}
                        meta={tile.meta}
                        proyection={tile.proyection}
                        percentProy={tile.percentProy}
                        difference={tile.difference}
                        dailyDifference={tile.dailyDifference}
                        factor={tile.factor}
                    />
                        
                    ))}
                    </GridList>
                </div>
            </div>
            <div>
                Colocación
            </div>
            <div>
                <div className={classes.singleLineGrid}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <QuickStartCard
                        id={tile.id}
                        title={tile.title}
                        meta={tile.meta}
                        proyection={tile.proyection}
                        percentProy={tile.percentProy}
                        difference={tile.difference}
                        dailyDifference={tile.dailyDifference}
                        factor={tile.factor}
                    />
                        
                    ))}
                    </GridList>
                </div>
            </div>
            <div>
                Cobranza
            </div>
            <div>
                <div className={classes.singleLineGrid}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <QuickStartCard
                        id={tile.id}
                        title={tile.title}
                        meta={tile.meta}
                        proyection={tile.proyection}
                        percentProy={tile.percentProy}
                        difference={tile.difference}
                        dailyDifference={tile.dailyDifference}
                        factor={tile.factor}
                    />
                        
                    ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default QuickStart
