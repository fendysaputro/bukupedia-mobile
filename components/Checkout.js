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
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { CheckBox } from "react-native-elements";
import Login from "../components/Login";
import getAddress from "../services/FetchAddress";


export default class Checkout extends Component {
    static navigationOptions = {
      title: 'Checkout',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: COLOR_PRIMARY,
        elevation: null,
      },
      headerTitleStyle: {
        width: '90%',
        textAlign: 'center'
      },
      headerLeft: null
    }

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        getAddress().then((res) => {
            console.log(res);
        })
    }

    render(){
        return(
            <ScrollView contentContainer={styles.contentContainer}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.submitButtonText}>
                    Login jika sudah terdaftar
                </Text>
            </TouchableOpacity>
            <Text style={styles.textLogin}> Beli tanpa daftar </Text>
                <CheckBox style={styles.textLogin}
                    title = "pakai alamat perusahaan"
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked})}
                />
                <Text style={styles.textLogin}>Email</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({email: text})}
                />
                <Text style={styles.textLogin}>Nama</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Perusahaan</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Divisi</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Nomor Handphone</Text>
                <TextInput style={styles.input}
                    placeholderTextColor = "#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({phone: text})}
                />
                <Text style={styles.textLogin}>Kecamatan/Kabupaten/Provinsi</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Kode Pos</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Alamat Lengkap</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
            </View>
                <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.props.navigation.navigate("Login") }>
                    <Text style={styles.submitButtonText}>Lanjutkan</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
    container: {
      flex: 1,
      alignItems: "center"
    },
    textLogin: {
      fontSize: 15,
      textAlign: "left",
      alignSelf: "flex-start",
      marginLeft: "10%",
      marginTop: 0,
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
      marginLeft: "10%",
      width: 290
   },
   loginButton: {
        backgroundColor: "orange",
        padding: 10,
        margin: 15,
        height: 35,
        marginLeft: "10%",
        width: 290
   },
   submitButtonText:{
      color: "white",
      marginTop: -4,
      textAlign: "center",
      alignItems: "center",
      alignSelf: "center",
      fontSize: 15
   }
  });