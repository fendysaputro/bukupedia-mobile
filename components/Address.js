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

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Address
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    }
});