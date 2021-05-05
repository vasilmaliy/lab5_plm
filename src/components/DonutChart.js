import React from 'react'
import { VictoryPie } from 'victory-native';

const DonutChart = (props) => {
    return (
        <VictoryPie
        colorScale={["yellow", "brown", "gray", "red", "violet" ]}
        data={[
            { y: 15, x: ' '},
            { y: 25, x: ' '},
            { y: 45, x: ' '},
            { y: 10, x: ' '},
            { y: 5, x: ' '},
        ]}
        width={200}
        height={200}
        innerRadius={70}
        style={{
        labels: {
        fill: 'white', fontSize: 15, padding: 7,
        }, }}
    />
    )
}

export default DonutChart
