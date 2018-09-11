import React, { Component } from 'react';
import { WebView, AsyncStorage,
        View, Text, StyleSheet, AppRegistry } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class Webview extends Component {
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

AppRegistry.registerComponent("Webview", () => Webview);