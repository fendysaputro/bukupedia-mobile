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
  AsyncStorage, 
  Alert } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { CheckBox } from "react-native-elements";
import Login from "../components/Login";
import getAddress from "../services/FetchAddress";
import { API, ADDRESS, PROFILE, PROVINCE } from '../components/Global';
import ReviewOrder from '../components/ReviewOrder';
import Address from '../components/Address';
import { getProvince } from '../services/FetchListProvince';
import { Dropdown } from 'react-native-material-dropdown';

export default class AddAddress extends Component {
    static navigationOptions = {
        title: 'Tambah Alamat',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null,
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center'
        },
      }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         label: '',
    //         name: '',
    //         company: '',
    //         division: '',
    //         phone: '',
    //         subdistrict: '',
    //         regency: '',
    //         province: '',
    //         postcode: '',
    //         checked: false,
    //         trueCheckBoxIsOn: true,
    //         falseCheckBoxIsOn: false
    //     };
    // }

    constructor (props){
        super(props);
        this.handleOnTouchProvince = this.handleOnTouchProvince.bind(this);
        this.state = {
            province: {},
            isDataLoaded: false,
            checked: false
        };
    }

    render (){
        return(
            <ScrollView contentContainer={styles.contentContainer}>
            <View style={styles.check}>
                <CheckBox style={styles.check}
                    title= 'Gunakan alamat perusahaan'
                    fontSize= '10'
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked})}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textLogin}>Label</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({label: text})}
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
                    onChangeText = {(text) => this.setState({company: text})}
                />
                <Text style={styles.textLogin}>Divisi</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({division: text})}
                />
                <Text style={styles.textLogin}>Nomor Handphone</Text>
                <TextInput style={styles.input}
                    placeholderTextColor = "#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(number) => this.setState({phone: number})}
                />
                <Text style={styles.textLogin}>Alamat Lengkap</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({address: text})}
                />
                <Text style={styles.textLogin}>Kecamatan</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({subdistrict: text})}
                />
                <Text style={styles.textLogin}>Kabupaten</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({regency: text})}
                />
                <Text style={styles.textLogin}>Provinsi</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({province: text})}
                />
                <Text style={styles.textLogin}>Kode Pos</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({postcode: text})}
                />
            </View>
                <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.doSaveAddress("Address", this.state)}>
                    <Text style={styles.submitButtonText}>Simpan</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
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
   check: {
    backgroundColor: '#F1F3F2',
    start: "4%",
    alignSelf: 'flex-start',
    backgroundColor: 'transparent' 
    },
});
