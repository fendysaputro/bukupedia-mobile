import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TextInput, TouchableOpacity } from "react-native";
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
            width: 290,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingTop: 3 
          }}
          onPress = {() => this.alertItemName("Masuk")}>
            Masuk
        </Button>
        <Text style={styles.lineText}>
          ─────────────  Atau  ─────────────
        </Text>
        <Text style={styles.textLogin}>
          Email
        </Text>
        <TextInput style={styles.input}
          placeHolder = "Email"
          underlineColorAndroid = "transparent"
        >
        </TextInput>
        <Text style={styles.textLogin}>
          Nomor Invoice
        </Text>
        <TextInput style={styles.input}
          placeHolder = "Invoice"
          underlineColorAndroid = "transparent"
        >
        </TextInput>
        <TouchableOpacity
          style = {styles.submitButton}>
          <Text style = {styles.submitButtonText}> Cari </Text>
        </TouchableOpacity>
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
    marginTop: "15%"
  },
  lineText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: "5%"
  },
  textLogin: {
    fontSize: 15,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginTop: "1%",
    paddingTop: 10,
    fontWeight: "bold"
  },
  input: {
    height: 30,
    width: 285,
    alignSelf: "flex-start",
    marginLeft: "10%",
    backgroundColor: "#D3D3D3"
  },
  submitButton: {
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    margin: 15,
    height: 35,
    width: 290
 },
 submitButtonText:{
    color: "white",
    textAlign: "center"
 }
});

AppRegistry.registerComponent("Orders", () => Orders);