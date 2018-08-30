import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  AsyncStorage,
  TouchableOpacity } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Image from 'react-native-scalable-image';
import Main from "./Main";
import getListOrder from "../services/FetchOrder";
import Home from "./Home";

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

  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      console.log(token);
      // getListOrder(token)
      //   .then((res) => {
      //     console.log(res);
      // });
    });
  }

  alertItemName = () => {
    alert()
  }

  render () {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center"
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