import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Button, Dimensions } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import { API, BANNER, BANNER_SMALL, BANNER_FOOTER, NEW_PRODUCT } from "../components/Global";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Carousel from 'react-native-snap-carousel';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default class Home extends Component {

  constructor (props) {
      super(props);
      this.state = {
          banners: [],
          banners_small: []
      };
  }

  componentDidMount() {
    fetch(API + BANNER)
      .then(response => response.json())
      .then(data => this.setState({ banners: data.d }));
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Image  style={{width: 600, height: 200}}
                    source={{uri: item.picture}}/>
        </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.banners}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}/>  
        </View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});

AppRegistry.registerComponent("Home", () => Home);