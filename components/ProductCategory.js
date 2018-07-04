import React, { Component } from "react";
import {  AppRegistry,
          Text, 
          ScrollView,
          FlatList,
          WebView,
          StyleSheet, View, TouchableOpacity, Button, Dimensions } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth, COLOR_SECONDARY } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider'; 
import { getSubCategory } from '../services/FetchCategory';

export default class ProductCategory extends Component {
    static navigationOptions = {
    headerTintColor : 'white',
      title: 'Akun',
      headerStyle: {
        backgroundColor: COLOR_PRIMARY,
        elevation: null,
      },
      headerTitleStyle: {
        color: 'white',
        width: '90%',
        textAlign: 'center'
      },
    }

    constructor (props){
        super(props);
        this.state = {
            data: {},
            isDataLoaded: false
        };
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        console.log(state.params.url);
        getSubCategory(state.params.url)
            .then((res) => {
                this.setState({ data: res.d, isDataLoaded: true });
                console.log(this.state.data);
        });
    }

    render (){
        return(
            <View>
                <Text>This is ProductCategory</Text>
            </View>
        )
    }
}