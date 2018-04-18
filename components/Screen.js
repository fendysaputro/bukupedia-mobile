import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';
import Swiper from './Swiper';

export default class Screen extends Component {
    render(){
        return (
            <Swiper navigation={this.props.navigation}>
                {/* First screen */}
                <View style={styles.slide}>
                    <Text style={styles.header}>Pencarian Buku</Text>
                    <Text style={styles.headerText}>Semakin Mudah</Text>
                    <Image 
                        source={require('../styles/icon/icon-logo.png')} 
                        style={{ width: 100, height: 100 }}>
                    </Image>
                </View>
                { /* Second screen */}
                <View style={styles.slide}>
                    <Text style={styles.header}>Gratis Ongkos Kirim</Text>
                    <Text style={styles.headerText}>Seluruh Wilayah Indonesia</Text>
                    <Image 
                        source={require('../styles/icon/icon-logo.png')} 
                        style={{ width: 100, height: 100 }}>
                    </Image>
                </View>
                {/* Third screen */}
                <View style={styles.slide}>
                    <Text style={styles.header}>Pencarian Buku</Text>
                    <Image 
                        source={require('../styles/icon/icon-logo.png')} 
                        style={{ width: 100, height: 100 }}>
                    </Image>
                </View>
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    //slide styles
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARY,
    },
    header: {
        color: '#fff',
        position: 'absolute',
        top: 40,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15
    },
    headerText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 12,
        top: 100,
        textAlign: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center'
    }
});
AppRegistry.registerComponent('Welcome', () => Screen);