import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search } from "react-native";
import { TabNavigator } from "react-navigation";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import { StackNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';

import Home from "./Home";
import Category from "./Category";
import Basket from "./Basket";
import Orders from "./Orders";
import Account from "./Account";

export default class Main extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,
  }
  render() {
    return( 
    <BottomNavigation
      labelColor = "white"
      activeLabelColor = "yellow"
      shifting={false}
      style={{
        height: 56,
        elevation: 8,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
      }}
    >
      <Tab
        screen='Home'
        barBackgroundColor={COLOR_PRIMARY}
        label="Beranda"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/beranda.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        screen='Category'
        barBackgroundColor={COLOR_PRIMARY}
        label="Kategori"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/kategori.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        screen='Basket'
        barBackgroundColor={COLOR_PRIMARY}
        label="Keranjang"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/keranjang.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        screen='Orders'
        barBackgroundColor={COLOR_PRIMARY}
        label="Pesanan"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/pesanan.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        screen='Account'
        barBackgroundColor={COLOR_PRIMARY}
        label="Akun"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/akun.png')} style={{ width: 24, height: 24 }} />} 
      />
    </BottomNavigation>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

AppRegistry.registerComponent("Main", () => Main);