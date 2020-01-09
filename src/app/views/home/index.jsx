import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { makeStyles } from "@material-ui/core/styles";

const data = [
    {
      "day": "1",
      "sucursal": 460000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "2",
      "sucursal": 200000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "3",
      "sucursal": 300000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "4",
      "sucursal": 250000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "5",
      "sucursal": 450000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "6",
      "sucursal": 523000,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
      "day": "7",
      "sucursal": 140048,
      "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "8",
        "sucursal": 148000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "9",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "10",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "11",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "12",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "13",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "14",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "15",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "16",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "17",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "18",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "19",
        "sucursal": 450000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "20",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "21",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "22",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "23",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "24",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "25",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "26",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "27",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "28",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "29",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    },
    {
        "day": "30",
        "sucursal": 100000,
        "sucursalColor": "hsl(260, 70%, 50%)",
    }
  ]

  const useStyles = makeStyles(theme => ({
      root: {
          width: 'auto',
          height: '300px'
      }
  }))

function Home() {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ResponsiveBar
            data={data}
            keys={[ 'sucursal' ]}
            indexBy="day"
            maxValue={600000}
            margin={{ top: 50, right: 10, bottom: 50, left: 70 }}
            padding={0.3}
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
                    `$${Number(value).toLocaleString('es-MX', { maximumSignificantDigits: 3 }).substring(0,3)}K`
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
        </div>
    )
}

export default Home