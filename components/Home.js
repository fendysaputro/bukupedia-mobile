import React, { Component } from "react";
import { AppRegistry, 
          StyleSheet, 
          Text, 
          View, 
          Image, 
          Search, 
          Button, 
          Dimensions, 
          ScrollView } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import SideSwipe from 'react-native-sideswipe';
import { getBanner, getBannerSmall } from '../services/FetchBanner';
import { getNewProduct } from '../services/FetchProduct';

var { height, width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
var bsmall_width = width / 3;

export default class Home extends Component {

  constructor (props) {
      super(props);
      this.state = {
          banners: [],
          banners_small: [],
          new_products: []
      };
  }

  componentDidMount() {
    getBanner()
          .then((res) => {
              this.setState({ banners: res.d });
        });

    getBannerSmall()
          .then((res) => {
              this.setState({ banners_small: res.d });
        });

    getNewProduct()
          .then((res) => {
            this.setState({ new_products: res.d });
          });
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,
  }

  // get pagination () {
  //   const { banners, activeSlide } = this.state;
  //   return (
  //           <Pagination
  //             dotsLength={banners.length}
  //             activeDotIndex={0}
  //             dotStyle={{  
  //                 width: 10,
  //                 height: 10,
  //                 borderRadius: 5,
  //                 marginHorizontal: 8,
  //                 backgroundColor: 'rgba(255, 255, 255, 0.92)'
  //             }}
  //             inactiveDotStyle={{
  //                 // Define styles for inactive dots here
  //             }}
  //             inactiveDotOpacity={0.4}
  //             inactiveDotScale={0.6}
  //           />
  //   );
  // }

  render () {
    const { width } = Dimensions.get('window');
    const contentOffset = 0;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.box, styles.box1]}>
            <SideSwipe
              index={this.state.currentIndex}
              itemWidth={width}
              style={{ width }}
              data={this.state.banners}
              contentOffset={contentOffset}
              onIndexChange={index =>
                this.setState(() => ({ currentIndex: index }))
              }
              renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                <Image  style={{width: width, height: 230}}
                    source={{uri: item.picture}}/>
              )}
            />  
          </View>
          <View style={[styles.box, styles.box2]}>
            <SideSwipe
              index={this.state.currentIndex}
              itemWidth={width}
              style={{ width }}
              data={this.state.banners_small}
              contentOffset={2}
              onIndexChange={index =>
                this.setState(() => ({ currentIndex: index }))
              }
              renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                <Image  style={{width: bsmall_width - 10, height: 101}}
                    source={{uri: item.picture}}/>
              )}
            />  
          </View>
          <View style={[styles.box, styles.box3]}></View>
        </ScrollView>
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