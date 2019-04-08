import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  AsyncStorage, RefreshControl } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { API, PROFILE } from '../components/Global';
import TabNavigator from "react-native-tab-navigator";
import Button from "react-native-button";
import { List, ListItem } from "react-native-elements";
import Login from "./Login"
import { Header } from "react-native-elements";
import EditProfile from "../components/EditProfile";
import AddAddress from "../components/AddressMain";
import NewRating from "../components/NewRating";
import Wishlist from "../components/Wishlist";
import Content from "../components/Content";
import Blog from "../components/Blog";
import { getLogout } from "../services/FetchLogout";
import Home from "../components/Home";
import Account from "../components/Account";

export default class WelcomeAccount extends Component {

  constructor (props) {
    super(props);
    this.state = {
      user: {},
      refreshing: false
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem('id_token').then((token) => {
  //     this.setState({ hasToken: token !== null, isLoaded: true });
  //     if (this.state.hasToken) {
  //       AsyncStorage.getItem('user').then((user) => {
  //         var userObj = JSON.parse(user);
  //         this.setState({user: userObj});
  //       })
  //     }else{
  //       this.replaceScreen();
  //     }
  //   });
  // }

  componentDidMount() {
    var self = this;
    AsyncStorage.getItem('id_token').then((token) => {
      const URL3 = API + PROFILE + '?token=' + token;
      console.log("ini edit profile");
      console.log(URL3);
      fetch(URL3)
        .then((response) => response.json())
        .then((responseJson) => {
          var profileObj = responseJson;
          if ((profileObj.s)){
            // self.setState(profileObj.d); 
            self.setState({user: profileObj.d});
          }
        })
    })
  }

  replaceScreen = () => {
    // this.props.navigation.dispatch({
    //   type: 'ReplaceCurrentScreen',
    //   routeName: 'WelcomeAccount',
    //   key: 'WelcomeAccount',
    // });
  };

  _onRefresh = () => {
    var newUser = this.state.user.name;
    this.setState({refreshing: true});
    fetch(newUser).then(() => {
      this.setState({refreshing: false});
    });
  }


  onLogout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Main");
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
    headerLeft: null,
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
        link: 'Content'
      },
      {
        id: 4,
        title: 'Alamat',
        link: 'AddressMain'
      },
    ]
  }

  render () {
    let userObj = userObj;
    return (
      <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }>

     <View style = {styles.container}>
        {
        <TouchableOpacity
          key = '1'
          style = {styles.containerOne}
            onPress = {() => this.props.navigation.navigate('EditProfile')}>
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
        {
          <TouchableOpacity
            key = '1'
            style = {styles.containerTwo}
            onPress = {() => this.onLogout()}> 
              <Text style = {styles.text}>
                Keluar
              </Text>   
          </TouchableOpacity>
        }
      </View>
      </ScrollView>
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

AppRegistry.registerComponent("WelcomeAccount", () => WelcomeAccount);