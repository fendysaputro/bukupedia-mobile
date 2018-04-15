import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TouchableOpacity, Button, List } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import { ListItem } from "react-native-elements";

export default class Account extends Component {
  static navigationOptions = {
    title: 'Akun',
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

  stateOne = {
    listOne: [
      {
        id: 0,
        name: 'Hi, Selamat Datang!',
      }
    ]
  }
  stateTwo = {
    listTwo: [
      {
        id: 0,
        title: 'Rating Aplikasi'
      },
      {
        id: 1,
        title: 'Blog Kami'
      },
      {
        id: 2,
        title: 'Bantuan                                                                                   >'
      }
    ]
  }

  render () {
    return (
      <View>
        {
          this.stateOne.listOne.map((itemOne, index) => (
            <TouchableOpacity
              key = {itemOne.id}
              style = {styles.containerOne}
            >
              <Text style = {styles.text}>
                {itemOne.name}
              </Text>
            </TouchableOpacity>
          ))
        }
        {
          this.stateTwo.listTwo.map((itemTwo, index) => (
            <TouchableOpacity
              key = {itemTwo.id}
              style = {styles.containerTwo}
            >
              <Text style = {styles.text}>
                {itemTwo.title}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerOne: {
    padding: 10,
    marginBottom: 15, 
    backgroundColor: 'white'
  },
  containerTwo: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'white' 
  },
  text: {
    color: 'black',
    textAlign: 'left'
  },
  symbol:{
    color: 'black',
    textAlign: 'right'
  },
  button: {
    color: 'yellow'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent("Account", () => Account);