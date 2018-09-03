import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text, 
  ScrollView,
  View,
  Button, 
  Dimensions,
  TouchableOpacity,
  FlatList,
  ListView,
  AsyncStorage } from "react-native";
import { Card, ButtonGroup } from 'react-native-elements'
import { COLOR_PRIMARY } from "../styles/common";
import { API, CART, ADDRESS, SHIPMENT_METHOD, SHIPPING_COST, PAYMENT_METHOD } from '../components/Global';
import Image from 'react-native-scalable-image';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { Dropdown } from 'react-native-material-dropdown';
import { PostOrderPayment } from '../services/FetchPayment';

export default class ReviewOrder extends Component {
    static navigationOptions = {
        title: 'Review Pesanan',
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

    constructor (props) {
        super(props);
        this.state = {
          items: [],
          address: {
            name: '',
            address: '',
            company: '',
            division: '',
            id: '',
            label: '',
            phone: '',
            postcode: '',
            province: '',
            regency: '',
            status: '',
            subdistrict: ''
          },
          couriers: [],
          shipmentCosts: [],
          shipmentCostsO: [],
          shipmentCost: 0,
          paymentMethods: [],
          paymentMethod: {}
        }
        this.onChangeTextKurir = this.onChangeTextKurir.bind(this);
        this.onChangeTextKurirCost = this.onChangeTextKurirCost.bind(this);
        this.onSelectPayment = this.onSelectPayment.bind(this);
        this.onSubmitOrder = this.onSubmitOrder.bind(this);
    }

    componentDidMount( ){
        var self = this;
        const { navigation } = this.props;
        const address = navigation.getParam('address', 'NO-address');
        this.setState({loading: true, address: address});
        const URL = API + PAYMENT_METHOD;
        fetch(URL)  
            .then(function(res) {
                var resObj = JSON.parse(res._bodyInit);
                if (resObj.r) {
                    resObj.d.map(function(payment) {
                        payment['label'] = payment.bank_name;
                        payment['value'] = payment.id;
                    })
                    self.setState({paymentMethods: resObj.d});
                }
            });
        AsyncStorage.getItem('user').then((user) => {
            var userObj = JSON.parse(user);
            this.setState({user: userObj.user});
        });
        AsyncStorage.getItem('id_token').then((token) => {
            self.setState({token: token});
            const URL = API + CART + '?token=' + token;
            fetch(URL)  
                .then(function(res) {
                var resObj = JSON.parse(res._bodyText);
                if ((resObj.r) || (res.status == 200)) {
                    self.setState({items: resObj.d});
                }else{
                    self.props.navigation.navigate('Login');
                }
            })
            
        });
        const URL3 = API + SHIPMENT_METHOD;
        fetch(URL3)
                .then((res) => {
                    var resp = JSON.parse(res._bodyText);
                    if (resp.r) {
                        self.setState({couriers: resp.d.couriers});
                    }
                });
    }

    onSubmitOrder() {
        var products = [];
        this.state.items.map(function(product){
            products.push({product_id: product.id, quantity: product.quantity});
        })
        var params = {user_id: this.state.user.id, bank_id: 
            this.state.paymentMethod.id, 
            courier_name: this.state.courier.name,
            courier_cost: this.state.shipmentCost,
            cust_name: this.state.address.name,
            cust_email: this.state.address.email,
            cust_company: this.state.address.company,
            cust_division: this.state.address.division,
            cust_phone: this.state.address.phone,
            cust_email: this.state.address.email,
            cust_address: this.state.address.address,
            subdistrict: this.state.address.subdistrict,
            regency: this.state.address.regency,
            province: this.state.address.province,
            postcode: this.state.address.postcode,
            order: products
        }
        console.log('params');
        console.log(JSON.stringify(params));
        PostOrderPayment(params)
            .then((res) => {
                console.log(res);
                this.props.navigation.navigate('Home');
            })
    }

    onChangeTextKurirCost(text) {
        var service = text.split(' ')[0];
        var cost = this.state.shipmentCostsO.find(cost => 
            cost.service === service
        );
        this.setState({shipmentCost: cost.cost[0].value});
    }

    onChangeTextKurir(text) {
        var self = this;
        var courier;
        courier = this.state.couriers.find(cour => 
            cour.name === text
        );
        this.setState({courier: courier});
        var params = {subdistrict_id: '2500', courier: courier.code, token: this.state.token}
        const URL4 = API + SHIPPING_COST;
        fetch(URL4, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }).then((res) => {
            var resp = JSON.parse(res._bodyText);
            self.setState({shipmentCostsO: resp.d.costs});
            resp.d.costs.map(function(cost, i){
                self.state.shipmentCosts.push({id: i, value: cost.service+' - '+cost.cost[0].value});
            });
        });
    }

    onSelectPayment(index, value) {
        this.setState({paymentMethod: this.state.paymentMethods[index]});
    }

