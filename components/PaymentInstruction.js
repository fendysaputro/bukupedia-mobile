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
import { ORDER_DETAIL } from "../services/FetchOrder";

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
            const URL = API + LIST_ORDER + '?id=' + id  + '?token=' + token;
            console.log("ini list order: ");
                        console.log(URL);
            fetch(URL)
                .then((response) => response.json())
                .then((responseJson) => {
                    var orderObj = responseJson;
                    if (responseJson.s) {
                        self.setState({orderPayment: orderObj.d});
                    }
                })
        });
        // AsyncStorage.getItem('id_token').then((token) => {
        //     const URL2 = API + LIST_ORDER + '?id=' + id + '?token=' + token;
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
            <View style={styles.root}>
                <View style={styles.containerTwo}>
                    <Text style={styles.reviewShop}>
                        Nomor Invoice Pesanan : {invoices}
                    </Text>
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.reviewShop}>
                        Total yang Harus Anda Bayar : {invoices}
                    </Text>
                </View>
                <TouchableOpacity 
                    style = {styles.submitButton}
                        onPress = {console.log("ini testing") }>
                    <Text style={styles.submitButtonText}>Kembali ke Beranda</Text>
                </TouchableOpacity>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
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
        marginTop: 0,
        height: 40,
        width: '100%',
        backgroundColor: 'white' 
    },
    containerThree: {
        padding: 10,
        marginTop: 10,
        height: 40,
        width: '100%',
        backgroundColor: 'white' 
    },
    reviewShop: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'flex-start',
        fontWeight: 'bold' 
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

