import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text,
  View, 
  Dimensions,
  ScrollView,
  TouchableOpacity,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import getListItemCart from "../services/FetchShoppingCart";
import { API, CART } from '../components/Global';
import Image from 'react-native-scalable-image';
import Checkout from "../components/Checkout";
import { itemTitle, itemPrice } from "../components/ProductDetail";
import NumericInput from 'react-native-numeric-input';
import Home from "./Home";
import Main from "./Main";

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
      const URL = API + CART + '?token=' + token;
      fetch(URL)  
        .then(function(res) {
          var resObj = JSON.parse(res._bodyText);
          if ((resObj.r) || (res.status == 200)) {
            self.setState({carts: resObj.d});
          }
        })
    });
  }

  doCheckout() {
    this.props.navigation.navigate('CheckoutAddress');
  }

  render () {
    if(this.state.carts.length == 0){
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
    this.state.carts.map((product, index) => {
      total = total + product.price;
    });
    return(
      // <Container>
      //     <Content>
      //         <List>
      //           {
      //             this.state.carts.map((product, index) => {
      //               <ListItem>
      //                   <Thumbnail square size={60} source={{uri: product.image}} />
      //                   <Text>{product.title}</Text>
      //                   <Text note>
      //                     {new Intl.NumberFormat('en-GB', { 
      //                           style: 'currency', 
      //                           currency: 'IDR',
      //                           minimumFractionDigits: 0, 
      //                           maximumFractionDigits: 0 
      //                       }).format(product.price)}
      //                   </Text>
      //               </ListItem>
      //             })
      //           }
      //         </List>
      //     </Content>
      // </Container>
      <ScrollView>
        <View style={styles.containerlist}>
          {
            this.state.carts.map((product, index) => (
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