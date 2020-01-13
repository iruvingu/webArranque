import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
import Spinner from '../../components/spinner/Spinner'
import QuickStartCard from '../../components/cards/QuickStartCard'
import TCard from '../../components/cards/TimCard'
import TCardHeader from '../../components/cards/TimCardHeader'
import TCardBody from '../../components/cards/TimCardContent'
import { whiteColor, grayColor } from '../../styles/material'
import Table from '../../components/tables/Table'

import classNames from 'classnames'

const tileData = [
    {
      id: 1,
      title: "CUBETA 0-14",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 2,
      title: "CUBETA 15-29",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 3,
      title: "RESOLUCIÓN 15-29",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 4,
      title: "CUBETA 30-59",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
        id: 5,
        title: "EPRC",
        meta: "$9,390,016",
        proyection: "$5,323,103",
        percentProy: "56.7%",
        difference: "$456,789",
        dailyDifference: "$203,456",
        factor: "-239.0%"
      }
  ];


  const tileData2 = [
    {
      id: 1,
      title: "CUBETA 0-14",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: ""
    },
    {
      id: 2,
      title: "CUBETA 15-29",
      meta: "$9,390,016",
      proyection: null,
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 3,
      title: "RESOLUCIÓN 15-29",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
    {
      id: 4,
      title: "CUBETA 30-59",
      meta: "$9,390,016",
      proyection: "$5,323,103",
      percentProy: "56.7%",
      difference: "$456,789",
      dailyDifference: "$203,456",
      factor: "-239.0%"
    },
  ];

const estatus = [
    {
        id: 1,
        title: "INDICADORES",
        row00: "colcacion total",
        row01: "nuevos",
        row02: "cobranza (eprc)",
        real0: "80%",
        proy0: "85%",
        rank0: "80%",
        real1: "80%",
        proy1: "85%",
        rank1: "80%",
        real2: "80%",
        proy2: "85%",
        rank2: "80%"
    },
    {
        id: 2,
        title: "PORTAFOLIO",
        row00: "colcacion total",
        row01: "nuevos",
        row02: "cobranza (eprc)",
        real0: "80%",
        proy0: "85%",
        rank0: "80%",
        real1: "80%",
        proy1: "85%",
        rank1: "80%",
        real2: "80%",
        proy2: "85%",
        rank2: "80%"
    },
    {
        id: 1,
        title: "VARIACION",
        row00: "colcacion total",
        row01: "nuevos",
        row02: "cobranza (eprc)",
        real0: "80%",
        proy0: "85%",
        rank0: "80%",
        real1: "80%",
        proy1: "85%",
        rank1: "80%",
        real2: "80%",
        proy2: "85%",
        rank2: "80%"
    }
]

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    backG: {
        color: theme.palette.primary.main
    },
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
        padding: '2px'
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
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main
    },
    singleLineGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: 'unset',
        marginRight: '5px'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    cardsHeader: {
        width: '58px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        color: theme.palette.primary.main,
        margin: theme.spacing(1)
    },
    subtitleDiv: {
        with: "100%",
        backgroundColor: theme.palette.secondary.light,
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: theme.palette.primary.main,
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    estatusCards: {
        margin: theme.spacing(1),
        with: '100%',
        height: '350px'
    },
    cardTitleWhite: {
        textAlign: 'center',
        color: whiteColor,
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "bold",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "1px",
        textDecoration: "none",
        "& small": {
          color: grayColor[1],
          fontWeight: "400",
          lineHeight: "1"
        }
    },
    estatusGrid: {
        width: '100%',
        height: 'inherit',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginRight: '5px'
    },
    specialCard: {
        margin: theme.spacing(1),
        with: '400px',
        height: 'auto',
    },
    spinner: {
        with: "100%",
        height: "100%",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center'
    }
}))

