import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Icon } from "react-native";
import { TabNavigator } from "react-navigation";
import { NavigationComponent } from "react-native-material-bottom-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';

import Home from "./Home";
import Category from "./Category";
import Basket from "./Basket";
import Orders from "./Orders";
import WelcomeAccount from "./WelcomeAccount";
import Account from "./Account";
import  MyOrderMain from "./MyOrderMain";
import LoginMain from "./LoginMain";
import { onLogin } from "./Login"

replaceScreen = () => {
  this.props.navigation.dispatch({
    type: 'ReplaceCurrentScreen',
    key: 'WelcomeAccount',
    params: { },
    routeName: 'WelcomeAccount'
  });
};

const Main = TabNavigator( 
  {
    Home: { screen: Home }, 
    Category: { screen: Category, },
    Basket: { screen: Basket },
    Orders: { screen: MyOrderMain },
    Account: { screen: Account }
  },
  {
    tabBarComponent: NavigationComponent,
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
      bottomNavigationOptions: {
        showLabel: true,
        showIcon: true,
        shifting: false,
        labelColor: 'white',
        activeLabelColor: 'yellow',
        style: {
          backgroundColor: COLOR_PRIMARY
        },
        iconStyle: {
          padding: 0,
          marginBottom: 0,
          marginTop: 0
        },
          tabs: {
            Home: {
              barBackgroundColor: COLOR_PRIMARY,
              label: 'Beranda',
              labelColor: 'white',
              icon:<Image source={require('../styles/icon/beranda.png')} style={{ width: 24, height: 24 }} />  
            },
            Category: {
              barBackgroundColor: COLOR_PRIMARY,
              label: 'Kategori',
              labelColor: 'white',
              icon:<Image source={require('../styles/icon/kategori.png')} style={{ width: 24, height: 24 }} />
            },
            Basket: {
              barBackgroundColor: COLOR_PRIMARY,
              label: 'Keranjang',
              labelColor: 'white',
              icon:<Image source={require('../styles/icon/keranjang.png')} style={{ width: 24, height: 24 }} />                
            },
            Orders: {
              barBackgroundColor: COLOR_PRIMARY,
              label: 'Pesanan',
              labelColor: 'white',
              icon:<Image source={require('../styles/icon/pesanan.png')} style={{ width: 24, height: 24 }} />
            },
            Account: {
              barBackgroundColor: COLOR_PRIMARY,
              label: 'Akun',
              labelColor: 'white',
              icon:<Image source={require('../styles/icon/akun.png')} style={{ width: 24, height: 24 }} />
            }
          }
        }
      }
  });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Main;

AppRegistry.registerComponent("Main", () => Main);