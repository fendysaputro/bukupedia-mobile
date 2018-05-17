import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";

export default class PaymentWaiting extends Component {
  static navigationOptions = {
    title: 'Menunggu Pembayaran',
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
          source={require('../styles/icon/emptystates2.png')}
          style={{width: 250, height: 265}}>
        </Image>
        <Text style={styles.text}>
          Anda Belum Memiliki Pesanan
        </Text>
        <Text style={styles.smallText}>
          pantau status pesanan Anda di sini
        </Text>
        <TouchableOpacity style={styles.button}
          onPress = {() => this.alertItemName("fendy")}>
            <Text style={styles.buttonText}>
              Buat Pesanan
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "2%",
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    marginTop: "2%",
    fontWeight: "bold" 
  },
  smallText: {
    fontSize: 13,
    marginTop: "3%",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#00AEF2",
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

AppRegistry.registerComponent("PaymentWaiting", () => PaymentWaiting);