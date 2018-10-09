import React, { Component } from 'react';
import { WebView, AsyncStorage, BackAndroid, BackHandler,
        View, Text, StyleSheet, AppRegistry, Platform } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class WebviewBanner extends Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        this.setState({url: state.params.url});
    }

    render (){
        return(
            <WebView
                source={{uri: this.state.url}}
                style={{marginTop: 20}}
            />
        )
    }
} 

AppRegistry.registerComponent("WebviewBanner", () => WebviewBanner);