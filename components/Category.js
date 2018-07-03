import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, ListView, TouchableOpacity, Dimensions } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import { getCategory, getSubCategory, getProductByCategory } from "../services/FetchCategory";

var { height, width } = Dimensions.get('window');

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

  constructor (props){
    super(props);
  }

  componentWillMount(){
    this.setState({ categories : []});
    getCategory()
          .then((res) => {
            this.setState({ categories: res.d });
          })
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.categories.map((category) => (
            <TouchableOpacity
              key = {this.state.categories}
              style = {styles.containerTwo}
            >
              <Text style = {styles.text}>
                {category.name}
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