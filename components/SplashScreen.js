import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';

export default class SplashScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = { timer: 0}
        setInterval(()=> {
            this.setState({ timer: this.state.timer + 1 })
        }, 1000)
    }

    render(){
        // if (!this.state.isReady){
        //     return (
        //         <AppLoading
        //             startAsync={this._cacheResourcesAsync}
        //             onFinish={()=> this.setState({isReady: true})}
        //             onError={console.warn}
        //         />
        //     );
        // }
        return (
            <View style={{ flex:1 }}>
                <Image source={require('../styles/icon/icon-logo.png')} />
            </View>
        );
    }
    // async _cacheResourcesAsync(){
    //     const images = [
    //         require('../styles/icon/icon-logo.png')
    //     ];

    //     const cacheImages = images.map((image) => {
    //         return Asset.fromModule(image).downloadAsync();
    //     });
    //     return Promise.all(cacheImages)
    // }
}