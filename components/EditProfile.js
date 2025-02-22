import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput,
  TextInputEndEditingEventData,
  ScrollView,
  View,
  Button, 
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { API, PROFILE } from '../components/Global';
import {postEditProfile} from '../services/FetchEditProfile';
import {WelcomeAccount} from '../components/WelcomeAccount';

export default class EditProfile extends Component {
    static navigationOptions = {
      title: 'Edit Profil',
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

    constructor (props) {
        super(props);
        this.state = {
          selected: false
        }
      }
    
      componentDidMount() {
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
          const URL3 = API + PROFILE + '?token=' + token;
          fetch(URL3)
            .then((response) => response.json())
            .then((responseJson) => {
              var profileObj = responseJson;
              if ((profileObj.s)){
                self.setState(profileObj.d); 
                // self.setState({name: profileObj.d.name});
              }
            })
        })
      }

      handleBack(){
        var newParams = this.state;
        this.props.navigation.navigate("Main");
      }

      // goBack() {
      //   // const { navigation } = this.props;
      //   // navigation.goBack();
      //   // navigation.state.params.onUpdate({ selected: true });
      //   this.navigation.state.params.goBack();
      // }

      onEditProfile(params){
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
          self.setState({token:token}); 
        });

        var params = this.state; // this.state merupakan isi dari profileObj.d
        
        postEditProfile(params, this.state.token)
          .then((res) => {
            if (res.s){
              Alert.alert(
                'Message',
                res.m,
                [
                    {text: 'OK', onPress: () => this.handleBack()},
                ],
                { cancelable: false }
            ) 
            }
          })
      }

    render(user){
      return(
        <ScrollView contentContainer={styles.contentContainer}> 
          <View style = {styles.container}>
            <TouchableOpacity
                key = '1'
                style = {styles.container}
                onPress = {() => this.props.navigation.navigate("EditProfile")}>
                  <Image source={require('../styles/icon/edit-foto.png')} style={{ width: 24, height: 24, alignItems: 'flex-start' }}/> 
                    <Text style={styles.text}>
                        Edit Foto
                    </Text>
            </TouchableOpacity>

                  <View style={styles.containerTwo}>
                    <Text style={styles.textLogin}>Nama</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        defaultValue={this.state.name}
                        onChangeText = {(text) => this.setState({name: text})}
                      />
                    
                    <Text style={styles.textLogin}>Email</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        defaultValue={this.state.email}
                        onChangeText = {(text) => this.setState({email: text})}
                      />

                    <Text style={styles.textLogin}>Tanggal Lahir</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        keyboardType="numeric"
                        maxLength={12}
                        defaultValue={this.state.birth_date}
                        onChangeText = {(text) => this.setState({birth_date: text})}
                      />

                    <Text style={styles.textLogin}>Jenis Kelamin</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        defaultValue={this.state.gender}
                        onChangeText = {(text) => this.setState({gender: text})}
                      />

                    <Text style={styles.textLogin}>No Handphone</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        keyboardType="numeric"
                        maxLength={12}
                        defaultValue={this.state.phone}
                        onChangeText = {(text) => this.setState({phone: text})}
                      />

                    <Text style={styles.textLogin}>Alamat</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        defaultValue={this.state.address}
                        onChangeText = {(text) => this.setState({address: text})}
                      />

                  </View>
                  <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.onEditProfile()}>
                    <Text style={styles.submitButtonText}>Simpan</Text>
                  </TouchableOpacity>   
          </View>
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
        alignItems: 'center',
        top: 5
    },
    containerTwo: {
        flex: 1,
        alignItems: 'center', 
      },
    text: {
        color: 'blue',
        textAlign: 'justify',
        alignItems: 'center'        
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
   submitButtonText:{
    color: "white",
    marginTop: -4,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 15
 },
});