import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { COLOR_PRIMARY } from '../styles/common';

export default class SplashScreen extends Component {
    static navigationOptions = {
        headerStyle: {
        },
        header: null
      };    

    componentWillMount(){
        setTimeout(() => {
            this.props.navigation.navigate('app');
        },10000)
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../styles/icon/icon-logo.png')} 
                       style={{width: 50, height: 50}}/>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_PRIMARY,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})