import React, { Component } from "react";
import { StyleSheet, 
        Text, 
        View, 
        Dimensions,
        TouchableOpacity, 
        AsyncStorage,
        ScrollView } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import {getOrderDetail } from "../services/FetchOrder";
import Image from 'react-native-scalable-image';

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
            invoice: [],
            totalPay: '',
            orderPayment: [],
            orderDetail: [],
            payment_method: {},
            bank_image: {}
        }
    }

    componentDidMount (){
        var self = this;
        const { state } = this.props.navigation;
        var id = state.params.id;
        var payment_method = state.params.bank;
        self.setState({payment_method: payment_method});
        var bank_image = state.params.bank_image;
        self.setState({bank_image: bank_image});
        console.log("ini payment method");
        console.log(this.state.bank_image);
        AsyncStorage.getItem('id_token').then((token) => {
            getOrderDetail(token, id)
            .then(res => {
                self.setState({invoice: res.d});    
            })
        });
    }

    render () {
        return (
            <View style={styles.root}>
                <View style={styles.containerTwo}>
                    <Text style={styles.reviewShop}>
                        Nomor Invoice Pesanan
                    </Text>
                <View style={{alignSelf: 'flex-end', alignItems: 'flex-end', 
                    position: 'absolute', paddingTop: 10}}>
                    <Text style={styles.reviewShop}>
                        {this.state.invoice.invoice_no}
                    </Text>
                </View>
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.reviewShop}>
                        Total yang Harus Anda Bayar
                    </Text>
                </View>
                <View style={{alignSelf: 'flex-end', alignItems: 'flex-end', 
                    position: 'absolute', paddingTop: 60}}>
                    <Text style={styles.text}>
                        {new Intl.NumberFormat('en-GB', { 
                        style: 'currency', 
                        currency: 'IDR',
                        minimumFractionDigits: 0, 
                        maximumFractionDigits: 0 
                            }).format(this.state.invoice.grand_total)}
                    </Text>
                </View>
                <View style={styles.containerFour}>
                    <Text style={styles.reviewShop}>
                        Transfer/setor ke {this.state.payment_method.bank} ke nomor rekening {"\n"} 
                        berikut ini :  
                    </Text> 
                    <Image width={100}
                        style = {{paddingLeft: 10, marginTop: 2}}
                        source={{uri:this.state.bank_image.picture}}/>
                    <Text style={styles.bankStyle}>
                        {this.state.payment_method.name_rek}    
                    </Text> 
                    <Text style={styles.rekeningText}>
                        Nomor Rek {this.state.payment_method.no_rek}
                    </Text>
                </View>
                <TouchableOpacity 
                    style = {styles.submitButton}
                        onPress = {console.log("") }>
                    <Text style={styles.submitButtonText}>Kembali ke Beranda</Text>
                </TouchableOpacity>
                <View style={styles.bottomView}>
                    
                </View>
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
    containerFour: {
        padding: 10,
        marginTop: 10,
        height: 150,
        width: '100%',
        backgroundColor: 'white' 
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    reviewShop: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'flex-start',
        fontWeight: 'bold' 
    },
    bankStyle: {
        flex: 1,
        paddingLeft: 10,
        marginTop: 3,
        justifyContent: 'flex-start',
        fontWeight: 'bold' 
    },
    text: {
        fontWeight: 'bold',
        color: 'red'
    },
    rekeningText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    invoiceStyle: {
        flex: 1,
        marginLeft: '70%',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end', 
        alignItems: 'flex-end',
        fontWeight: 'bold' 
    },
    submitButton: {
        backgroundColor: "#00AEF2",
        padding: 10,
        margin: 15,
        height: 35,
        width: 310
     },
    submitButtonText:{
        color: "white",
        marginTop: -4,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold'
     }
});

