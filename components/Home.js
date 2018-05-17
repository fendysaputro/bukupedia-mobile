import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Button, Dimensions } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import { API, BANNER, BANNER_SMALL, BANNER_FOOTER, NEW_PRODUCT } from "../components/Global";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Carousel, { Pagination } from 'react-native-snap-carousel';

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

  get pagination () {
    const { banners, activeSlide } = this.state;
    return (
            <Pagination
              dotsLength={banners.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
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
              itemWidth={itemWidth}
              inactiveSlideScale={1.0}
              inactiveSlideOpacity={0.0}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }/>  
          { this.pagination }
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
    height: 300
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});

AppRegistry.registerComponent("Home", () => Home);