import React, { Component } from "react";
import {  AppRegistry,
		  Text, 
          View } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";

export default class ProductDetail extends Component {

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