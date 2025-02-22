import React, { Component } from "react";
import {  AppRegistry, Text, ScrollView, FlatList,
          StyleSheet, View, TouchableOpacity, ToastAndroid, 
          Button, Dimensions, AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getProductDetail } from '../services/FetchProduct';
import Image from 'react-native-scalable-image';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

var { height, width } = Dimensions.get('window');
import {addShoppingCart, getListShoppingCart} from '../services/FetchShoppingCart';
import NumericInput from 'react-native-numeric-input';
import IconBadge from 'react-native-icon-badge';
import PropTypes from 'prop-types';
import { API, CART } from '../components/Global';


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
                    onPress={() => alert("Searching")} 
                />
                <HeaderButtons.Item
                    title="akun" 
                    show="never"  
                    // onPress={() => navigation.navigate("Login")} 
                />
                <HeaderButtons.Item
                    title="profil"
                    show="never"
                    // onPress={() => navigation.navigate("Login")}
                />
                <HeaderButtons.Item
                    title="point"
                    show="never"
                    // onPress={() => navigation.navigate("Login")}
                />
                <HeaderButtons.Item
                    title="setting"
                    show="never"
                    // onPress={() => navigation.navigate("Login")}
                />
            </HeaderButtons>
        )
    })

    static propTypes = {
        MainViewStyle: PropTypes.object,
        IconBadgeStyle: PropTypes.object,
        Hidden: PropTypes.bool,
      };
      static defaultProps = {
        MainViewStyle: {},
        IconBadgeStyle: {},
        Hidden: true,
      };

    constructor (props) {
        super(props);
        this.state = {
            data: {}, 
            isDataLoaded: false,
            dialogShow: false,
            quantity: 1,
            user: {},
            qty_cart: 0, 
            isLogined: false
        };
        this.doAddToBasket = this.doAddToBasket.bind(this);
    }

    getQtyCart(token, callback) {
        var self = this;
            self.setState({qty_cart: []});
        const URL = API + CART + '?token=' + token;
        fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
            var resObj = responseJson;
                if ((responseJson.s)) {
                    callback(resObj.d.length);
                }
            })
            .catch((error) => {
                console.log(error);
            })  
    }

    componentWillMount(){
        AsyncStorage.getItem('id_token').then((tokenInProduct) =>{
            if (tokenInProduct != null){
                this.setState({isLogined:true});
            }
        })
    }

    componentDidUpdate() {
        console.log(this.state.isLogined);
    }

    componentDidMount() {
        var self = this;
        AsyncStorage.getItem('user').then((sUser) => {
            var userObj = JSON.parse(sUser);
            self.setState({ user: userObj });
        });
        AsyncStorage.getItem('id_token').then((token) => {
            self.setState({ token: token });
            self.getQtyCart(this.state.token, function(qty){
                self.setState({ qty_cart: qty });
            });
        });
        const { state } = this.props.navigation;
        getProductDetail(state.params.url)
            .then((res) => {
                self.setState({ data: res.d[0], isDataLoaded: true });
                console.log(JSON.stringify(res.d[0]));
        });
    }

    showFadeAnimationDialog = () => {
        AsyncStorage.getItem('id_token').then((detailToken) => {
            if (detailToken == null){
                this.props.navigation.navigate('Login');       
            } else {
                this.fadeAnimationDialog.show();
            }
        });    
    }

    hideFadeAnimationDialog = () => {
        this.fadeAnimationDialog.hide();
    }

    doAddToBasket(params) {
        addShoppingCart(params, this.state.token)
            .then((res) => {
                if (res.s){
                    // this.handleOnCloseButton();
                    // this.props.navigation.goBack();
                    ToastAndroid.show('Pesanan anda berhasil masuk ke keranjang', ToastAndroid.LONG);
                    this.props.navigation.navigate('Main');
                }
            }); 
            return 
            this.props.navigation.navigate("Login");
    }

    handleOnCloseButton = () =>{
        this.props.navigation.goBack();
        this.props.navigation.navigate("Basket");
    }

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
                            <Text style={styles.itemPrice}>
                                {new Intl.NumberFormat('en-GB', { 
                                style: 'currency', 
                                currency: 'IDR',
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                                }).format(this.state.data.price)}
                            </Text>
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
                <View style={[styles.footer]}>
                    <TouchableOpacity style={styles.image}
                        onPress={() => this.handleOnCloseButton()}>
                        <IconBadge
                            MainElement={
                                <Image
                                    source={require('../styles/icon/keranjang-aktif.png')}
                                    style={{aspectRatio: 0.9, width: 30, height: 30, resizeMode: 'contain'}}
                                />
                            }
                            BadgeElement={
                                <Text style={{color:'#FFFFFF'}}>
                                    {this.state.qty_cart}
                                </Text>
                            }
                            IconBadgeStyle={
                                {   
                                    left:40,
                                    width:20,
                                    height:20,
                                    backgroundColor: '#3bafff'
                                }
                            }
                            Hidden={this.state.BadgeCount=0}
                        />                  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOne}
                         onPress={this.showFadeAnimationDialog}> 
                        <Text style={styles.textOne}>
                            Tambahkan ke Keranjang
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTwo}
                        onPress={() => this.doAddToBasket({
                            user_id:this.state.user.user_id,
                            product_id: this.state.data.id,
                            quantity: this.state.quantity
                            })}>
                        <Text style={styles.textTwo}>
                            Beli
                        </Text>
                    </TouchableOpacity> 
                </View>
                <PopupDialog
                    ref={(fadeAnimationDialog) => {
                        this.fadeAnimationDialog = fadeAnimationDialog;
                    }}
                    dialogTitle={<DialogTitle title={this.state.data.title} />}>

                    <View style={styles.dialogContentView}>
                        <Button
                            onPress={() => this.doAddToBasket({
                                user_id:this.state.user.id,
                                product_id: this.state.data.id,
                                quantity: this.state.quantity
                                })}
                            color="orange"
                            title="Tambahkan ke keranjang">
                        </Button>
                    </View>
                    <View style={styles.box4}>
                        <Image 
                            width={70}
                            height={150}
                            source={{uri: this.state.data.image}}
                        />
                    </View>
                    <View style={styles.numberItem}>
                        <Text style={styles.itemTitle}>{this.state.data.title}</Text>
                        <Text style={styles.itemPrice}>Rp. {this.state.data.price}</Text>
                        <NumericInput
                            onChange={value => this.setState({quantity: value})} 
                        />
                        <Text style={{fontSize: 10}}>Harga belum termasuk ongkir</Text>            
                    </View>
                </PopupDialog>
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
    box4: {
        flex: 1,
        top: 20,
        left: 80,
        alignItems: 'flex-start'
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
    itemNewTitle: {
        flex: 1,
        fontSize: 14,
        color: '#1791c5',
        fontWeight: '600',
        top: -100,
        left: 130,
        alignItems: 'flex-start',
    },
    itemNewPrice: {
        flex: 1,
        fontSize: 12,
        color: '#e7ad46',
        fontWeight: '600',
        top: -80,
        left: 130,
        alignItems: 'flex-start',
    },
    numberItem: {
        flex: 1,
        top: -100,
        left: 200,
        alignItems: 'flex-start'
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
    modal:{
        height: 300
    },
    bottomModal:{
        justifyContent: "flex-end",
        margin: 0
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      dialogContentView: {
        position:"absolute",
        alignItems: 'center',
        justifyContent: 'flex-end',
        width:360,
        bottom:30
      },
      IconBadge: {
        position: 'absolute',
        top: 1,
        right: 1,
        minWidth: 20,
        height: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000',
      },
});

AppRegistry.registerComponent("ProductDetail", () => ProductDetail);