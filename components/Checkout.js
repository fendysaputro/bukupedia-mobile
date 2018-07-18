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
import { submitButton, container } from "../components/Register";
import { input, textLogin } from "../components/Orders";
import Login from "../components/Login";

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


    render(){
        return(
            <View style={styles.container}>
            <Text>Beli tanpa daftar</Text>
                <Text style={textLogin}>Email</Text>
                <TextInput style={styles.input}
                    placeholder = "Email"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({email: text})}
                />
                <Text style={textLogin}>Nama</Text>
                <TextInput style={styles.input}
                    placeholder = "Nama"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={textLogin}>Perusahaan</Text>
                <TextInput style={styles.input}
                    placeholder = "Perusahaan"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={textLogin}>Divisi</Text>
                <TextInput style={styles.input}
                    placeholder = "Divisi"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={textLogin}>Nomor Handphone</Text>
                <TextInput style={styles.input}
                    placeholder = "Nomor Handphone"
                    placeholderTextColor = "#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({phone: text})}
                />
                <Text style={textLogin}>Kecamatan/Kabupaten/Provinsi</Text>
                <TextInput style={styles.input}
                    placeholder = "Kecamatan/Kabupaten/Provinsi"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={textLogin}>Kode Pos</Text>
                <TextInput style={styles.input}
                    placeholder = "Kode Pos"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={textLogin}>Alamat Lengkap</Text>
                <TextInput style={styles.input}
                    placeholder = "Alamat Lengkap"
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Button style = {styles.submitButton}
                    onPress = {() => this.props.navigation.navigate("Login") }
                    title = "Lanjutkan">
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "orange"
    },
    buttonContinue: {
        backgroundColor: COLOR_PRIMARY
    },
    text: {
        fontSize: 15,
        color : "white"
    }
})