import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";

export default class Main extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,

    footerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    footerLeft: null
  };
  render() {
    return( 
    <View style={styles.container}>
      <Text>This is main menu</Text>
    </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("Main", () => Main);