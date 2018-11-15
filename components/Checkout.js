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
  AsyncStorage,
  BackHandler } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { CheckBox } from "react-native-elements";
import Login from "../components/Login";
import getAddressList from "../services/FetchAddress";
import getBanner from "../services/FetchBanner";
import ReviewOrder from '../components/ReviewOrder';
import { Dropdown } from 'react-native-material-dropdown';
import { API, ADDRESS } from '../components/Global';


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
      }
    }

    constructor(props) {
        super(props);
        this.state = {
            address: {
                name: '',
                address: '',
                company: '',
                division: '',
                id: '',
                label: '',
                phone: '',
                postcode: '',
                province: '',
                regency: '',
                status: '',
                subdistrict: ''
            }
        };
    }

    componentDidMount() {
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
            self.setState({token: token});
            const URL = API + ADDRESS + '?token=' + token;
            fetch(URL)
                .then((res) => {
                    var resp = JSON.parse(res._bodyText);
                    if ((resp.r) || (res.status == 200)) {
                        self.setState({address: resp.d[0]});
                    }
                });
            // getAddressList(token)
            //     .then((res) => {
            //         console.log(res);
            //     }) 
        });
    }    

    render(){
        console.log(this.state.address);
        return(
            <ScrollView contentContainer={styles.contentContainer}>
            <View style={styles.container}>
                <Text style={styles.textLogin}>Nama</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    value={this.state.address.name}
                    onChangeText = {(text) => this.setState({name: text})}
                />
                <Text style={styles.textLogin}>Perusahaan</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({company: text})}
                />
                <Text style={styles.textLogin}>Divisi</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    value={this.state.address.division}
                    onChangeText = {(text) => this.setState({division: text})}
                />
                <Text style={styles.textLogin}>Nomor Handphone</Text>
                <TextInput style={styles.input}
                    placeholderTextColor = "#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    value={this.state.address.phone}
                    onChangeText = {(text) => this.setState({phone: text})}
                />
                <Text style={styles.textLogin}>Alamat Lengkap</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    value={this.state.address.address}
                    onChangeText = {(text) => this.setState({address: text})}
                />
                <Text style={styles.textLogin}>Kode Pos</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    value={this.state.address.postcode}
                    onChangeText = {(text) => this.setState({postcode: text})}
                />
            </View>
                <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.props.navigation.navigate("ReviewOrder", {address:this.state.address}) }>
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
   },
   dropdownStyle: {
    width: 285,
    alignSelf: "flex-start",
    marginLeft: "10%",  
    }
  });