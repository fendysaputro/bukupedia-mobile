import React, { Component } from "react";
import {  
  StyleSheet, 
  Text, 
  ScrollView,
  View,
  TouchableOpacity,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { API, ADDRESS, PROFILE } from '../components/Global';

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

    componentDidMount() {
      var self = this;
      AsyncStorage.getItem('id_token').then((token) => {
        const URL = API + ADDRESS + '?token=' + token;
        fetch(URL)
          .then((response) => response.json())
          .then((responseJson) => {
            var userObj = responseJson;
            if (userObj.s){
              self.setState({address: userObj.d[0]});
            }
          })
      })
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerTwo}>
                    <TouchableOpacity>
                      <Text style = {styles.textNew}>
                        {this.state.address.label}
                      </Text>
                      <Text style = {styles.textNew}>
                        {this.state.address.name}
                      </Text>
                      <Text style = {styles.textNew}>
                        {this.state.address.company}
                      </Text>
                      <Text style = {styles.textNew}>
                        {this.state.address.address}
                      </Text>
                      <Text style = {styles.textNew}>
                        {this.state.address.phone}
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