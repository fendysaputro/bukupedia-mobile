import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Search, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  ListView, 
  DataSource } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import Button from "react-native-button";
import { ListItem } from "react-native-elements";
import Login from "./Login"
import NewRating from "../components/NewRating";
import Blog from "../components/Blog";
import HowToShop from "../components/HowToShop";
import HowToPay from "../components/HowToPay";
import ContentFormFaq from "../components/ContentFormFaq";

export default class WelcomeAccount extends Component {
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

  stateTwo = {
    listTwo: [
      {
        id: 0,
        title: 'Rating Aplikasi',
        link: 'NewRating'
      },
      {
        id: 1,
        title: 'Blog Kami',
        link: 'Blog'
      },
      {
        id: 2,
        title: 'Bantuan                                                                          >',
        link: 'HowToShop'
      }
    ]
  }

  constructor(props){
    super(props);
  }

  render () {
    return (
     <View style = {styles.container}>
        {
        <TouchableOpacity
          key = '1'
          style = {styles.containerOne}
        >
          <Button 
            style = {{
              position: 'relative',
              fontSize: 15, 
              color: 'black', 
              backgroundColor: '#FBAD19', 
              width: '25%',  
              alignSelf: 'flex-end'
            }}
            onPress = {() => this.props.navigation.navigate("LoginMain")}>
            <Text style = {styles.text}>
              Hi, Selamat Datang!
            </Text>
            Masuk  
          </Button> 
        </TouchableOpacity>
        }
        {
          this.stateTwo.listTwo.map((itemTwo, index) => (
            <TouchableOpacity
              key = {itemTwo.id}
              style = {styles.containerTwo}
              onPress = {() => this.props.navigation.navigate(itemTwo.link)}
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
  container: {
    backgroundColor: "#EDF8FE"
  },
  containerOne: {
    padding: 12,
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
    textAlign: 'left',
    marginLeft: '5%'
  },
  symbol:{
    color: 'black',
    textAlign: 'right'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent("WelcomeAccount", () => WelcomeAccount);