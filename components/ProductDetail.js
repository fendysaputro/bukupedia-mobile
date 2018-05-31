import React, { Component } from "react";
import {  AppRegistry,
		  Text, 
          View, Image, TouchableOpacity, Button } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";

export default class ProductDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Detail Produk",
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center',
          color: 'white'
        },
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style={{marginTop:2, width:24, height:24}}>
                <Image
                    source={require('../styles/icon/menu.png')}
                />
            </TouchableOpacity>,
        Button:
            <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style={{marginTop:2, marginLeft:10, width:24, height:24}}>
                <Image
                    source={require('../styles/icon/searchhh.png')}
                />
            </TouchableOpacity>
    })
	render() {
		const { navigation } = this.props;
    	const url = navigation.getParam('url', '');
    	console.log(url);
		return (
			<View>
				<Text>{url}</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent("ProductDetail", () => ProductDetail);