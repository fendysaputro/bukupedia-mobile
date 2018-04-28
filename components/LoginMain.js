import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search } from "react-native";
import { TabNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';

import Login from "./Login";
import Register from "./Register";

const LoginMain = TabNavigator({
    Login: {screen: Login},
    Register: {screen: Register}
},
{
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: COLOR_PRIMARY,
        inactiveTintColor:'black',
        style:{
            backgroundColor:'white'
        },
        indicatorStyle: {
            backgroundColor: COLOR_PRIMARY,
        },
        tabs: {
            Login: {
                label: "Login",
            },
            Register: {
                label: "Register",
            }
        }
    }
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
});

export default LoginMain;

AppRegistry.registerComponent("LoginMain", () => LoginMain);