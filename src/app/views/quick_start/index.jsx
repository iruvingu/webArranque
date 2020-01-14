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
import HeaderInfoManager from "../../components/cards/HeaderInfoManager";
import HeaderInfo from "../../components/cards/HeaderInfo";

import classNames from 'classnames'

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
    gridItemMargin: {
        marginTop: theme.spacing(1)
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
    gridListProbe: {
        flexWrap: 'nowrap',
        minHeight:'420px',
        height:'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListStatus: {
        flexWrap: 'nowrap',
        minHeight:'320px',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListTile: {
        width: "45%",
        height: "unset",
    },
    cardsHeader: {

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
        height: "auto",
        width: '400px',
        height: 'auto',
        minWidth: '350px'
    },
    spinner: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center'
    }
}))

function QuickStart({ branchSelected }){

    const classes = useStyles()

    function filterSucursales(values) {
        return values.filter(value => value.info !== "")
    }

    let bannerCardTitle1 = `7 meses`
    let bannerCardTitle2 = '22'
    let bannerCardTitle3 = '10' 

    console.log(branchSelected)

    return(
        (!branchSelected)
        ?   <div className={classes.spinner}><Spinner /></div>  
    :   <div className={classes.root}>
        <HeaderInfoManager branchName={branchSelected[0].Info.nombreSucursal} />
            <Paper className={classes.bannerPaper}>
                <Grid container xs={12} >
                    <Grid container xs={12} spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6'><div style={{color: "#fff"}}>FISA NM - MEDIANA</div></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días Hábiles: {branchSelected[0].cards.General.work_days}</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>Días transcurridos: {branchSelected[0].cards.General.elapsed_days}</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className={classes.paper2}>% ACELERADOR: {branchSelected[0].cards.General.ascelerador}%</Paper>
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItemMargin} container xs={12} spacing={1}>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>PREVIO: {branchSelected[0].cards.General.color_prev}</div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>ACTUAL: {branchSelected[0].cards.General.color_today} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>PROYECTA: {branchSelected[0].cards.General.color_proy} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>Azul-Verde: {branchSelected[0].cards.General.blue_green} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>Amarillo,Verde,Rojo: {branchSelected[0].cards.General.orange_red} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>Sin Pago: {branchSelected[0].cards.General.without_pay} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>Total nuevos: {branchSelected[0].cards.General.total} </div>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <div style={{color: "#fff"}}>Riesgo: {branchSelected[0].cards.General.risk_points}</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <div className={classes.subtitleDiv}>ESTATUS</div>
            <GridList className={classes.gridListStatus} cols={2.5}>
                <div className={classes.specialCard}>
                <TCard>
                            <TCardHeader color="primary">
                                <h4 className={classes.cardTitleWhite} >INDICADORES</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Indicador", "Real", "Proyección", "Rank Nal."]}
                                    tableData={[
                                    ["Colocación Total", branchSelected[0].cards.General.col_total_real, branchSelected[0].cards.General.col_total_proy, branchSelected[0].cards.General.total_rank],
                                    ["Nuevos", branchSelected[0].cards.General.new_real, branchSelected[0].cards.General.new_proy, branchSelected[0].cards.General.new_rank],
                                    ["Cobranza (EPRC)", branchSelected[0].cards.General.cob_real, branchSelected[0].cards.General.cob_proy, branchSelected[0].cards.General.eprc_rank],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>

                </div>

                <div className={classes.specialCard}>

                <TCard>
                            <TCardHeader color="primary">
                                <h4 className={classes.cardTitleWhite} >PORTAFOLIO</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Mes", "Total", "Crecimiento"]}
                                    tableData={[
                                    ["Octubre", branchSelected[0].cards.General.current_month, branchSelected[0].cards.General.current_variation],
                                    ["Noviembre", branchSelected[0].cards.General.past_month, branchSelected[0].cards.General.past_variation],
                                    ["Diciembre", branchSelected[0].cards.General.two_past_month, branchSelected[0].cards.General.two_past_variation],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>

                </div>

                <div className={classes.specialCard}>

                <TCard>
                            <TCardHeader color="primary">
                                <h4 className={classes.cardTitleWhite} >VARIACION</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Mes", "Clientes", "Variacion"]}
                                    tableData={[
                                    ["Octubre", branchSelected[0].cards.General.past_clients, branchSelected[0].cards.General.current_variation_clients],
                                    ["Noviembre",branchSelected[0].cards.General.current_clients, branchSelected[0].cards.General.past_variation_clients],
                                    ["Diciembre", branchSelected[0].cards.General.two_past_clients, branchSelected[0].cards.General.two_past_variation_clients],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    
                </div>
                
                        
            </GridList>
            <div className={classes.subtitleDiv}>FINANCIEROS</div>
            <div className={classes.cardsHeader}>
                Banner
            </div>
            <div className={classes.singleLineGrid}>
                <GridList className={classes.gridList} cols={2.5}>
                    {Object.values(branchSelected[0].cards.Banner).map((card, index) => (
                            <QuickStartCard
                            id={index}
                            title={Object.keys(branchSelected[0].cards.Banner)[index]}
                            meta={card.goal}
                            proyection={card.proy}
                            percentProy={card.advance_proy}
                            difference={card.dif}
                            dailyDifference={card.daili_dif}
                            factor={card.factor} />      
                    ))}
                </GridList>
            </div>
            <div className={classes.cardsHeader}>
                Colocación
            </div>
            <div>
                <div className={classes.singleLineGrid}>
                    <GridList className={classes.gridList} cols={2.5}>
                        {Object.values(branchSelected[0].cards.Colocacion).map((card, index) => (
                            <QuickStartCard
                            id={index}
                            title={Object.keys(branchSelected[0].cards.Colocacion)[index]}
                            meta={card.goal}
                            proyection={card.proy}
                            percentProy={card.advance_proy}
                            real={card.real}
                            factorRealMoney={card.factor} />      
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
                    {Object.values(branchSelected[0].cards.Cobranza).map((card, index) => (
                            <QuickStartCard
                            id={index}
                            title={Object.keys(branchSelected[0].cards.Cobranza)[index]}
                            meta={card.goal}
                            proyection={card.proy}
                            cumpProy={card.advance_proy}
                            advanceVsMeta={card.advance}
                            real={card.real}
                            factorProyMoney={card.factor} />      
                    ))}
                    </GridList>
                </div>
            </div>




            <div className={classes.subtitleDiv}>INDICADORES DE GESTIÓN</div>
            <GridList className={classes.gridListProbe} cols={2.5}>
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
                                    ["Credito", "", ""],
                                    ["Promocion", "", ""],
                                    ["Cobranza", "", ""],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    </div>
                    <div className={classes.specialCard}>
                        <TCard>
                            <TCardHeader color="primary">
                                <h4 className={classes.cardTitleWhite} >CAMPANAS</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Campanas", "Solicitudes", "Convertidos", "% Conversion"]}
                                    tableData={[
                                    ["Landing", "5", "3", "50.0%"],
                                    ["Findep Movil", "30", "2", "6.7%"],
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
                                    tableHead={["Ejecutivos", "Findep Movil"]}
                                    tableData={[
                                    ["Promociom Activos", "4"],
                                    ["Creditos Activos", "3"],
                                    ["Promocion", "7"],
                                    ["Solicitud", "3"],
                                    ["Solicitudes/Promociones", "0.4"],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    </div>
                </GridList>
        </div>
    )
}

export default connect((state, props) => ({
        branchSelected: state.branchSelected.branchOffice
    }))(QuickStart)
