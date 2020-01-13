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
import TCard from '../../components/cards/TimCard'
import TCardHeader from '../../components/cards/TimCardHeader'
import TCardBody from '../../components/cards/TimCardContent'
import { whiteColor, grayColor } from '../../styles/material'
import Table from '../../components/tables/Table'
import HeaderInfoManager from "../../components/cards/HeaderInfoManager";
import HeaderInfo from "../../components/cards/HeaderInfo";

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
        margin: theme.spacing(2)
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
    specialCard: {
        margin: theme.spacing(1),
        height: "auto",
    }
}))



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
            <HeaderInfoManager/>

            <HeaderInfo/>

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
                                    ["Colocación Total", "80%", "80%", "80%"],
                                    ["Nuevos", "80%", "80%", ""],
                                    ["Cobranza (EPRC)", "80%", "80%", ""],
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
                                    ["Octubre", "$11,500,000", "$300,000"],
                                    ["Noviembre", "$11,900,000", "$400,000"],
                                    ["Diciembre", "$12,000,000", "$100,000"],
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
                                    ["Diciembre", "1,000", "-50"],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    
                </div>
                
                        
            </GridList>

            {/* <div>
                <Grid container xs={12}>
                    <Grid item>
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
                    </Grid>
                </Grid>
            </div> */}
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
                                    ["Crédito", "", ""],
                                    ["Promoción", "", ""],
                                    ["Cobranza", "", ""],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    </div>
                    <div className={classes.specialCard}>
                        <TCard>
                            <TCardHeader color="primary">
                                <h4 className={classes.cardTitleWhite} >CAMPAÑAS</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Campañas", "Solicitudes", "Convertidos", "% Conversión"]}
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
                                <h4 className={classes.cardTitleWhite} >FINDEP MÓVIL</h4>
                            </TCardHeader>
                            <TCardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Ejecutivos", "Findep Móvil"]}
                                    tableData={[
                                    ["Promoción Activos", "4"],
                                    ["Creditos Activos", "3"],
                                    ["Promoción", "7"],
                                    ["Solicitud", "3"],
                                    ["Solicitudes/Promociones", "0.4"],
                                    ]}
                                />
                            </TCardBody>
                        </TCard>
                    </div>
                </GridList>
            

            {
                    /**
                     * <Grid 
            container
            direction="row"
            justify="space-evenly"
            alignItems="start">

                <Grid>
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
                        ]}/>
                    </TCardBody>
                </TCard>

                </Grid>
                
                <Grid>
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
                        ]}/>
                    </TCardBody>
                </TCard>
                </Grid>

                <Grid>
                <TCard>
                    <TCardHeader color="primary">
                        <h4 className={classes.cardTitleWhite} >FINDEP MOVIL</h4>
                    </TCardHeader>
                    <TCardBody>
                        <Table
                        tableHeaderColor="primary"
                        tableHead={["Ejecutivos", "Findeo Movil"]}
                        tableData={[
                            ["Promocion activos", "4"],
                            ["Creditos Activos", "3"],
                            ["Promocion", "7"],
                            ["Solicitud", "3"],
                            ["Solicitud/Promocion", "0.4"],
                        ]}/>
                    </TCardBody>
                </TCard>
                </Grid>
            
            </Grid>
                     */
            }




            {
                            /*
                            
            
                            */
                        }








        </div>
    )
}

export default QuickStart
