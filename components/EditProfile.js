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
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import { CheckBox } from "react-native-elements";
import Login from "../components/Login";
import getAddress from "../services/FetchAddress";
import { API, ADDRESS, PROFILE } from '../components/Global';
import {postEditProfile} from '../services/FetchEditProfile';
import ReviewOrder from '../components/ReviewOrder';

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
          user: {}
        }
      }
    
      componentDidMount() {
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
          const URL3 = API + PROFILE + '?token=' + token;
          console.log("ini edit profile");
          console.log(URL3);
          fetch(URL3)
            .then((response) => response.json())
            .then((responseJson) => {
              var profileObj = responseJson;
              if ((profileObj.s)){
                self.setState({user: profileObj.d});
              }
            })
        })
      }

      onEditProfile(params){
        var self = this;
        AsyncStorage.getItem('id_token').then((token) => {
          self.setState({token:token}); 
        });
        
        postEditProfile(params, this.state.token)
          .then((res) => {
            console.log("ini resUser");
            console.log(res);
            if (res.s){

            }
          })
      }

    render(user){
      return(
        <ScrollView contentContainer={styles.contentContainer}> 
          <View style = {styles.container}>
            {
            <TouchableOpacity
                key = '1'
                style = {styles.container}
                onPress = {() => this.props.navigation.navigate("EditProfile")}>
                  <Image source={require('../styles/icon/edit-foto.png')} style={{ width: 24, height: 24, alignItems: 'flex-start' }}/> 
                    <Text style={styles.text}>
                        Edit Foto
                    </Text>
                  <View style={styles.containerTwo}>
                    <Text style={styles.textLogin}>Nama</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        value={this.state.user.name}
                        onChangeText = {(text) => this.setState({name: text})}
                      />
                    
                    <Text style={styles.textLogin}>Email</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        value={this.state.user.email}
                        onChangeText = {(text) => this.setState({name: text})}
                      />

                    <Text style={styles.textLogin}>Birth_Date</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        value={this.state.user.birth_date}
                        onChangeText = {(text) => this.setState({name: text})}
                      />

                    <Text style={styles.textLogin}>Phone</Text>
                      <TextInput style={styles.input}
                        placeholderTextColor="#696969"
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        value={this.state.user.phone}
                        onChangeText = {(text) => this.setState({name: text})}
                      />
                  </View>
                  <TouchableOpacity style = {styles.submitButton}
                    onPress = {() => this.onEditProfile()}>
                    <Text style={styles.submitButtonText}>Simpan</Text>
                  </TouchableOpacity>   
            </TouchableOpacity>
            }
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