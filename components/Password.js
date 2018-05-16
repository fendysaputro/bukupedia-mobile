import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";

export default class Password extends Component {
    static navigationOptions = {
      title: 'Password',
      headerStyle: {
        backgroundColor: COLOR_PRIMARY,
        elevation: null,
      },
      headerTitleStyle: {
        color: 'white',
        width: '90%',
        textAlign: 'center'
      },
    }

    state = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
      handleOldPassword = (text) => {
        this.setState({ oldPassword: text })
      }
      handleNewPassword = (text) => {
        this.setState({ newPassword: text })
      }
      handleConfirmPassword = (text) => {
          this.setState({ confirmPassword: text })
      }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.textLogin}>
                    Password Baru
                </Text>
                <TextInput style={styles.input}
                    placeHolder = "Password Lama"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    onChangeText = {this.handleOldPassword}
                />
                <Text style={styles.textLogin}>
                    Password Baru
                </Text>
                <TextInput style={styles.input}
                    placeHolder = "Password Baru"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    onChangeText = {this.handleNewPassword}
                />
                <Text style={styles.textLogin}>
                    Konfirmasi Password
                </Text>
                <TextInput style={styles.input}
                    placeHolder = "Konfirmasi Password"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    onChangeText = {this.handleConfirmPassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {() => this.cari(this.state.email, this.state.invoice)}>
                        <Text style = {styles.submitButtonText}> 
                            Simpan 
                        </Text>
                </TouchableOpacity>
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
        marginTop: "5%"
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
        backgroundColor: "#F1F3F2"
    },
    submitButton: {
        backgroundColor: "#00AEF2",
        padding: 10,
        margin: 15,
        height: 35,
        width: 290
     },
     submitButtonText:{
        color: "white",
        textAlign: "center"
     }
  });

    AppRegistry.registerComponent("Password", () => Password);