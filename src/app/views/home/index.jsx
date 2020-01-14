import React, { useState, useEffect } from 'react';
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
import Spinner from '../../components/spinner/Spinner'

/**
 * actions
 */
import { Creators } from '../../../redux/ducks/branchSelected'

	const useStyles = makeStyles(theme => ({
			root: {
				flexGrow: 1,
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
		},
		charts:{
			height: '400px'
		}
	}))

function Home({ subdirections, regions, branches, selectBranchOffice, branchSelected }) {

		const classes = useStyles()

		const [subdirectionId, setSubdirectionId] = useState('')
		const [openSub, setOpenSub] = useState(false);
		const [regionId, setRegionId] = useState('')
		const [openReg, setOpenReg] = useState(false);
		const [sucursalId, setSucursalId] = useState('')
		const [openSuc, setOpenSuc] = useState(false);
	
		const subdirectionChange = event => {
			setSubdirectionId(event.target.value);
		};
		const regionChange = event => {
			setRegionId(event.target.value)
		}
		const sucursalChange = event => {
			let value = event.target.value;
			setSucursalId(value)

			if(value) {
				let selectedBranch = branches.filter(branch => branch.id === value)

				// select sucursal
				selectBranchOffice(selectedBranch)
			}
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
			{
				(!subdirections) && (!regions) && (!branches) ? <div><Spinner /></div>
				:	<div>
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
									{
										subdirections.map(it => {
											return (it.subdireccion)
												?	<MenuItem value={it.id}>{it.nombre_subdireccion}</MenuItem>
												:	null
										})
									}
									</Select>
								</FormControl>
							</div>
						</Grid>
						{
							(subdirectionId)
							?	<Grid item xs={12} sm={6} md={4}>
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
											{
												regions
													.map(it => {
														if(it.subdireccion == subdirectionId) {
															return <MenuItem value={it.region}>{it.nombre_region}</MenuItem>
														} else{
															return null
														}
												})
											}
											</Select>
										</FormControl>
									</div>
								</Grid>
							:	null
						}
						{
							(regionId)
							?	<Grid item xs={12} sm={6} md={4}>
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
											{
												branches.filter(branch => (branch.Info.sucursal !== 0) && (branch.Info.region === regionId) )
													.map(sucursal => {
														return (sucursal.Info)
														   ?   <MenuItem value={sucursal.id}>{sucursal.Info.nombreSucursal}</MenuItem>
														   :   null
												   })
											}
											</Select>
										</FormControl>
									</div>
								</Grid>
							:	null
						}
					</Grid>
				</Paper>
				{
					(!branchSelected)
					?	null
					:	<div>
							<div className={classes.subtitleDiv}>EPRC</div>
							<div className={classes.charts}>
								<GraphicEPRC sucursalId={branchSelected[0].id} />
							</div>
							<div className={classes.subtitleDiv}>Colocacion</div>
							<div className={classes.charts}>
								<GraphicColocation sucursalId={branchSelected[0].id} />
							</div>
					</div>
					
				}
				
				</div>
			}

		</div>
	)
}

const mapDispatchToProps = {
	selectBranchOffice: Creators.selectBranchOffice
}

export default compose(
	firestoreConnect([
        {
            collection: 'app_catalogo_subdirecciones',
            storeAs: 'subdirections'
		},
		{
			collection: 'app_catalogo_regiones',
			storeAs: 'regions'
		},
		{
            collection: 'app_indicadores',
            doc: 'FINDEP',
            subcollections: [{ collection: 'indicadores_sucursal' }],
            storeAs: 'branchOffices'
        }
    ]),
    connect((state, props) => ({
		subdirections: state.firestore.ordered.subdirections,
		regions: state.firestore.ordered.regions,
		branches: state.firestore.ordered.branchOffices,
		branchSelected: state.branchSelected.branchOffice
	}), mapDispatchToProps)
)(Home)