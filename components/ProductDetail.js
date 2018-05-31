import React, { Component } from "react";
import {  AppRegistry,
		  Text, 
          View, Image, TouchableOpacity, Button } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        headerRight: (
            <HeaderButtons 
                IconComponent={MaterialIcons} 
                OverflowIcon={<MaterialIcons name="more-vert" size={24} color="white" />}
                iconSize={24} 
                color="white">
                <HeaderButtons.Item 
                    title="search" 
                    iconName="search" 
                    onPress={() => navigation.navigate("Login")} 
                />
                <HeaderButtons.Item 
                    show="never"  
                    onPress={() => navigation.navigate("Login")} 
                />
            </HeaderButtons>
        ),
    })
	render() {
		const { navigation } = this.props;
    	const url = navigation.getParam('url', '');
    	console.log(url);
		return (
			<View>
				<Text>{url}</Text>
                <Text>This is Detail Product</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent("ProductDetail", () => ProductDetail);