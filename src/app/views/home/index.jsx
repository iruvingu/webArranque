import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { makeStyles } from "@material-ui/core/styles";
import GraphicEPRC from '../../components/ graphics/GraphicEPRC';
import GraphicColocation from '../../components/ graphics/GraphicColocation';
import SingleSelector from '../../components/spinner/SingleSelector';
import GroupSelector from '../../components/spinner/GroupSelector';
import HeaderInfo from "../../components/cards/HeaderInfo";

const dataEprc = [
    {
      "day": "1",
      "proyeccion": 460000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "2",
      "proyeccion": 200000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "3",
      "proyeccion": 300000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "4",
      "proyeccion": 250000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "5",
      "proyeccion": 450000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "6",
      "proyeccion": 523000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "7",
      "proyeccion": 140048,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "8",
        "proyeccion": 148000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "9",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "10",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "11",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "12",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "13",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "14",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "15",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "16",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "17",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "18",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "19",
        "proyeccion": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "20",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "21",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "22",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "23",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "24",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "25",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "26",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "27",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "28",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "29",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "30",
        "proyeccion": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    }
  ]

  const dataColocation = [
    {
      day: '1',
      formers: 145,
      revolventes: 86,
      renovaciones: 130,
      nuevos: 90,
      fries: 69,
      donut: 27,
    },
    {
      day: '2',
      formers: 24,
      revolventes: 105,
      renovaciones: 14,
      nuevos: 100,
      fries: 70,
      donut: 28,
    },
    {
      day: '3',
      formers: 17,
      revolventes: 9,
      renovaciones: 138,
      nuevos: 52,
      fries: 114,
      donut: 181,
    },
    {
      day: '4',
      formers: 170,
      revolventes: 49,
      renovaciones: 29,
      nuevos: 132,
      fries: 29,
      donut: 175,
    },
    {
      day: '5',
      formers: 126,
      revolventes: 189,
      renovaciones: 65,
      nuevos: 74,
      fries: 21,
      donut: 85,
    },
    {
      day: '6',
      formers: 186,
      revolventes: 115,
      renovaciones: 161,
      nuevos: 191,
      fries: 71,
      donut: 53,
    },
    {
      day: '7',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '8',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '9',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '10',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '11',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '12',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '13',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '14',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '15',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '16',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '17',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '18',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '19',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '20',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '21',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '22',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '23',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '24',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '25',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '26',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '27',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '28',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '29',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    },
    {
      day: '30',
      formers: 141,
      revolventes: 90,
      renovaciones: 148,
      nuevos: 179,
      fries: 72,
      donut: 35,
    }
  ]

  const useStyles = makeStyles(theme => ({
      root: {
          width: 'auto',
          height: '400px'
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
    }
  }))

function Home() {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <GroupSelector/>
            <div className={classes.subtitleDiv}>EPRC</div>
            <GraphicEPRC data={dataEprc}/>
            <div className={classes.subtitleDiv}>Colocacion</div>
            <GraphicColocation data={dataColocation}/>
        </div>
    )
}

export default Home