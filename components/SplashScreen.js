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
        },5000)
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../styles/icon/icon-logo.png')} 
                       style={{width: 100, height: 100}}/>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})