import React, { Component } from "react";
import { Footer, AppRegistry, StyleSheet, Text, View, Image, Search, TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import {tabs} from "./Main";

import Home from "./Home";

export default class PaymentReceived extends Component {
  static navigationOptions = {
    title: 'Pembayaran Berhasil',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null,
    },
    headerTitleStyle: {
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
          source={require('../styles/icon/pembayaranberhasil.png')}
          style={{width: 170, height: 170}}>
        </Image>
        <Text style={styles.text}>
          Pembayaran Anda Telah Kami Terima
        </Text>
        <Text style={styles.smallText}>
          Pesanan Anda akan segera kami proses
        </Text>
        <TouchableOpacity style={styles.button}
          onPress = {() => this.props.navigation.navigate("Home")}>
            <Text style={styles.buttonText}>
              Kembali Ke beranda
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
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

AppRegistry.registerComponent("PaymentReceived", () => PaymentReceived);