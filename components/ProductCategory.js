import React, { Component } from "react";
import {  AppRegistry,
          Text, 
          ScrollView,
          FlatList,
          WebView,
          StyleSheet, View, TouchableOpacity, Button, Dimensions } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth, COLOR_SECONDARY } from "../styles/common";
import HeaderButtons from "react-navigation-header-buttons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider'; 
import { getProductLink, getProductByCategory } from '../services/FetchCategory';
import GridView from 'react-native-super-grid';

export default class ProductCategory extends Component {
    static navigationOptions = {
    headerTintColor : 'white',
      title: 'Kategori Produk',
      headerStyle: {
        backgroundColor: COLOR_PRIMARY,
        elevation: null,
      },
      headerTitleStyle: {
        color: 'white',
        width: '90%',
        textAlign: 'center'
      },
    }

    constructor (props){
        super(props);
        this.handleOnTouchCategory = this.handleOnTouchCategory.bind(this);
        this.state = {
            data: {},
            isDataLoaded: false
        };
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        let link =''
        getProductLink(state.params.url)
            .then((res) => {
                getProductByCategory(res.d[0].product_link)
                    .then((res) => {
                        this.setState({products: res.d})
                })
            })
    }

    handleOnTouchCategory(item) {
      this.props.navigation.navigate('ProductDetail', {url: item.link});
    }

    render (){
        console.log("products")
        console.log(this.state.products)
        let isLoaded = false;
        if (typeof this.state.products != 'undefined' ){
          isLoaded = true;
        }
        const sg = <GridView
            itemDimension={130}
            items={this.state.products}
            style={styles.gridView}
            renderItem={item => (
                <Text style={styles.itemTitle}>{item.title}</Text>
              )}
            />
         
        let messages;
        if (isLoaded){
          messages = sg;
          console.log(isLoaded);
        }
        else{
          messages = <Text>Kosong</Text>;
        }

        return(
          <View>{messages}</View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    },
    box3: {
        flex: 1,
        top: 20,
        paddingLeft: 20,
        paddingRight: 10
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 250,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
      },
      itemCaption: {
    
      },
      itemTitle: {
        fontSize: 14,
        color: '#1791c5',
        fontWeight: '600',
      },
      itemAuthor: {
        fontWeight: '600',
        fontSize: 11,
        color: '#49aedd'
      },
      itemPrice: {
        fontSize: 12,
        color: '#e7ad46',
        fontWeight: '600',
      },    
});