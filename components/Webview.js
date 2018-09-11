import React, { Component } from 'react';
import { WebView, AsyncStorage,
        View, Text, StyleSheet, AppRegistry } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class Webview extends Component {
    render (){
        return(
            <WebView
            source={{uri: 'https://www.bukupedia.com/'}}
            style={{marginTop: 0}}
          />
        )
    }
} 

AppRegistry.registerComponent("Webview", () => Webview);