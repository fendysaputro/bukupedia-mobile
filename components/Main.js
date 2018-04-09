import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";

export default class Main extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,

    footerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    footerLeft: null
  };
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
      onTabChange={newTabIndex => alert(`New tab at postion ${newTabIndex}`)}
    >
      <Tab
        barBackgroundColor={COLOR_PRIMARY}
        label="Beranda"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/beranda-aktif.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        barBackgroundColor={COLOR_PRIMARY}
        label="Kategori"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/kategori-aktif.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        barBackgroundColor={COLOR_PRIMARY}
        label="Keranjang"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/keranjang-aktif.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        barBackgroundColor={COLOR_PRIMARY}
        label="Pesanan"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/pesanan-aktif.png')} style={{ width: 24, height: 24 }} />} 
      />
      <Tab
        barBackgroundColor={COLOR_PRIMARY}
        label="Akun"
        labelColor="white"
        activeLabelColor="yellow"
        icon={<Image source={require('../styles/icon/akun-aktif.png')} style={{ width: 24, height: 24 }} />} 
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