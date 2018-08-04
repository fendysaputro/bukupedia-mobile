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
import { API, ADDRESS } from '../components/Global';
import ReviewOrder from '../components/ReviewOrder';
import Address from '../components/Address';
import { getProvince } from '../services/FetchListProvince';
import { getRegencyByProvinceId } from '../services/FetchListRegency';
import { getSubdistrictByRegencyId } from '../services/FetchListSubdistrict';
import { Dropdown } from 'react-native-material-dropdown';


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
            checked: false,
            province: [],
            regencyByProvincesVal: [],
            subdistrictByRegenciesVal: [],
        };
    }

    componentDidMount() {
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
            const URL = API + ADDRESS + '?token=' + token;
            fetch(URL)  
                .then(function(res) {
                var resObj = JSON.parse(res._bodyText);
                console.log(res._bodyText);
                // if ((resObj.r) || (res.status == 200)) {
                //     self.setState({carts: resObj.d});
                // }
            })
        });
        getProvince()
            .then((res) => {
                self.setState({ province: res.d });
            });
    }    

    onChangeTextProvince (text) {
        console.log(text);
        var provi;
        provi = this.state.province.find(prov => 
            prov.name === text
        );
        console.log('provinceId: ');
        console.log(provi.id);
        getRegencyByProvinceId(provi.id)
            .then((res) => {
                this.setState({regencyByProvinces: [res.d]});
                let regencyByProvincesVal = [];
                res.d.forEach(function(reg){
                    regencyByProvincesVal.push({id: reg.id, value: reg.name});
                });
                this.setState({regencyByProvincesVal: regencyByProvincesVal});
            });
    }

    onChangeTextRegency (text) {
        console.log(text);
        var regenc;
        regenc = this.state.regencyByProvincesVal.find(regy => 
            regy.value === text
        );
        getSubdistrictByRegencyId(regenc.id)
            .then((res) => {
                this.setState({subdistrictByRegencies: [res.d]});
                let subdistrictByRegenciesVal = [];
                res.d.forEach(function(sub){
                    subdistrictByRegenciesVal.push({id: sub.id, value: sub.name});
                });
                this.setState({subdistrictByRegenciesVal: subdistrictByRegenciesVal});
            });
    }

    updateRef(province, ref){
        this[province] = ref;
    }


    render(){
        let { province, regencyByProvinces, subdistrictByRegencies } = this.state;

        let provinceVal = [];
            province.forEach(function(prov){
            provinceVal.push({id: prov.id, value: prov.name});
        });
        let textStyle = [
            styles.text,
            styles[province],
            styles[regencyByProvinces],
            styles[subdistrictByRegencies]
        ]
        return(
            <ScrollView contentContainer={styles.contentContainer}>
            <View style={styles.container}>
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
                    onChangeText = {(text) => this.setState({phone: text})}
                />
                <Text style={styles.textLogin}>Alamat Lengkap</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({address: text})}
                />
                <Text style={styles.textLogin}>Provinsi</Text>
                <View style={styles.dropdownStyle}>
                <Dropdown
                    onChangeText={this.onChangeTextProvince}
                    label='pilih provinsi'
                    data={provinceVal}
                />
                </View>
                <Text style={styles.textLogin}>Kabupaten</Text>
                <View style={styles.dropdownStyle}>
                <Dropdown 
                    onChangeText={this.onChangeTextRegency}
                    label='pilih kabupaten'
                    data={this.state.regencyByProvincesVal}
                />
                </View>
                <Text style={styles.textLogin}>Kecamatan</Text>
                <View style={styles.dropdownStyle}>
                <Dropdown 
                    label='pilih kecamatan'
                    data={this.state.subdistrictByRegenciesVal}
                />
                </View>
                <Text style={styles.textLogin}>Kode Pos</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#696969"
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({postcode: text})}
                />
            </View>
                <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.props.navigation.navigate("ReviewOrder") }>
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