import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Search, Button } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import { API, BANNER } from "../components/Global";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Carousel from 'react-native-snap-carousel';

export default class Home extends Component {

  constructor (props) {
      super(props);
      this.state = {
          entries: [
          //     {
          //       title: 'Beautiful and dramatic Antelope Canyon',
          //       subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          //       illustration: 'https://i.imgur.com/UYiroysl.jpg'
          //     },
          //     {
          //         title: 'Earlier this morning, NYC',
          //         subtitle: 'Lorem ipsum dolor sit amet',
          //         illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
          //     },
          //     {
          //         title: 'White Pocket Sunset',
          //         subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          //         illustration: 'https://i.imgur.com/MABUbpDl.jpg'
          //     },
          //     {
          //         title: 'Acrocorinth, Greece',
          //         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          //         illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
          //     },
          //     {
          //         title: 'The lone tree, majestic landscape of New Zealand',
          //         subtitle: 'Lorem ipsum dolor sit amet',
          //         illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
          //     },
          //     {
          //         title: 'Middle Earth, Germany',
          //         subtitle: 'Lorem ipsum dolor sit amet',
          //         illustration: 'https://i.imgur.com/lceHsT6l.jpg'
          //     }
          ]
      };
  }

  componentDidMount() {
    fetch(API + BANNER)
      .then(response => response.json())
      .then(data => this.setState({ entries: data.d }));
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
                    source={{uri: item.attributes.picture}}/>
        </View>
    );
  }

  render () {
    return (
      <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
      //<View style={styles.container}>
      //  <Text style={styles.welcome}>
      //    This is Home
      //    ini adalah Beranda
      //  </Text>
      //</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

AppRegistry.registerComponent("Home", () => Home);