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
import { List, ListItem } from "react-native-elements";
import { COLOR_PRIMARY } from "../styles/common";
import { API, CART, ADDRESS } from '../components/Global';
import Image from 'react-native-scalable-image';

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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
          dataSource: ds.cloneWithRows([]),
        }
    }

    ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
     
    GetListViewItem (rowData) {
       
      Alert.alert(rowData);
     
      }

    componentDidMount( ){
        var self = this;
        this.setState({loading: true});
        AsyncStorage.getItem('id_token').then((token) => {
            console.log(token);
            const URL = API + CART + '?token=' + token;
            fetch(URL)  
                .then(function(res) {
                var resObj = JSON.parse(res._bodyText);
                if ((resObj.r) || (res.status == 200)) {
                    self.setState({items: resObj.d});
                    // self.setState({ds: this.state.ds.cloneWithRows(resObj.di)});
                }else{
                    // self.setState({loading: false});
                    self.props.navigation.navigate('Login');
                }
                })
            
            const URL2 = API + ADDRESS + '?token=' + token;
            fetch(URL2)
                .then((res) => {
                    var resp = JSON.parse(res._bodyText);
                    if (resp.r) {
                        self.setState({address: resp.d[0]});
                    }
                });
        
        });

    }

    render() {
        var totalPrice = 0;
        this.state.items.map((product, index) => {
            totalPrice = totalPrice + product.price;
        });
        return (
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.addressBox}>
                        <Text>Pengiriman Ke:</Text>
                        <Text style={styles.addressTitle}>{'Name: '+this.state.address.name}</Text>
                        <Text style={styles.addressTitle}>{'Company: '+this.state.address.company}</Text>
                        <Text style={styles.addressTitle}>{'Address1: '+this.state.address.address}</Text>
                        <Text style={styles.addressTitle}>{'Address2: '+this.state.address.regency}</Text>
                        <Text style={styles.addressTitle}>{'Phone: '+this.state.address.phone}</Text>
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
                                    <Text>Rp. {product.price}</Text>
                                    <Text style={{marginTop:30}}>Jumlah: {product.quantity}</Text>
                                </View>
                                <View style={styles.reviewShop}>
                                    <Text>Ringkasan Belanja: </Text>
                                </View>
                            </View>
                        ))
                    }
                    <View style={styles.totalBox}>
                        <Text>Ringkasan Belanja: </Text>
                        <View style={styles.reviewShop}>
                            <Text>-Total Harga: </Text> 
                            <Text>Rp. 50.000</Text>
                        </View>
                    </View>
                    </View>
                    {/* <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                        <Image width={60} source={{uri: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'}}/>
                        <View>
                            <Text style={styles .unityName}>SUPERMERCADO MACCARTNEY</Text>
                            <Text style={styles.subInfo}>Categoria: Mercado</Text>
                            <Text style={styles.subInfo}>Pedido Nº: 1245</Text>
                        </View>
                    </View>
                        <View style={styles.containerProducts}>
                            <Text style={styles.productName}>1x 42 - Coca Cola 2L</Text>
                        <View style={styles.minus}></View>
                    </View> */}
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
    productName: {
        alignSelf: 'flex-start',
      },
      minus:{
        width: 20,
        height: 20,
        borderRadius: 20/2,
        backgroundColor: 'red',
      },
      containerInfo:{
        paddingTop:15,
        flexDirection:'row',
        paddingLeft: 15,
      },
      unityName:{
        fontWeight: 'bold',
        paddingLeft: 15,
      },
      subInfo:{
        color: 'gray',
        paddingLeft: 15,
      },
      circle: {
        justifyContent: 'flex-end',
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
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1
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
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    paymentBox: {
        flex: 1,
        width: '100%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10
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
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});