import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";

export default class Basket extends Component {
  static navigationOptions = {
    title: 'Keranjang Belanja',
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
    alert()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../styles/icon/emptystates1.png')}
          style={{width: 250, height: 150}}>
        </Image>
        <Text style={styles.text}>
          Keranjang Belanja Anda Kosong
        </Text>
        <Text style={styles.smallText}>
          Semua belanjaan Anda akan masuk di sini
        </Text>
        <TouchableOpacity style={styles.button}
          onPress = {() => this.alertItemName("fendy")}>
            <Text style={styles.buttonText}>
              Mulai Belanja
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "25%",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "15%",
    fontWeight: "bold" 
  },
  smallText: {
    fontSize: 13,
    marginTop: "3%",
    textAlign: "center"
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginTop: "15%",
    padding: 5,
    margin: 15,
    height: 35,
    width: "60%"
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent("Basket", () => Basket);