import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, ListView, TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";

export default class Category extends Component {
  static navigationOptions = {
    title: "Pilih Kategori Buku",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center'
    },
    headerLeft: null,
  }

  stateList = {
    list: [
      {
        id: 0,
        title: 'Semua Kategori'
      },
      {
        id: 1,
        title: 'Bahasa dan Kamus'
      },
      {
        id: 2,
        title: 'Desain dan Seni'
      },
      {
        id: 3,
        title: 'E-Book'
      }
    ]
  }

  alertItemName = (list, index) => {
    alert(list.title)
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.stateList.list.map((list, index) => (
            <TouchableOpacity
              key = {list.id}
              style = {styles.containerTwo}
              onPress = {() => this.alertItemName(list)}
            >
              <Text style = {styles.text}>
                {list.title}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF8FE"
  },
  containerTwo: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'white' 
  },
  text: {
    color: 'black',
    textAlign: 'left',
    marginLeft: '5%'
  },
});

AppRegistry.registerComponent("Category", () => Category);