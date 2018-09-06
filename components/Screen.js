import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { COLOR_PRIMARY, COLOR_SECONDARY, FONT_NORMAL } from '../styles/common';
import Swiper from './Swiper';
import Main from './Main';

export default class Screen extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null
        },
        header: null,
        headerLeft: null,
      };
    constructor (props) {
        super(props);
        this.state = {
            notfirstime: false,
            isMounted: false
        };
    }

    componentWillMount() {
        AsyncStorage.getItem('notfirstime').then((notfirstime) => {
            if (notfirstime == null) {
                notfirstime = false;
            }
            this.setState({ notfirstime: notfirstime, isMounted: true });
        });
    }

    componentWillUnmount() {
        this.setState();
    }

    render(){
        console.log('this.state.notfirstime:');
        console.log(this.state.notfirstime);
        console.log('----------------------');
        if (!this.state.notfirstime) {
            return (
                <Swiper navigation={this.props.navigation}>
                    {/* First screen */}
                    <View style={styles.slide}>
                        <Text style={styles.header}>Pencarian Buku</Text>
                        <Text style={styles.headerText}>Semakin Mudah</Text>
                        <Image 
                            source={require('../styles/icon/onboarding1image.jpg')} 
                            style={{ width: 250, height: 250 }}>
                        </Image>
                    </View>
                    { /* Second screen */}
                    <View style={styles.slide}>
                        <Text style={styles.header}>Gratis Ongkos Kirim</Text>
                        <Text style={styles.headerText}>Seluruh Wilayah Indonesia</Text>
                        <Image 
                            source={require('../styles/icon/onboarding2image.jpg')} 
                            style={{ width: 250, height: 250 }}>
                        </Image>
                    </View>
                    {/* Third screen */}
                    <View style={styles.slide}>
                        <Text style={styles.header}>Jaminan Buku Asli</Text>
                        <Text style={styles.headerText}>Langsung dari Gudang Penerbit</Text>
                        <Image 
                            source={require('../styles/icon/onboarding3imageonly.jpg')} 
                            style={{ width: 250, height: 250 }}>
                        </Image>
                    </View>
                </Swiper>
            );
        }else{
            return ( this.props.navigation.navigate("Main") );
        }
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
        top: 80,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15
    },
    headerText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 12,
        top: 140,
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