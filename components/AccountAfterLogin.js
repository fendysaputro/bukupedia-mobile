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
import { Header } from "react-native-elements";

export default class AccountAfterLogin extends Component {
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
    headerLeft: null,
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate("Login")}
        style={{margin:10, padding: 10, width: 50, height: 70}}>
        <Image
          source={require('../styles/icon/akunsetting.png')}
        />
      </TouchableOpacity>
  }

  stateTwo = {
    listTwo: [
      {
        id: 0,
        title: 'Wishlist                                                                          >'
      },
      {
        id: 1,
        title: 'Buku Poin                                                                       >'
      },
      {
        id: 2,
        title: 'Blog Kami'
      },
      {
        id: 3,
        title: 'Rating Aplikasi'
      },
      {
        id: 4,
        title: 'Bantuan                                                                         >'
      },
      {
        id: 5,
        title: 'Alamat                                                                           >'
      },
    ]
  }

  alertItemName = (itemOne, index) => {
    alert(itemOne.name)
  }
  alertItemTitle = (itemTwo, index) => {
    alert(itemTwo.title)
  }

  constructor(props, context){
    super(props, context);
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
              Hi, User!
            </Text>  
          </Button> 
        </TouchableOpacity>
        }
        {
          this.stateTwo.listTwo.map((itemTwo, index) => (
            <TouchableOpacity
              key = {itemTwo.id}
              style = {styles.containerTwo}
              onPress = {() => this.alertItemTitle(itemTwo)}
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

AppRegistry.registerComponent("AccountAfterLogin", () => AccountAfterLogin);