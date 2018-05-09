import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";

export default class Password extends Component {
    static navigationOptions = {
      title: 'Password',
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

    render () {
        return (
            <Text> This password </Text>
        )   
    }
}


    AppRegistry.registerComponent("Password", () => Password);