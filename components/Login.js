import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Button from "react-native-button";
import Icon from "react-native-vector-icons";

export default class Login extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null,
        },
        headerTitleStyle: {
          color: 'white',
          width: '90%',
          textAlign: 'center'
        }
      }
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
      cari = (email, password) => {
        alert('email: ' + email + 'password: ' + password)
    }

    onLogin(){
        const { username, password } = this.state;

        Alert.alert('testing', `${username} + ${password}`);
    }

    render() {
        return(
            <View style={styles.container}>
                <Button style = {styles.buttonStyleFb}
                    Icon name = "facebook" backgroundColor = "#3b5998"
                    onPress = {() => this.alert("Masuk")}>
                        Login with Facebook
                </Button>
                <Button style = {styles.buttonStyleGoogle}
                    onPress = {() => this.alert("Masuk")}>
                        Login with Google+ 
                </Button>
                <Text style={styles.lineText}>
                    ─────────────  Atau  ─────────────
                </Text>
                <TextInput style={styles.input}
                    value = "Username"
                    placeHolder = "Username"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "red"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}
                />
                <TextInput style={styles.input}
                    value = "Password"
                    placeHolder = "Password"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "red"
                    autoCapitalize = "none"
                    onChangeText = {this.Password}
                />
                <Button style = {styles.submitButton}
                    onPress = {() => this.alert("Masuk")}>
                        Masuk
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      borderTopWidth: 4,
      borderTopColor: "#F1F3F2"
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
      marginBottom: "5%"
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
      marginTop: "5%"
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
      textAlign: "center"
   },
   buttonStyleFb: {
        fontSize: 15, 
        color: 'white', 
        backgroundColor: 'blue',
        alignSelf: "center",
        width: 290,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        paddingTop: 7.5
   },
   buttonStyleGoogle: {
        fontSize: 15, 
        color: 'white', 
        backgroundColor: 'red',
        alignSelf: "center",
        width: 290,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingTop: 7.5
   }
});

