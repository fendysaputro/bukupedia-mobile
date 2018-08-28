import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Icon } from "react-native";
import { TabNavigator } from "react-navigation";
// import { NavigationComponent } from "react-native-material-bottom-navigation";
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

const Main = TabNavigator( 
  {
    Home: { screen: Home, 
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../styles/icon/beranda.png')} style={{width: 28, height: 24}} tintColor="white"/>
        ),
      })},
    Category: { screen: Category, 
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../styles/icon/kategori.png')} style={{width: 28, height: 24}} tintColor="white"/>
        ),
      })},
    Basket: { screen: Basket, 
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../styles/icon/keranjang.png')} style={{width: 28, height: 24}} tintColor="white"/>
        ),
      })},
    Orders: { screen: MyOrderMain,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../styles/icon/pesanan.png')} style={{width: 28, height: 24}} tintColor="white"/>
        ),
      })},
    Account: { screen: Account,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../styles/icon/akun.png')} style={{width: 28, height: 24}} tintColor="white"/>
        ),
      })}
    },
  {
    // tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        shifting: false,
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
            label:'beranda'
          },
          Category: {
            label: 'kategori',
          },
          Basket: {
            label: 'keranjang',        
          },
          Orders: {
            label: 'pesanan',
          },
          Account: {
            label: 'akun',
          }
        }
      }
    }
  // }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Main;

AppRegistry.registerComponent("Main", () => Main);