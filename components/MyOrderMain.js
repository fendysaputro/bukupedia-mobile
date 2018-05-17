import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search } from "react-native";
import { TabNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';

import PaymentWaiting from "./PaymentWaiting";
import PaymentReceived from "./PaymentReceived";
import Main from "./Main";

const MyOrderMain = TabNavigator({
    PaymentWaiting: {screen: PaymentWaiting},
    PaymentReceived: {screen: PaymentReceived}
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
            PaymentWaiting: {
                label: "Menunggu Pembayaran",
            },
            PaymentReceived: {
                label: "Pembayaran Diterima",
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

export default MyOrderMain;

AppRegistry.registerComponent("MyOrderMain", () => MyOrderMain);