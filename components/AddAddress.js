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
import { getAddress, postCreateAddress} from "../services/FetchAddress";
import { API, ADDRESS, PROFILE, PROVINCE } from '../components/Global';
import ReviewOrder from '../components/ReviewOrder';
import Address from '../components/Address';
import { getProvince } from '../services/FetchListProvince';
import { getRegencyByProvinceId } from '../services/FetchListRegency';
import { getSubdistrictByRegencyId, getSubdistrict } from '../services/FetchListSubdistrict';
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

    constructor (props){
        super(props);
        this.state = {
            province: [],
            regencyByProvincesVal: [],
            subdistrictByRegenciesVal: [],
            getSubdistrictValId: [],
            label: '',
            name: '',
            company: '',
            division: '',
            phone: '',
            address: '',
            isDataLoaded: false,
            checked: false
        };
        this.onChangeTextProvince = this.onChangeTextProvince.bind(this);
        this.onChangeTextRegency = this.onChangeTextRegency.bind(this);
        this.onChangeTextSubdistrict = this.onChangeTextSubdistrict.bind(this);
        this.doSaveAddress = this.doSaveAddress.bind(this);
    }

    doSaveAddress(params) {
        console.log("params");
        postCreateAddress(params, this.state.token) 
            .then((res) => {
                Alert.alert(
                    'Message',
                    'Add Address success',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate("AddressMain"),}
                    ],
                    { cancelable: false }
                )
            })
    }

    componentDidMount(){
        var self = this;
        getProvince()
            .then((res) => {
                self.setState({ province: res.d });
            });
        AsyncStorage.getItem('id_token').then((token) => {
            self.setState({token:token});
        });
        AsyncStorage.getItem('user').then((user) => {
            console.log(user);
            var userObj = JSON.parse(user);
            self.setState({user_id:userObj.user.id});
            console.log('self.state.user_id');
            console.log(self.state.user_id);
        })
      }    

    onChangeTextProvince (text) {
        var provi;
        provi = this.state.province.find(prov => 
            prov.name === text
        );
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

    onChangeTextSubdistrict (text){
        var  subDist = this.state.subdistrictByRegenciesVal.find(district => 
            district.value === text
        );
        this.setState({subdistrict_id: subDist.id});
    }

    updateRef(province, ref){
        this[province] = ref;
    }

    render (){
        let { province, regencyByProvinces, subdistrictByRegencies } = this.state;

        let provinceVal = [];
            province.forEach(function(prov){
            provinceVal.push({id: prov.id, value: prov.name});
        });
        let textStyle = [
            styles.text,
            styles[province],
            styles[regencyByProvinces],
            styles[subdistrictByRegencies],
            styles[subdistrictByRegencies]
        ]
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
                    onChangeText={this.onChangeTextSubdistrict}
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
                    onPress = {() => this.doSaveAddress(this.state)}>
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
    dropdownStyle: {
        width: 285,
        alignSelf: "flex-start",
        marginLeft: "10%",
    }
});

