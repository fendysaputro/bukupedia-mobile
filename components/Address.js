import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput,
  ScrollView,
  View,
  Button, 
  Dimensions,
  TouchableOpacity,
  Image,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { CheckBox } from "react-native-elements";
import Login from "../components/Login";
import getAddress from "../services/FetchAddress";
import { API, ADDRESS, PROFILE } from '../components/Global';
import ReviewOrder from '../components/ReviewOrder';
import { postCreateAddress } from '../services/FetchAddress';
import AddAddress from '../components/AddAddress';

export default class Address extends Component {
    static navigationOptions = {
      title: 'Alamat Pengiriman',
      headerTintColor: "white",
      headerStyle: { 
        backgroundColor: COLOR_PRIMARY,
        elevation: null,
      },
      headerTitleStyle: {
        width: '90%',
        textAlign: 'center'
      }
    }

    constructor (props) {
        super(props);
        this.state = {
          user: {},
          address: {}
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

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerTwo}>
                    <TouchableOpacity>
                        <View style={styles.imageStyle}>
                            <Image
                                source={require('../styles/icon/edit-foto.png')}
                                style={{ width: 20, height: 20 }}>
                            </Image>
                        </View>
                        <Text style = {styles.textNew}>
                            {this.state.user.name}
                        </Text>
                        <Text style = {styles.textNew}>
                            {this.state.user.email}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "flex-start",
    },
    containerTwo:{
        flex: 1,
        alignItems: "flex-start",
        marginTop: "5%",
        start: "5%",
        width: "90%",
        backgroundColor: "white"
    },
    textNew: {
        color: 'black',
        textAlign: 'left',
        marginLeft: 30
    },
    imageStyle: {
        flex: 1,
        alignItems: "flex-start",
        start: "70%"
    }
});