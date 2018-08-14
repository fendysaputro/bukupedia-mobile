import React, { Component } from 'react';
import { AppRegistry, 
    StyleSheet, Text, View, 
    Image, Search, TextInput, 
    TouchableOpacity, ScrollView,
    AsyncStorage,
    Alert } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import Login from "../components/Login";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Constants } from 'expo';

export default class NewRating extends Component {
    static navigationOptions = {
        title: 'Rating',
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

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render (){
        return (
            <View style={styles.container}>
                <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "OK", "Good", "Great"]}
                    defaultRating={5}
                    size={40}
                />
                <TouchableOpacity style={styles.submitButton}
                    onPress = {() => this.props.navigation.navigate("ReviewOrder") }>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5%',
      backgroundColor: '#ecf0f1',
    },
    submitButton: {
        backgroundColor: COLOR_PRIMARY,
        padding: 10,
        margin: 15,
        height: 40,
        marginLeft: "10%",
        width: 290
     },
    tite: {
      fontSize: 24,
      textAlign: 'center',
      color: '#34495e'
    },
    submitButtonText:{
        color: "white",
        marginTop: 0,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 15
     },
  });

AppRegistry.registerComponent("NewRating", () => NewRating);