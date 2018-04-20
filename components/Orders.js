import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Button from "react-native-button";

export default class Orders extends Component {
  static navigationOptions = {
    title: 'Pesanan Saya',
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null,
    },
    headerTitleStyle: {
      color: 'white',
      width: '90%',
      textAlign: 'center'
    },
    headerLeft: null
  }

  alertItemName = () => {
    alert("Masuk")
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Masuk untuk melihat daftar pesanan
        </Text>
        <Button
          style = {{
            fontSize: 15, 
            color: 'black', 
            backgroundColor: '#FBAD19',
            alignSelf: "center",
            width: 275,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingTop: 3 
          }}
          onPress = {() => this.alertItemName("Masuk")}>
            Masuk
        </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "15%",
    fontWeight: "bold"
  },
});

AppRegistry.registerComponent("Orders", () => Orders);