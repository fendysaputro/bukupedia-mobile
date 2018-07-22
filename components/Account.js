import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import Button from "react-native-button";
import { ListItem } from "react-native-elements";
import Login from "./Login"
import { Header } from "react-native-elements";
import EditProfile from "../components/EditProfile";
import AddAddress from "../components/AddressMain";

export default class Account extends Component {

  constructor (props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  async retrieveUser() {
    try {
      const retrievedUser =  await AsyncStorage.getItem('user');
      const user = JSON.parse(retrievedUser);
      return user;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true });
      if (this.state.hasToken) {
        AsyncStorage.getItem('user').then((user) => {
          var userObj = JSON.parse(user);
          this.setState(userObj);
        })
      }else{
        this.replaceScreen();
      }
    });
  }

  replaceScreen = () => {
    this.props.navigation.dispatch({
      key: 'WelcomeAccount',
      type: 'ReplaceCurrentScreen',
      routeName: 'WelcomeAccount'
    });
  };

  static navigationOptions = {
    title: 'Akun',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null,
    },
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center'
    },
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate("Login")}
        style={{marginRight: 5, width: 40, height: 40}}>
        <Image
          source={require('../styles/icon/akunsetting.png')}
        />
      </TouchableOpacity>
  }

  stateTwo = {
    listTwo: [
      {
        id: 0,
        title: 'Wishlist'
      },
      {
        id: 1,
        title: 'Buku Poin'
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
        title: 'Bantuan'
      },
      {
        id: 5,
        title: 'Alamat'
      },
    ]
  }

  alertItemName = (itemOne, index) => {
    alert(itemOne.name)
  }
  alertItemTitle = (itemTwo, index) => {
    alert(itemTwo.title)
  }

  render () {
    return (
     <View style = {styles.container}>
        {
        <TouchableOpacity
          key = '1'
          style = {styles.containerOne}
            onPress = {() => this.props.navigation.navigate("EditProfile")}>
            <Image source={require('../styles/icon/edit-foto.png')} style={{ width: 24, height: 24, alignItems: 'flex-start' }}/> 
            <Text style = {styles.textNew}>
              Hi, {this.state.user.name}
            </Text>   
        </TouchableOpacity>
        }
        {
          this.stateTwo.listTwo.map((itemTwo, index) => (
            <TouchableOpacity
              key = '5'
              style = {styles.containerTwo}
              onPress = {() => this.props.navigation.navigate("AddressMain")}
            >
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
    marginLeft: '5%',
  },
  symbol:{
    color: 'black',
    textAlign: 'right'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  },
  textNew: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 30,
    top: -20
  },
});

AppRegistry.registerComponent("Account", () => Account);