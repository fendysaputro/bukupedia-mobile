import 'intl';
import 'intl/locale-data/jsonp/en';
import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text,
  View, 
  Dimensions,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  BackHandler } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import getListItemCart from "../services/FetchShoppingCart";
import { API, CART } from '../components/Global';
import Image from 'react-native-scalable-image';
// import Checkout from "../components/Checkout";
import { itemTitle, itemPrice } from "../components/ProductDetail";
import NumericInput from 'react-native-numeric-input';
import Home from "./Home";
import Main from "./Main";
import { NavigationActions } from 'react-navigation';

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
    headerLeft: null
  }

  constructor (props) {
    super(props);
    this.state = {
      carts: [],
      isLogined: false
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

  componentWillMount(){
    // AsyncStorage.getItem('id_token').then((newToken) => {
    //   if (newToken != null){
    //     this.setState({isLogined: true});
    //   }
    // })
    var self = this;
    self.setState({carts: []});
    AsyncStorage.getItem('id_token').then((token) => {
      if (token != null){
        this.setState({isLogined: true});
      }

      getListItemCart(this.state.token)
      .then((res) => {
        console.log("getListItemCart ");
        console.log(res);
      })
       
      const URL = API + CART + '?token=' + token;
      fetch(URL)  
        .then(function(res) {
          console.log("Testing res basket: ");
          console.log(res);
          console.log(res.json());
          var resObj = JSON.parse(res.data);
          console.log("ini resObj: ");
          console.log(resObj);
          if ((resObj.r) || (res.status == 200)) {
            console.log("resObj.d");
            console.log(resObj.d);
            self.setState({carts: resObj.d});
          }
        })
    });
  }

  componentDidUpdate() {
    console.log(this.state.isLogined);
  }

  componentDidMount() {
    // var self = this;
    // self.setState({carts: []});
    // AsyncStorage.getItem('id_token').then((token) => {
    //   const URL = API + CART + '?token=' + token;
    //   fetch(URL)  
    //     .then(function(res) {
    //       console.log("Testing res basket: ");
    //       console.log(res);
    //       console.log(res.status);
    //       // var resObj = JSON.parse(res._bodyBlob);
    //       // console.log("ini resObj: ");
    //       // console.log(resObj);
    //       // if ((resObj.r) || (res.status == 200)) {
    //       //   console.log("resObj.d");
    //       //   console.log(resObj.d);
    //       //   self.setState({carts: resObj.d});
    //       // }
    //     })
    // });
  }

  doCheckout() {
    this.props.navigation.navigate('CheckoutAddress');
  }

  render () {
    let carts = [];
    carts = this.state.carts;
    let ifLogin;
    let cartView;
    if(this.state.isLogined){
      ifLogin=<View><Text>Login</Text></View>;
        if(carts.length == 0){
        // cartView = <View><Text>isinya carts</Text></View>;
        return(
          <View style={styles.container}>
            <Image 
              width={200}
              source={require('../styles/icon/emptystates1.png')}>
            </Image>
            <Text style={styles.text}>
              Keranjang Belanja Anda Kosong
            </Text>
            <Text style={styles.smallText}>
              Semua belanjaan Anda akan masuk di sini
            </Text>
            <TouchableOpacity 
              style={styles.button}
              onPress = {() => this.props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>
                  Mulai Belanja
                </Text>
            </TouchableOpacity>
          </View>
        )
      }
      let total = 0;
      carts.map((product, index) => {
        total = total + product.price;
      });
      return(
        <ScrollView>
          <View style={styles.containerlist}>
            {
              carts.map((product, index) => (
                <View
                  key = {product.id}
                  style = {styles.containerTwo}
                  onPress = {() => console.log('press')}>
                  <View style={{marginLeft:20}}>
                    <Image 
                      width={60} 
                      source={{uri: product.image}}
                    />
                  </View>
                  <View style={styles.numberItem}>
                    <Text style={{paddingTop:1}}>{product.title}</Text>
                    <Text>
                      {new Intl.NumberFormat('en-GB', { 
                          style: 'currency', 
                          currency: 'IDR',
                          minimumFractionDigits: 0, 
                          maximumFractionDigits: 0 
                      }).format(product.price)}
                    </Text>
                    <NumericInput 
                      onChange={value => this.setState({quantity: value})}
                      value={product.quantity}/>            
                  </View>
                </View>
              ))
            }
            <View style={styles.box1}>
              <Text style={{paddingLeft: 10}}>
                Total harga buku: {new Intl.NumberFormat('en-GB', { 
                                    style: 'currency', 
                                    currency: 'IDR',
                                    minimumFractionDigits: 0, 
                                    maximumFractionDigits: 0 
                                }).format(total)}
              </Text>
              <TouchableOpacity style={styles.button}
                onPress = {() => this.props.navigation.navigate("Checkout")}>
                  <Text style={styles.buttonText}>
                    Checkout
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      ifLogin = <View>
        <Text style={styles.text}>Harus Login terlebih dahulu</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress = {() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>
                Login
              </Text>
          </TouchableOpacity>
        </View>;
    }
    return (
      <View>{ifLogin}</View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "25%",
    alignItems: "center"
  },
  box1: {
    height: 110,
  },
  containerlist: {

  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "10%",
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
    width: "60%",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  containerTwo: {
    padding: 10,
    marginTop: 5,
    height: 110,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#d6d7da'
  },
  numberItem: {
    flex: 1,
    top: -100,
    marginLeft: 170,
    alignItems: 'flex-start'
  }
});

AppRegistry.registerComponent("Basket", () => Basket);