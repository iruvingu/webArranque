import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ResponsiveBar } from '@nivo/bar'
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'
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
			formControl: {
				margin: theme.spacing(1),
				minWidth: 140,
				backgroundColor: theme.palette.secondary.light,
				color: theme.palette.primary.main
			},
			paper: {
				backgroundColor: theme.palette.primary.main
			},
			formRoot: {
				textAlign: 'center'
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

		const [subdirectionId, setSubdirectionId] = React.useState('')
		const [openSub, setOpenSub] = React.useState(false);
		const [regionId, setRegionId] = React.useState('')
		const [openReg, setOpenReg] = React.useState(false);
		const [sucursalId, setSucursalId] = React.useState('')
		const [openSuc, setOpenSuc] = React.useState(false);
	
		const subdirectionChange = event => {
			setSubdirectionId(event.target.value);
		};
		const regionChange = event => {
			setRegionId(event.target.value)
		}
		const sucursalChange = event => {
			setSucursalId(event.target.value)
		}
		const handleOpen = number => {
			switch(number) {
				case 1:
					setOpenSub(true)
					break;
				case 2:
					setOpenReg(true)
					break;
				case 3:
					setOpenSuc(true)
					break;
			}
		}
		const handleClose = number => {
			switch(number) {
				case 1:
					setOpenSub(false)
					break;
				case 2:
					setOpenReg(false)
					break;
				case 3:
					setOpenSuc(false)
					break;
			}
		}


		return(
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container>
						<Grid item xs={12} sm={6} md={4}>
							<div className={classes.formRoot}>
								<FormControl variant='filled' className={classes.formControl}>
								<InputLabel id="sucursalId"><div className={classes.backG}>Subdirección</div></InputLabel>
									<Select
									labelId="sucursal"
									id="open-select-sucursal"
									open={openSub}
									onClose={() => handleClose(1)}
									onOpen={() => handleOpen(1)}
									value={subdirectionId}
									onChange={subdirectionChange}
									>
									<MenuItem value="">
											<em>None</em>
									</MenuItem>
									</Select>
								</FormControl>
							</div>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<div className={classes.formRoot}>
								<FormControl variant='filled' className={classes.formControl}>
								<InputLabel id="sucursalId"><div className={classes.backG}>Región</div></InputLabel>
									<Select
									labelId="sucursal"
									id="open-select-sucursal"
									open={openReg}
									onClose={() => handleClose(2)}
									onOpen={() => handleOpen(2)}
									value={regionId}
									onChange={regionChange}
									>
									<MenuItem value="">
											<em>None</em>
									</MenuItem>
									</Select>
								</FormControl>
							</div>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<div className={classes.formRoot}>
								<FormControl variant='filled' className={classes.formControl}>
								<InputLabel id="sucursalId"><div className={classes.backG}>Sucursal</div></InputLabel>
									<Select
									labelId="sucursal"
									id="open-select-sucursal"
									open={openSuc}
									onClose={() => handleClose(3)}
									onOpen={() => handleOpen(3)}
									value={sucursalId}
									onChange={sucursalChange}
									>
									<MenuItem value="">
											<em>None</em>
									</MenuItem>
									</Select>
								</FormControl>
							</div>
						</Grid>
					</Grid>
				</Paper>
				<div className={classes.subtitleDiv}>EPRC</div>
				<GraphicEPRC data={dataEprc}/>
				<div className={classes.subtitleDiv}>Colocacion</div>
				<GraphicColocation data={dataColocation}/>
			</div>
		)
}


export default Home