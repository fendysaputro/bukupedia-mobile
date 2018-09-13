import React, { Component } from 'react';
import { WebView, AsyncStorage, BackAndroid, BackHandler,
        View, Text, StyleSheet, AppRegistry, Platform } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class Webview extends Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
    };

    constructor(props){
        super(props);
        this.state = {
            webViewState: {
                canGoBack: false
            },
        }
      }

    _onNavigationStateChange(webViewState){
        this.setState({webViewState: webViewState})
    }

    componentDidMount() {
        if (Platform.OS == "android"){
            this.backButtonListener = BackHandler.addEventListener('hardwareBackPress', () => {
                console.log("onbackTst");
                console.log(this.state.webViewState.canGoBack);
                console.log("============");
                if (this.state.webViewState.canGoBack) {
                    BackHandler.exitApp();
                    return true;
                } 
            });
        }
    }
    

    render (){
        return(
            <WebView
            source={{uri: 'https://www.bukupedia.com/'}}
            style={{marginTop: 20}}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          />
        )
    }
} 

AppRegistry.registerComponent("Webview", () => Webview);