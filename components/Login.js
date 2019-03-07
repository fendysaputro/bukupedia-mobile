import React, { Component } from "react";
import { StyleSheet, 
        Text, 
        View, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        AsyncStorage,
        ScrollView } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import Button from "react-native-button";
import { CheckBox } from "react-native-elements";
import { postLogin } from "../services/FetchLogin";
import Account from "../components/Account";
import WelcomeAccount from "../components/WelcomeAccount";
import Password from "./Password";
import SafeAreaView from "react-native-safe-area-view";
import { API, PROFILE } from "./Global";
import { getProfile } from "../services/FetchProfile";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null,
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center'
        }
      }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: false,
            trueCheckBoxIsOn: true,
            falseCheckBoxIsOn: false
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

    onLogin(params){
        postLogin(params)
            .then((res) => {
                AsyncStorage.setItem('id_token', res.token);

                AsyncStorage.getItem('id_token').then((token) => {
                    var self = this;
                    const URL = API + PROFILE + '?token=' + token;
                    fetch(URL)
                        .then((res) => res.json())
                        .then((responseJson) => {
                            var resp = responseJson;
                            if ((responseJson.s)) {
                                AsyncStorage.setItem('user', JSON.stringify(resp.d));
                                console.log('ini user');
                                console.log(resp.d);
                            }
                        }) 
                });

                // AsyncStorage.getItem('user').then((Suser) => {
                //     var userObj = JSON.parse(Suser);
                //     this.setState({user: userObj});
                //     console.log('ini user: ');
                //     console.log(this.state.user);
                // })

                // this.props.navigation.navigate("WelcomeAccount");
                this.props.navigation.navigate("Main");
            });
    }

    render() {
        return(
            <SafeAreaView>
            <ScrollView contentContainer={styles.contentContainer}>
            <View style={styles.container}>
                <TouchableOpacity style = {styles.buttonStyleFb}>
                    <Text style = {styles.submitButtonText}>Login With Facebook</Text>
                        <Image 
                            style = {styles.image}
                            source={require('../styles/icon/facebook.png')} 
                        />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonStyleGoogle}>
                    <Text style = {styles.submitButtonText}>Login With Google+</Text>
                        <Image
                            style = {styles.image}      
                            source={require('../styles/icon/google-plus.png')} 
                        /> 
                </TouchableOpacity>
                <Text style={styles.lineText}>
                    ────────  Atau  ────────
                </Text>
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
                    secureTextEntry = { true }
                    onChangeText = {(text) => this.setState({password: text})}
                />
                <View style = {styles.check}>
                    <CheckBox 
                        title= 'Ingat Saya'
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked})}
                    />
                    <Button style = {styles.buttonLine}
                        onPress={() => this.props.navigation.navigate("Password")}>
                        Lupa Password?
                    </Button>
                </View> 
                <Button style = {styles.submitButton}
                    onPress = {() => this.onLogin(this.state)}>
                        Masuk
                </Button>
            </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
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

