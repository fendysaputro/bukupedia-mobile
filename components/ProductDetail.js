import React, { Component } from "react";
import {  AppRegistry,
		  Text, 
          StyleSheet, View, Image, TouchableOpacity, Button, Dimensions } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth, COLOR_SECONDARY } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Basket from "../components/Basket";

var { height, width } = Dimensions.get('window');

export default class ProductDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Detail Produk",
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center'
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
                    title="akun" 
                    show="never"  
                    onPress={() => navigation.navigate("Login")} 
                />
                <HeaderButtons.Item
                    title="profil"
                    show="never"
                    onPress={() => navigation.navigate("Login")}
                />
                <HeaderButtons.Item
                    title="point"
                    show="never"
                    onPress={() => navigation.navigate("Login")}
                />
                <HeaderButtons.Item
                    title="setting"
                    show="never"
                    onPress={() => navigation.navigate("Login")}
                />
            </HeaderButtons>
        )
    })
	render() {
		const { navigation } = this.props;
    	const url = navigation.getParam('url', '');
    	console.log(url);
		return (
			<View style={styles.container}>
				<Text>{url}</Text>  
                <TouchableOpacity style={styles.wishList}
                    onPress={() => {console.log("pressed")}}>
                        <Image 
                            source={require('../styles/icon/wishlist.png')}
                        />
                </TouchableOpacity>
                <View style={[styles.footer]}>
                    <TouchableOpacity style={styles.image}>
                        <Image
                            source={require('../styles/icon/keranjang-aktif.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOne}
                        onPress={() => navigation.navigate("Basket")}>
                        <Text style={styles.textOne}>
                            { "Tambahkan ke\n Keranjang" }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTwo}>
                        <Text style={styles.textTwo}>
                            Beli
                        </Text>
                    </TouchableOpacity>
                </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        backgroundColor: COLOR_PRIMARY
    },
    textOne: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginLeft: 2,
        justifyContent: 'center'   
    },
    textTwo: {
        fontSize: 20,
        color: 'white',
        top: 2,
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonOne: {
        height: 40,
        position: 'absolute',
        bottom: 5,
        width: 130,
        left: '30%',
        backgroundColor: 'orange'
    },
    buttonTwo: {
        height: 40,
        position: 'absolute',
        bottom: 5,
        width: 100,
        left : '70%',
        backgroundColor: '#3bafff'
    },
    image:{
        position: 'absolute',
        bottom: 5,
        left: '5%',
        width: 80,
        height: 45
    },
    wishList:{
        position: 'absolute',
        right: '5%',
        top: 20,
        width: 47,
        height: 47
    }
})

AppRegistry.registerComponent("ProductDetail", () => ProductDetail);