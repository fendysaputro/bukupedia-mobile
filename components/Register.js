import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TextInput } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Button from "react-native-button";

export default class Register extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null,
    },
    headerTitleStyle: {
      color: 'white',
      width: '90%',
      textAlign: 'center'
    }
  }
    render () {
      return (
        <View style={styles.container}>
          <TextInput style={styles.input}
              placeHolder = "firtsName"
              underlineColorAndroid = "transparent"
              placeholderTextColor = "red"
              value = "first name"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({email: text})}
          />
          <TextInput style={styles.input}
              placeHolder = "lastName"
              underlineColorAndroid = "transparent"
              placeholderTextColor = "red"
              value = "last name"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({password: text})}
          />
          <TextInput style={styles.input}
              placeHolder = "Email"
              underlineColorAndroid = "transparent"
              placeholderTextColor = "red"
              value = "email"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({password: text})}
          />
          <TextInput style={styles.input}
              placeHolder = "no_hp"
              underlineColorAndroid = "transparent"
              placeholderTextColor = "red"
              value = "handphone"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({password: text})}
          />
          <TextInput style={styles.input}
              placeHolder = "password"
              underlineColorAndroid = "transparent"
              placeholderTextColor = "red"
              value = "password"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({password: text})}
          />
          <Button style = {styles.submitButton}
            onPress = {() => this.alert("Daftar")}>
                Daftar
          </Button>     
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      borderTopWidth: 4,
      borderTopColor: "#F1F3F2"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    input: {
      height: 30,
      width: 285,
      alignSelf: "flex-start",
      marginLeft: "10%",
      backgroundColor: "white",
      marginTop: "5%"
    },
    submitButton: {
      fontSize: 15, 
      color: 'black', 
      backgroundColor: '#FBAD19',
      alignSelf: "center",
      width: 290,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      paddingTop: 7.5
    }
  });
  
  AppRegistry.registerComponent("Register", () => Register);