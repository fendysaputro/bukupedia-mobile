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
import { getProductLink, getProductByCategory } from '../services/FetchCategory';
import GridView from 'react-native-super-grid';

export default class ProductCategory extends Component {
    static navigationOptions = {
    headerTintColor : 'white',
      title: 'Kategori Produk',
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
        let link =''
        getProductLink(state.params.url)
            .then((res) => {
                console.log(res.d[0].product_link);
            })
        // getProductByCategory(state.params.url)
        //     .then((res) => {
        //         this.setState({ data: res.d, isDataLoaded: true });
        //         console.log(this.state.data);
        //     })
    }

    render (){
        // console.log(this.state.getProductByCategory)
        return(
            <View>
                <Text>This is ProductCategory</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    },
    box3: {
        flex: 1,
        top: 20,
        paddingLeft: 20,
        paddingRight: 10
    }
})