    render() {
        var totalPrice = 0;
        var totalPay = 0;
        this.state.items.map((product, index) => {
            totalPrice = totalPrice + product.price;
        });
        totalPay = totalPrice + this.state.shipmentCost;
        var couriers = [];
        this.state.couriers.map((courier) => {
            couriers.push({id: courier.code, value: courier.name});
        })
        let radioBtn =  this.state.paymentMethods.map(function(payment, i){
            return <RadioButton key={payment.id} value={payment.value} >
                    {/* <Text>{payment.label}</Text> */}
                    <Image width={50}
                        source={{uri:payment.picture}}/>
                   </RadioButton>;
        });
        return (
            <ScrollView>
                <View style={styles.root}>
                <View style={styles.addressBox}>
                        <Card
                            title='Pengiriman Ke'>
                            <Text style={styles.addressTitle}>{this.state.address.name}</Text>
                            <Text style={styles.addressTitle}>{this.state.address.company}</Text>
                            <Text style={styles.addressTitle}>{this.state.address.address}</Text>
                            <Text style={styles.addressTitle}>{this.state.address.regency}</Text>
                            <Text style={styles.addressTitle}>{this.state.address.phone}</Text>
                        </Card>
                    </View>
                    <View style={styles.itemBox}>
                    {
                        this.state.items.map((product, index) => (
                            <View key={index} style = {styles.containerTwo}>
                                <View style={{marginLeft:30, marginTop:10}}>
                                    <Image 
                                        width={60} 
                                        source={{uri: product.image}}
                                    />
                                </View>
                                <View style={styles.numberItem}>
                                    <Text style={{paddingTop:1}}>{product.title}</Text>
                                    <Text>{new Intl.NumberFormat('en-GB', { 
                                        style: 'currency', 
                                        currency: 'IDR',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0 
                                            }).format(product.price)}</Text>
                                    <Text style={{marginTop:30}}>Jumlah: {product.quantity}</Text>
                                </View>
                            </View>
                        ))
                    }
                    </View>
                    <View style={styles.shipmentBox}>
                        <Card
                            title='Kurir'>
                            <Dropdown
                                onChangeText={this.onChangeTextKurir}
                                label='pilih kurir'
                                data={couriers}
                            />
                            <Dropdown
                                onChangeText={this.onChangeTextKurirCost}
                                label='pilih tipe paket'
                                data={this.state.shipmentCosts}
                            />
                        </Card>
                    </View>
                    <View style={styles.totalBox}>
                        <Card
                            title='Ringkasan Belanja'>
                            <View style={styles.reviewShop}>
                                <Text>Total Harga Buku: </Text>
                                <Text>Ongkos Kirim: </Text>
                                <View
                                    style={{
                                        paddingTop: 10,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}/>
                                <Text style={{
                                    paddingTop: 5
                                    }}>Total Belanja: </Text>
                            </View>
                            <View style={{alignSelf: 'flex-end', alignItems: 'flex-end', position: 'absolute', paddingTop:55}}> 
                                <Text>{new Intl.NumberFormat('en-GB', { 
                                    style: 'currency', 
                                    currency: 'IDR',
                                    minimumFractionDigits: 0, 
                                    maximumFractionDigits: 0 
                                        }).format(totalPrice)}
                                </Text>
                                <Text>{new Intl.NumberFormat('en-GB', { 
                                    style: 'currency', 
                                    currency: 'IDR',
                                    minimumFractionDigits: 0, 
                                    maximumFractionDigits: 0 
                                        }).format(this.state.shipmentCost)}</Text>
                                <Text style={{
                                    paddingTop: 10
                                    }}>{new Intl.NumberFormat('en-GB', { 
                                        style: 'currency', 
                                        currency: 'IDR',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0 
                                            }).format(totalPay)}</Text>
                            </View>
                        </Card>
                    </View>
                    <View style={styles.paymentBox}>
                        <Card
                            title='Metode Pembayaran'>
                            <RadioGroup
                                onSelect = {(index, value) => this.onSelectPayment(index, value)}>
                                {
                                    radioBtn
                                }
                            </RadioGroup>
                            <TouchableOpacity 
                                style = {styles.submitButton}
                                onPress = {() => this.onSubmitOrder() }>
                                <Text style={styles.submitButtonText}>Bayar</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View>
            </ScrollView>
            );
    }

}

const styles = StyleSheet.create({
    containerProducts: {
        paddingTop: 40,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    addressBox: {
        flex: 1,
        width: '100%',
    },
    sellerBox: {
        borderBottomWidth: 1,
        height: 30,
    },
    deliveryBox: {
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        height: 60,
    },
    addressTitle: {
        fontSize: 11,
        color: '#1791c5',
        fontWeight: '600',
    },
    itemBox: {
        flex: 1,
        width: '100%',
    },
    totalBox: {
        flex: 1,
        width: '100%',
    },
    paymentBox: {
        flex: 1,
        width: '100%',
    },
    paymentBox: {
        flex: 1,
        width: '100%',
    },
    shipmentBox: {
        flex: 1,
        width: '100%',
    },
    containerTwo: {
        padding: 10,
        marginTop: 5,
        height: 110,
        backgroundColor: 'white' 
    },
    numberItem: {
        flex: 1,
        top: -100,
        marginLeft: 110,
        alignItems: 'flex-start'
    },
    reviewShop: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'flex-start'
    },
    submitButton: {
        backgroundColor: "#00AEF2",
        padding: 10,
        margin: 15,
        height: 35,
        width: 290
     },
    submitButtonText:{
        color: "white",
        marginTop: -4,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 15
     }
});