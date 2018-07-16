import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import getListItemCart from "../services/FetchShoppingCart";
import { API, CART } from '../components/Global';

export default class Basket extends Component {
  static navigationOptions = {
    title: 'Keranjang Belanja',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null,
    },
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center'
    },
  }

  constructor (props) {
    super(props);
    this.state = {
      carts: []
    }
  }

  async retrieveToken() {
    try {
      const token =  await AsyncStorage.getItem('id_token');
      return token;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  componentDidMount() {
    var self = this;
    AsyncStorage.getItem('id_token').then((token) => {
      // console.log(token);
      // getListItemCart(token)
      //   .then((res) => {
      //     console.log(res);
      // });
      const URL = API + CART + '?token=' + token;
      fetch(URL)  
        .then(function(res) {
          var resObj = JSON.parse(res._bodyText);
          if (resObj.r) {
            self.setState({carts: resObj.d});
          }
        })
    });
  }

  alertItemName = () => {
    alert()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../styles/icon/emptystates1.png')}
          style={{width: 250, height: 150}}>
        </Image>
        <Text style={styles.text}>
          Keranjang Belanja Anda Kosong
        </Text>
        <Text style={styles.smallText}>
          Semua belanjaan Anda akan masuk di sini
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Mulai Belanja
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "25%",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "15%",
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

AppRegistry.registerComponent("Basket", () => Basket);