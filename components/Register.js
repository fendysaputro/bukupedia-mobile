import React, { Component } from "react";
import { AppRegistry, 
    StyleSheet, Text, View, 
    Image, Search, TextInput, 
    TouchableOpacity,
    Alert } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Button from "react-native-button";
import { postRegister } from "../services/FetchRegister";

export default class Register extends Component {
    static navigationOptions = {
        title: "Daftar",
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

    doClickRegister() {
        var params = {name: 'test', email: 'test@email.com', password: 'test123'};
        postRegister(params)
            .then((res) => {
                
                Alert.alert(
                    'Alert Title',
                    'Result of register',
                    [
                      {text: 'Ask me later', onPress: () => console.log(JSON.stringify(res.d))},
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            });
    }

    render () {
      return (
        <View style={styles.container}>
          <TouchableOpacity style = {styles.buttonStyleFb}>
              <Text style = {styles.submitButtonText}>Register With Facebook</Text>
                  <Image 
                      style = {styles.image}
                      source={require('../styles/icon/facebook.png')} 
                  />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonStyleGoogle}>
              <Text style = {styles.submitButtonText}>Register With Google+</Text>
                  <Image
                      style = {styles.image}      
                      source={require('../styles/icon/google-plus.png')} 
                  /> 
          </TouchableOpacity>
          <Text style={styles.lineText}>
              ────────  Atau  ────────
          </Text>
          <TextInput style={styles.input}
              placeholder = "Name"
              placeholderTextColor="#696969"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({name: text})}
          />
          <TextInput style={styles.input}
              placeholder = "Email"
              placeholderTextColor="#696969"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({email: text})}
          />
          <TextInput style={styles.input}
              placeholder = "Password"
              placeholderTextColor="#696969"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({password: text})}
          />
          <TextInput style={styles.input}
              placeholder = "Confirm Password"
              placeholderTextColor="#696969"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({confirmPwd: text})}
          />
          <TextInput style={styles.input}
              placeholder = "Nomor Handphone"
              placeholderTextColor = "#696969"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText = {(text) => this.setState({no_Hp: text})}
          />
          <Button style = {styles.submitButton}
            onPress = {() => this.doClickRegister()}>
                Daftar
          </Button>     
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        borderTopWidth: 4,
        borderTopColor: "#F1F3F2",
        backgroundColor: "#EDF8FE"
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        marginTop: "15%"
    },
    lineText: {
        fontSize: 13,
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "2%"
    },
    textLogin: {
        fontSize: 15,
        textAlign: "left",
        alignSelf: "flex-start",
        marginLeft: "10%",
        marginTop: "1%",
        paddingTop: 10,
        fontWeight: "bold"
    },
    input: {
        height: 30,
        width: 285,
        alignSelf: "flex-start",
        marginLeft: "10%",
        backgroundColor: "white",
        marginTop: "3%"
    },
    submitButton: {
        fontSize: 15, 
        color: 'black', 
        backgroundColor: '#FBAD19',
        alignSelf: "center",
        width: 290,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingTop: 7.5
   },
   submitButtonText:{
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: -3
   },
   buttonStyleFb: { 
        backgroundColor: '#344685',
        width: 290,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        paddingTop: 7.5
   },
   buttonStyleGoogle: {  
        backgroundColor: '#CD583F',
        width: 290,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingTop: 7.5
   },
   image: {
        width: 24,
        height: 24,
        marginLeft: '3%',
        marginTop: -18,
        alignSelf: 'flex-start'
   },
   buttonLine: {
        flexDirection: 'row',
        position: 'relative',
        fontSize: 13, 
        color: 'black', 
        backgroundColor: 'transparent',
        textAlign: 'right',
        width: 150,
        right: 0,
        marginTop: 7,
        paddingTop: 2
   },
   check: {
       flexDirection: 'row',
       backgroundColor: '#F1F3F2',
       start: '6%',
       alignSelf: 'flex-start',
       backgroundColor: 'transparent' 
   },
});

  
  AppRegistry.registerComponent("Register", () => Register);