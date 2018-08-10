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
    
      async retrieveUser() {
        try {
          const retrievedUser =  await AsyncStorage.getItem('user');
          const user = JSON.parse(retrievedUser);
          return user;
        } catch (error) {
          console.log(error.message);
        }
        return
      }
    
      componentDidMount() {
        AsyncStorage.getItem('id_token').then((token) => {
          this.setState({ hasToken: token !== null, isLoaded: true });
          if (this.state.hasToken) {
            AsyncStorage.getItem('user').then((user) => {
              var userObj = JSON.parse(user);
              this.setState(userObj);
            })
          }else{
            this.replaceScreen();
          }
        });
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
                    <Text>
                      {this.state.user.name}
                    </Text>
                    <Text>
                      {this.state.user.email}
                    </Text>
                    <Text>
                      {this.state.user.birth_date}
                    </Text>
                    <Text>
                      {this.state.user.gender}
                    </Text>
                  </View>   
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
        padding: 10,
        backgroundColor: 'white' 
      },
    text: {
        color: 'blue',
        textAlign: 'justify',
        alignItems: 'center'        
    }
});