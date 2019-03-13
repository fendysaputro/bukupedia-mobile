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
import {getOrderDetail } from "../services/FetchOrder";

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
            orderDetail: []
        }
    }

    componentDidMount (){
        var self = this;
        const { state } = this.props.navigation;
        var id = state.params.id;
        console.log(id);
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
                        Nomor Invoice Pesanan : {this.state.invoice.invoice_no}
                    </Text>
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.reviewShop}>
                        Total yang Harus Anda Bayar : {this.state.invoice.grand_total}
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

