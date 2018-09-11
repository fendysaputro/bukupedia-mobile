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
import { List, ListItem } from "react-native-elements";
import Login from "./Login"
import { Header } from "react-native-elements";
import EditProfile from "../components/EditProfile";
import AddAddress from "../components/AddressMain";
import NewRating from "../components/NewRating";
import Wishlist from "../components/Wishlist";
import ContentFormFaq from "../components/ContentFormFaq";
import HowToShop from "../components/HowToShop";
import HowToPay from "../components/HowToPay";
import Blog from "../components/Blog";
import { getLogout } from "../services/FetchLogout";
import Home from "../components/Home";
import Welcome from "../components/WelcomeAccount";

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
    // this.props.navigation.dispatch({
    //   type: 'ReplaceCurrentScreen',
    //   routeName: 'WelcomeAccount',
    //   key: 'WelcomeAccount',
    // });
  };

  onLogout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Account");
  }

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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image
          style={{flex: 1, margin: 12.5, padding: 12.5, aspectRatio: 1.5, resizeMode: 'contain'}}
          source={require('../styles/icon/akunsetting.png')}
        />
      </TouchableOpacity>
  }

  stateTwo = {
    listTwo: [
      {
        id: 0,
        title: 'Buku Poin',
      },
      {
        id: 1,
        title: 'Blog Kami',
        link: 'Blog'
      },
      {
        id: 2,
        title: 'Rating Aplikasi',
        link: 'NewRating'
      },
      {
        id: 3,
        title: 'Bantuan',
        link: 'HowToPay'
      },
      {
        id: 4,
        title: 'Alamat',
        link: 'AddressMain'
      },
      {
        id: 5,
        title: 'Keluar',
        link: this.onLogout()
      },
    ]
  }

  render () {
    return (
     <View style = {styles.container}>
        {
        <TouchableOpacity
          key = '1'
          style = {styles.containerOne}
            onPress = {() => this.replaceScreen()}>
            <Image source={require('../styles/icon/edit-foto.png')} style={{ width: 24, height: 24, alignItems: 'flex-start' }}/> 
            <Text style = {styles.textNew}>
              Hi, {this.state.user.name}
            </Text>   
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