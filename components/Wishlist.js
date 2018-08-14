import React, { Component } from 'react';
import { AppRegistry, 
    StyleSheet, Text, View, 
    Image, Search, TextInput, 
    TouchableOpacity, ScrollView,
    AsyncStorage,
    Alert } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import Login from "../components/Login";

export default class Wishlist extends Component {
    static navigationOptions = {
        title: 'Wishlist',
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

    render (){
        return (
            <View style = {styles.container}>
                <Text>
                    This is wislist
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

AppRegistry.registerComponent("Wishlist", () => Wishlist);