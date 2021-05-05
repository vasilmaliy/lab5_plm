import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';
import { StyleSheet, Text, View} from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation'

const data = [];
  
function Chart(props) {

    const [state, setState] = useState({
        interpolation: "linear",
        polar: false
    });

    for(x1=-3; x1 <= 3; x1+=0.1) {
      data.push({ x: x1, y: Math.pow(x1, 3) })
    }    

    return (
        <VictoryChart polar={state.polar} height={200} padding={10}>
          <VictoryLine
            interpolation={state.interpolation} data={data}
            style={{ data: { stroke: "#c43a31" } }}
          />
          <VictoryScatter data={data}
            size={1}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>
    
    )
}


export default Chart
