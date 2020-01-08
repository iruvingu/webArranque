import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { makeStyles } from "@material-ui/core/styles";

const data = [
    {
      "country": "AD",
      "hot dog": 1,
      "hot dogColor": "hsl(50, 70%, 50%)",
      "burger": 13,
      "burgerColor": "hsl(260, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(114, 70%, 50%)",
      "kebab": 74,
      "kebabColor": "hsl(113, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(202, 70%, 50%)",
      "donut": 63,
      "donutColor": "hsl(233, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 170,
      "hot dogColor": "hsl(122, 70%, 50%)",
      "burger": 132,
      "burgerColor": "hsl(58, 70%, 50%)",
      "sandwich": 63,
      "sandwichColor": "hsl(313, 70%, 50%)",
      "kebab": 85,
      "kebabColor": "hsl(278, 70%, 50%)",
      "fries": 2,
      "friesColor": "hsl(142, 70%, 50%)",
      "donut": 99,
      "donutColor": "hsl(317, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 152,
      "hot dogColor": "hsl(130, 70%, 50%)",
      "burger": 168,
      "burgerColor": "hsl(109, 70%, 50%)",
      "sandwich": 118,
      "sandwichColor": "hsl(61, 70%, 50%)",
      "kebab": 26,
      "kebabColor": "hsl(357, 70%, 50%)",
      "fries": 84,
      "friesColor": "hsl(221, 70%, 50%)",
      "donut": 14,
      "donutColor": "hsl(84, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 4,
      "hot dogColor": "hsl(68, 70%, 50%)",
      "burger": 55,
      "burgerColor": "hsl(185, 70%, 50%)",
      "sandwich": 152,
      "sandwichColor": "hsl(247, 70%, 50%)",
      "kebab": 35,
      "kebabColor": "hsl(217, 70%, 50%)",
      "fries": 70,
      "friesColor": "hsl(118, 70%, 50%)",
      "donut": 47,
      "donutColor": "hsl(207, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 140,
      "hot dogColor": "hsl(265, 70%, 50%)",
      "burger": 91,
      "burgerColor": "hsl(310, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(134, 70%, 50%)",
      "kebab": 170,
      "kebabColor": "hsl(297, 70%, 50%)",
      "fries": 2,
      "friesColor": "hsl(22, 70%, 50%)",
      "donut": 123,
      "donutColor": "hsl(274, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 140,
      "hot dogColor": "hsl(41, 70%, 50%)",
      "burger": 147,
      "burgerColor": "hsl(200, 70%, 50%)",
      "sandwich": 45,
      "sandwichColor": "hsl(267, 70%, 50%)",
      "kebab": 26,
      "kebabColor": "hsl(293, 70%, 50%)",
      "fries": 22,
      "friesColor": "hsl(165, 70%, 50%)",
      "donut": 7,
      "donutColor": "hsl(43, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 96,
      "hot dogColor": "hsl(153, 70%, 50%)",
      "burger": 145,
      "burgerColor": "hsl(75, 70%, 50%)",
      "sandwich": 82,
      "sandwichColor": "hsl(265, 70%, 50%)",
      "kebab": 117,
      "kebabColor": "hsl(164, 70%, 50%)",
      "fries": 8,
      "friesColor": "hsl(220, 70%, 50%)",
      "donut": 36,
      "donutColor": "hsl(215, 70%, 50%)"
    }
  ]

  const useStyles = makeStyles(theme => ({
      root: {
          width: 500,
          height: 400
      }
  }))

function Home() {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ResponsiveBar
            data={data}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
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
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
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
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
        </div>
    )
}

export default Home