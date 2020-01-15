import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GraphicColocation = ({ sucursalId, colocationChartData}) => {

	const [value, setValue] = useState(0)
	const [value2, setValue2] = useState(0)

	useEffect(() => {
		if(colocationChartData){
			setValue(Object.values(colocationChartData)[0].meta_monto_total)
			setValue2(Object.values(colocationChartData)[0].meta_dia_monto_total)
			//console.log(Object.values(colocationChartData)[0].meta_monto_total)
		}
	})

	return (!colocationChartData)
	?	null
	:
		(
		<ResponsiveBar
		data={Object.values(colocationChartData)}
		keys={['monto_revolvencia', 'monto_total_nuevos', 'monto_total_renovados']}
		indexBy="Dia"
		groupMode="grouped"
		maxValue={1000000}
		margin={{ top: 50, right: 10, bottom: 50, left: 70 }}
		padding={0.2}
		colors={{ scheme: 'category10' }}
		enableLabel={false}
		markers={[
				{
					axis: 'y',
					value: value,
					lineStyle: { stroke: '#191461', strokeWidth: 2 },
					legend: 'Meta Monto Total',
					legendOrientation: 'horizontal',
				},{
					axis: 'y',
					value: value2,
					lineStyle: { stroke: '#191461', strokeWidth: 2 },
					legend: 'Meta Dia',
					legendOrientation: 'horizontal',
				}
		]}
		defs={[
			{
				id: 'dots',
				type: 'patternDots',
				background: '#ffffff',
				color: '#38bcb2',
				size: 4,
				padding: 1,
				stagger: true
			},
			{
				id: 'lines',
				type: 'patternLines',
				background: 'inherit',
				color: '#eed312',
				rotation: -45,
				lineWidth: 6,
				spacing: 10
			}
		]}
		fill={[
			{
				match: {
					id: 'burger'
				},
				id: 'dots'
			},
			{
				match: {
					id: 'kebab'
				},
				id: 'lines'
			}
		]}
		borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
		axisTop={null}
		axisRight={null}
		axisBottom={null}
		axisLeft={{
			tickSize: 5,
			tickPadding: 0,
			tickRotation: 0,
			legend: 'Millones',
			legendPosition: 'middle',
			legendOffset: -60,
			format: value => 
								`$${Number(value).toLocaleString('es-MX', { maximumSignificantDigits: 3 }).substring(0,3)} K`
		}}
		tooltipFormat={ value =>
				`$${Number(value).toLocaleString('es-MX', { maximumSignificantDigits: 3 })}`
		}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
		/* legends={[
			{
				dataFrom: 'keys',
				anchor: 'bottom',
				direction: 'column',
				justify: false,
				translateX: 20,
				translateY: 80,
				itemsSpacing: 2,
				itemWidth: 150,
				itemHeight: 20,
				itemDirection: 'left-to-right',
				itemOpacity: 0.85,
				symbolSize: 20,
				effects: [
					{
						on: 'hover',
						style: {
							itemOpacity: 1
						}
					}
				]
			}
		]} */
		animate={true}
		motionStiffness={90}
		motionDamping={15}
	/>
	);
};

export default compose(
	firestoreConnect( ({ sucursalId }) =>  [
		{
			collection: 'indicadores_graficas',
			doc: sucursalId,
			subcollections: [{ collection: 'indicadores', doc: "Colocacion" }],
			storeAs: 'colChartData'
		}
	]),
	connect((state, props) => ({
		colocationChartData: state.firestore.data.colChartData
	}))
)(GraphicColocation);
