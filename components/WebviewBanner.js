import React, { Component } from 'react';
import { WebView, AsyncStorage, BackAndroid, BackHandler,
        View, Text, StyleSheet, AppRegistry, Platform } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class WebviewBanner extends Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
    };

    render (){
        return(
            <WebView
                source={{uri: 'https://www.bukupedia.com/'}}
                style={{marginTop: 20}}
            />
        )
    }
} 

AppRegistry.registerComponent("WebviewBanner", () => WebviewBanner);