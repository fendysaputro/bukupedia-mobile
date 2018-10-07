import React, { Component } from 'react';
import { AppRegistry, 
    StyleSheet, Text, View, 
    Image, Search, TextInput, 
    TouchableOpacity, ScrollView,
    AsyncStorage,
    Alert } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import ContentFormFaq from "../components/ContentFormFaq";
import HowToPay from "../components/HowToPay";
import HowToShop from "../components/HowToShop";

export default class Content extends Component{
    static navigationOptions = {
        title: 'Bantuan',
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

    state = {
        list: [
          {
            id: 0,
            title: 'Bagaimana Cara untuk Membeli?',
            link: 'HowToShop'
          },
          {
            id: 1,
            title: 'Bagaimana Cara untuk Membayar?',
            link: 'HowToPay'
          },
          {
            id: 2,
            title: 'Apa itu Konten FAQ?',
            link: 'ContentFormFaq'
          }
        ]
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style = {styles.container}>
                {
                    this.state.list.map((item, index) => (
                        <TouchableOpacity
                        key = {item.id}
                        style = {styles.containerTwo}
                        onPress = {() => this.props.navigation.navigate(item.link)}
                        >
                        <Text style = {styles.text}>
                            {item.title}
                        </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#EDF8FE"
    },
    containerTwo: {
      padding: 10,
      marginTop: 3,
      backgroundColor: 'white' 
    },
    text: {
        color: 'black',
        textAlign: 'left',
        marginLeft: '5%'
    }
})

AppRegistry.registerComponent("Content", () => Content);