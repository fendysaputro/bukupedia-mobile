import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Footer} from "react-native";
import { TabNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';

import AddAddress from "./AddAddress";
import Address from "./Address";
import {tabs} from "./Main";

const AddressMain = TabNavigator({
    Address: {screen: Address},
    AddAddress: {screen: AddAddress}
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
        tabss: {
            Address: {
                label: "Alamat Pengiriman",
            },
            AddAddress: {
                label: "Tambah Alamat",
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

export default AddressMain;

AppRegistry.registerComponent("AddressMain", () => AddressMain);