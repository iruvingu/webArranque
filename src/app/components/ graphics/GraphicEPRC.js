import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const GraphicEPRC = ({data}) => (
    <ResponsiveBar
            data={data}
            keys={[ 'proyeccion' ]}
            indexBy="day"
            maxValue={600000}
            margin={{ top: 50, right: 10, bottom: 50, left: 70 }}
            padding={0.2}
            colors={{ scheme: 'nivo' }}
            markers={[
                {
                    axis: 'y',
                    value: 500000,
                    lineStyle: { stroke: '#191461', strokeWidth: 2 },
                    legend: 'META',
                    legendOrientation: 'vertical',
                }
            ]}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
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
                        id: 'sucursal'
                    },
                    id: 'lines'
                }
            ]}
            borderColor="#000"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 0,
                tickRotation: 0,
                legend: 'Money',
                legendPosition: 'middle',
                legendOffset: -60,
                format: value => 
                    `$${Number(value).toLocaleString('es-MX', { maximumSignificantDigits: 3 }).substring(0,3)} K`
            }}
            tooltipFormat={ value =>
                `$${Number(value).toLocaleString('es-MX', { maximumSignificantDigits: 3 })}`
            }
            labelSkipWidth={24}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            /* legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
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
)

export default GraphicEPRC;
