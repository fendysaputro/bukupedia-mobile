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
  AsyncStorage } from "react-native";
import { List, ListItem } from "react-native-elements";
import { COLOR_PRIMARY } from "../styles/common";
import { API, CART } from '../components/Global';
import Image from 'react-native-scalable-image';

export default class ReviewOrder extends Component {

    constructor (props) {
        super(props);
        this.state = {
        //   loading: false,
          items: []
        }
    }

    componentDidMount( ){
        var self = this;
        this.setState({loading: true});
        AsyncStorage.getItem('id_token').then((token) => {
        const URL = API + CART + '?token=' + token;
        fetch(URL)  
            .then(function(res) {
            var resObj = JSON.parse(res._bodyText);
            if ((resObj.r) || (res.status == 200)) {
                self.setState({items: resObj.d});
            }else{
                // self.setState({loading: false});
                self.props.navigation.navigate('Login');
            }
            })
        });
    }

    renderItem(product) {
        return  
        <TouchableOpacity
              key = {product.id}
              style = {styles.containerTwo}
              onPress = {() => console.log('press')}>
              <View style={{marginLeft:30}}>
              <Image 
                width={60} 
                source={{uri: product.image}}
              />
              </View>
              <View style={styles.numberItem}>
                <Text style={{paddingTop:1}}>{JSON.stringify(product)}</Text>
                <Text>Rp. {product.price}</Text>
                <NumericInput 
                  onChange={value => this.setState({quantity: value})}
                  value={product.quantity}/>            
              </View>
        </TouchableOpacity>
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.addressBox}>
                        <Text>Pengiriman Ke:</Text>
                        <Text style={styles.addressTitle}>{'Name'}</Text>
                        <Text style={styles.addressTitle}>{'Company'}</Text>
                        <Text style={styles.addressTitle}>{'Address1'}</Text>
                        <Text style={styles.addressTitle}>{'Address2'}</Text>
                        <Text style={styles.addressTitle}>{'Phone'}</Text>
                    </View>
                    <View style={styles.itemBox}>
                        <List containerStyle={{borderTopWidth:0, borderBottomWidth: 0}}>
                            <FlatList
                                data={this.state.items}
                                renderItem={({item}) => (
                                    this.renderItem(item)
                                )}
                                keyExtractor={item => item.title}
                            />
                        </List>    
                    </View>
                    <View style={styles.totalBox} />
                    <View style={styles.paymentBox} />
                </View>
            </ScrollView>
            );
    }

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    addressBox: {
        flex: 1,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
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
        backgroundColor: 'steelblue',
        width: '100%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
    paymentBox: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
});