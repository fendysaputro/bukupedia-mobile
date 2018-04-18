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
  Button, 
  ListView, 
  DataSource } from "react-native";
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
  alertItemName = (itemOne, index) => {
    alert(itemOne.name)
  }
  alertItemTitle = (itemTwo, index) => {
    alert(itemTwo.title)
  }

  // constructor() {
  //   super();
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2, r3, r4) => r1 !== r2 !== r3 !==r4});
  //   this.state = {
  //     dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
  //   };
  // }

  render () {
    return (
     <View>
        {
        <TouchableOpacity
          key = '1'
          style = {styles.containerOne}
          onPress = {() => this.alertItemName("Hi, Selamat Datang!")}
        >
          <Text style = {styles.text}>
            Hi, Selamat Datang!
          </Text>
          <Button style = {styles.button}
            onPress = {() => this.alertItemName("Hi, Selamat Datang!")}
            title = "Masuk"
            color = "yellow"
            titleColor = "black"
          />
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: '70%',
    flex: 1,
    color: 'yellow'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent("Account", () => Account);