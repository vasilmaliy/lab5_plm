import React,  { useState } from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import DonutChart from "./DonutChart";
import SwitchSelector from "react-native-switch-selector";
import Chart from "./Chart";

const options = [
  { label: "Графік", value: "schedule" },
  { label: "Діаграма", value: "chart" },
];

const DrawingViewController = (props) => {

  const [graph, setGraph] = useState(<Chart/>);

  return (
    <>
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <SwitchSelector style={{marginTop: 0}}
        options={options}
        initial={0}
        onPress={(value) => value == 'schedule' ? setGraph(<Chart/>) : setGraph(<DonutChart/>)}
      />
    </View>
    <View style={styles.generalContainer}>
    {graph}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  personalInformation: {
    textAlign: "center",
  },
});

export default DrawingViewController;
