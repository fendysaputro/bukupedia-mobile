import React, { Component } from "react";
import {  AppRegistry, Text, ScrollView, FlatList,
          WebView,StyleSheet, View, TouchableOpacity, 
          Button, Dimensions, PanResponder, Animated,
          TouchableWithoutFeedback, Easing, BackAndroid,
          BackHandler, Platform, Keyboard } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth, COLOR_SECONDARY } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getProductDetail } from '../services/FetchProduct';
import { getPaymentMethod } from '../services/FetchPayment';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

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

    constructor (props) {
        super(props);
        this.state = {
            data: {}, 
            isDataLoaded: false
        };
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        console.log(state.params.url);
        getProductDetail(state.params.url)
            .then((res) => {
                this.setState({ data: res.d, isDataLoaded: true });
                console.log(this.state.data);
        });
    }

    // _renderButton = (text, onPress) => (
    //     <TouchableOpacity onPress={onPress}>
    //       <View style={styles.button}>
    //         <Text>{text}</Text>
    //       </View>
    //     </TouchableOpacity>
    //   );

	render() {
        let screenHeight = Dimensions.get('window').height;
        let sreadyStock = '';
        if (this.state.data.stock > 0) {
            sreadyStock = 'Buku ready stock di kirim dalam waktu '+this.state.data.estimated_shipment;
        }else{
            sreadyStock = 'Buku tidak tersedia'
        }
		return (
			<View style={styles.root}>
                <View style={{ height: (screenHeight - 100), borderColor: 'green', borderWidth: 0 }}>
                    <ScrollView>
                        <View style={styles.box1}>
                            <Image 
                                width={200}
                                source={{uri: this.state.data.image}}
                            />
                        </View>
                        <Text style={styles.textRegister}>  </Text>
                        <View style={styles.box2}>
                            <Text style={styles.itemTitle}>{this.state.data.title}</Text>
                            <Text style={styles.itemAuthor}> {this.state.data.authors}</Text>
                            <Text style={styles.itemPrice}>Rp. {this.state.data.price}</Text>
                        </View>
                        <Text style={styles.textRegister}>  </Text>
                        <View style={styles.box3}>
                            <FlatList
                                data={[
                                    {key: sreadyStock},
                                    {key: 'Jaminan buku asli'},
                                    {key: 'Transaksi 100% aman'}
                                ]}
                                renderItem={({item}) => <Text style={styles.itemStock}>{'\u2022 ' + item.key}</Text>}
                                />
                        </View>
                        <Text style={styles.textRegister}>  </Text>
                        <View style={styles.box3}>
                            <Text>Deskripsi</Text>
                            <Text>{this.state.data.desc}</Text>
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.wishList}
                    onPress={() => {console.log("pressed")}}>
                        <Image 
                            source={require('../styles/icon/wishlist.png')}
                        />
                </TouchableOpacity>
                <View style={[styles.footer]}>
                    <TouchableOpacity style={styles.image}
                        onPress={() => this.props.navigation.navigate()}>
                        <Image
                            source={require('../styles/icon/keranjang-aktif.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOne}
                        onPress={() => this.props.navigation.navigate("Basket")}>
                        <Text style={styles.textOne}>
                            { "Tambahkan ke\n Keranjang" }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTwo}
                        onPress={() => this.props.navigation.navigate("Login", {})}>
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
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    },
    box1: {
        flex: 1,
        top: 20,
        alignItems: 'center'
    },
    box2: {
        flex: 1,
        top: 20,
        paddingLeft: 20,
        paddingRight: 10
    },
    box3: {
        flex: 1,
        top: 20,
        paddingLeft: 20,
        paddingRight: 10
    },
    itemTitle: {
        fontSize: 14,
        color: '#1791c5',
        fontWeight: '600',
    },
    itemAuthor: {
        fontWeight: '600',
        fontSize: 11,
        color: '#49aedd'
    },
    itemPrice: {
        fontSize: 12,
        color: '#e7ad46',
        fontWeight: '600',
    },
    itemStock: {
        fontSize: 10,
        fontWeight: '600',
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
    },
    modal:{
        height: 300
    },
    bottomModal:{
        justifyContent: "flex-end",
        margin: 0
    }
})

AppRegistry.registerComponent("ProductDetail", () => ProductDetail);