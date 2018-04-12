import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Button } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is Home
          ini adalah Beranda
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

AppRegistry.registerComponent("Home", () => Home);