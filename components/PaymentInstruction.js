import React, { Component } from "react";
import { StyleSheet, 
        Text, 
        View, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        AsyncStorage,
        ScrollView } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import {API, ORDER_PAYMENT, LIST_ORDER } from "./Global";
import { getOrderDetail } from "../services/FetchOrder";

export default class PaymentInstruction extends Component {
    static navigationOptions = {
        title: 'Instruksi Pembayaran',
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null,
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center'
        },
        headerLeft: null
    }

    constructor (props){
        super(props);
        this.state = {
            invoices: [],
            totalPay: '',
            orderPayment: [],
            orderDetail: []
        }
    }

    componentDidMount (){
        var self;
        AsyncStorage.getItem('id_token').then((token) => {
            const URL = API + LIST_ORDER + '?token=' + token;
            fetch(URL)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("ini list order: ");
                        console.log(responseJson);
                    var orderObj = responseJson;
                    if (responseJson.s) {
                        self.setState({orderPayment: orderObj.d});
                    }
                })
        });
        // AsyncStorage.getItem('id_token').then((token) => {
        //     const URL2 = API + LIST_ORDER + '?token=' + token + '?id=' + id;
        //     console.log("ini orderPayment");
        //     console.log(URL2);
        //     fetch(URL2)
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             var orderDetailObj = responseJson;
        //             if (responseJson.s) {
        //                 self.setState({orderDetail: orderDetailObj.d});
        //             }
        //         })
        // });
        // getOrderDetail(token)
        //     .then((res) => {
        //         console.log('params');
        //         // console.log(params);
        //         console.log(res);
        //         if (res.s){
        //             // this.props.navigation.navigate('PaymentInstruction');
        //         }
        //     })
    }

    render () {
        var invoices = [];
        this.state.invoices.map((invoice) => {
            invoices.push({id: invoice.invoice_no});
        })
        return (
            <View style={styles.containerTwo}>
                {/* {
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
                                <Text style={{marginTop:20}}>Jumlah: {product.quantity}</Text>
                            </View>
                        </View>
                    ))
                } */}
                <Text style={styles.reviewShop}>
                    Nomor Invoice Pesanan : {invoices}
                </Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
    container: {
        flex: 1,
        alignItems: "center",
        borderTopWidth: 4,
        borderTopColor: "#F1F3F2",
        backgroundColor: "#EDF8FE"
    },
    itemBox: {
        flex: 1,
        width: '100%',
    },
    containerTwo: {
        padding: 10,
        marginTop: 5,
        height: 110,
        backgroundColor: 'white' 
    },
    reviewShop: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'flex-start'
    },
});

