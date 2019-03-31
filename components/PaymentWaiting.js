import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  AsyncStorage,
  TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Image from 'react-native-scalable-image';
import Main from "./Main";
import getListOrder from "../services/FetchOrder";
import Home from "./Home";
import { API, LIST_ORDER } from '../components/Global';
import { Card, Button, Icon } from 'react-native-elements';

export default class PaymentWaiting extends Component {
  static navigationOptions = {
    title: 'Menunggu Pembayaran',
    headerTintColor: "white",
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

  constructor (props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    var self = this;
    AsyncStorage.getItem('id_token').then((token) => {
      const URL = API + LIST_ORDER + '?token=' + token;
      fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
              var resObj = responseJson;
              if (responseJson.s) {
                self.setState({orders: resObj.d});
              }
            })
    });
  }

  render () {
    var contentPayment = <View></View>;
    if (this.state.orders.length == 0) {
      contentPayment = <View style={styles.container}>
                          <Image 
                            source={require('../styles/icon/emptystates2.png')}
                            style={{flex: 1, width: 170, height: 170, aspectRatio: 2.5, resizeMode:'contain'}}>
                          </Image>
                          <Text style={styles.text}>
                            Anda Belum Memiliki Pesanan
                          </Text>
                          <Text style={styles.smallText}>
                            pantau status pesanan Anda di sini
                          </Text>
                          <TouchableOpacity style={styles.button}
                            onPress = {() => this.props.navigation.navigate("Home")}>
                              <Text style={styles.buttonText}>
                                Buat Pesanan
                              </Text>
                          </TouchableOpacity>
                        </View>;
    }else{
      contentPayment = <View>
                        {
                          this.state.orders.map(function(order, i){
                            return (
                              <TouchableOpacity
                              onPress = {console.log("ini paymentWaiting")}>
                              <Card
                                key={i}
                                title={'INVOICE NO. '+order.invoice_no}>
                                <Text style={{marginBottom: 10}}>
                                  Status Pembayaran :
                                  <Text >{" "}</Text>
                                  <Text style={{fontWeight: 'bold'}}> 
                                    {order.status}
                                  </Text>
                                </Text>
                                <Text style={{marginBottom: 10}}>
                                  Total Pembayaran : <Text >{" "}</Text>
                                  <Text style={{fontWeight: 'bold'}}>
                                    {new Intl.NumberFormat('en-GB', { 
                                        style: 'currency', 
                                        currency: 'IDR',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0 
                                    }).format(order.grand_total)}
                                  </Text>
                                </Text>
                                <Text style={{marginBottom: 10}}>
                                    Batas Terakhir Pembayaran : <Text>{" "}</Text>
                                    <Text style={{fontWeight: 'bold', color: 'red'}}>
                                      {order.order_date}
                                    </Text>
                                </Text>
                              </Card>
                              </TouchableOpacity>
                            );
                          })
                        }
                      </View>
    }
    return (
      <ScrollView>
        <View>
         
            { contentPayment }
         
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center"
  },
  containerOrder: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    marginTop: "2%",
    fontWeight: "bold" 
  },
  smallText: {
    fontSize: 13,
    marginTop: "3%",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#00AEF2",
    marginTop: "15%",
    padding: 5,
    margin: 15,
    height: 35,
    width: "60%"
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent("PaymentWaiting", () => PaymentWaiting);