function QuickStart({ sucursales }){

    const classes = useStyles()

    const [sucursalId, setSucursalId] = React.useState('')
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setSucursalId(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    function filterSucursales(values) {
        return values.filter(value => value.info !== "")
    }

    let bannerCardTitle1 = `7 meses`
    let bannerCardTitle2 = '22'
    let bannerCardTitle3 = '10' 

    return((!sucursales)
        ?   <div className={classes.spinner}><Spinner /></div>  
    :   <div className={classes.root}>
            <div>
                    <FormControl variant='filled' className={classes.formControl}>
                        <InputLabel id="sucursalId"><div className={classes.backG}>Sucursal</div></InputLabel>
                        <Select
                        labelId="sucursal"
                        id="open-select-sucursal"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={sucursalId}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            sucursales
                                .map(sucursal => {
                                     return (sucursal.Info)
                                        ?   <MenuItem value={sucursal.id}>{sucursal.Info.nombreSucursal}</MenuItem>
                                        :   null
                                })
                        }
                        </Select>
                    </FormControl>
                </div>
            <Paper className={classes.bannerPaper}>
                <Grid container xs={12} spacing={1} column>
                    <Grid container xs={12} spacing={1}>
                        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6'><div style={{color: "#fff"}}>FISA NM - MEDIANA</div></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días Hábiles: 22</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días transcurridos: 10</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>% ACELERADOR: 80%</Paper>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={1}>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Previo: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Actual: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Proyecta: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Azul-Verde: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Amarillo,Verde,Rojo: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Sin Pago: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Total nuevos: </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <div style={{color: "#fff"}}>Riesgo: Bajo</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <div className={classes.subtitleDiv}>ESTATUS</div>
            <div className={classes.estatusCards}>
                <div className={classes.estatusGrid}>
                    <GridList className={classes.gridList} cols={2.5}>
                        <div className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >INDICADORES</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Indicador", "Real", "Proyección", "Rank Nal"]}
                                        tableData={[
                                        ["Colocación Total", "80%", "80%", "80%"],
                                        ["Nuevos", "80%", "80%", ""],
                                        ["Cobranza (EPRC)", "80%", "80%", ""],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                        <div  className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >PORTAFOLIO</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Mes", "Total", "Crecimiento"]}
                                        tableData={[
                                        ["Octubre", "$11,500,000", "$300,000"],
                                        ["Noviembre", "$11,500,000", "$300,000"],
                                        ["Diciembre", "$12,500,000", "$300,000"],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                        <div className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >VARIACIÓN</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Mes", "Clientes", "Variación"]}
                                        tableData={[
                                        ["Octubre", "990", "10"],
                                        ["Noviembre", "1,050", "60"],
                                        ["Diciembre", "1,000", "50"],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                    </GridList>
                </div>
            </div>
            <div className={classes.subtitleDiv}>FINANCIEROS</div>
            <div className={classes.cardsHeader}>
                Banner
            </div>
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
                            factor={tile.factor} />      
                    ))}
                </GridList>
            </div>
            <div className={classes.cardsHeader}>
                Colocación
            </div>
            <div>
                <div className={classes.singleLineGrid}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData2.map(tile => (
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
            <div className={classes.cardsHeader}>
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
            <div className={classes.subtitleDiv}>INDICADORES DE GESTIÓN</div>
            <div className={classes.estatusCards}>
                <div className={classes.estatusGrid}>
                    <GridList className={classes.gridList} cols={2.5}>
                        <div className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >PLANTILLAS</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Ejecutivos", "Autorizado", "Activo"]}
                                        tableData={[
                                        ["Credito", "80%", "80%"],
                                        ["Promoción", "80%", "80%"],
                                        ["Cobranza", "80%", "80%"],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                        <div  className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >CAMPAÑAS</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Campaña", "Solicitudes", "Convertidos", "%Conversión"]}
                                        tableData={[
                                        ["Landing", "5", "3", "50.0%"],
                                        ["Findep Móvil", "30", "2", "6.7%"],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                        <div className={classes.specialCard}>
                            <TCard>
                                <TCardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite} >FINDEP MOVIL</h4>
                                </TCardHeader>
                                <TCardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={["Ejecutivos", "Findep Móvil"]}
                                        tableData={[
                                        ["Promoción activos", "4"],
                                        ["Créditos activos", "3"],
                                        ["Promoción", "7"],
                                        ["Solicitud", "3"],
                                        ["Solicitudes/Promoción", "7"],
                                        ]}
                                    />
                                </TCardBody>
                            </TCard>
                        </div>
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default compose(
    firestoreConnect([
        {
            collection: 'app_indicadores',
            doc: 'FINDEP',
            subcollections: [{ collection: 'indicadores_sucursal' }],
            storeAs: 'sucursales'
        }
    ]),
    connect((state, props) => ({
        sucursales: state.firestore.ordered.sucursales
    }))
)(QuickStart)
