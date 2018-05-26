import React, { Component } from "react";
import { AppRegistry, 
          StyleSheet, 
          Text, 
          View, 
          Search, 
          Button, 
          Dimensions, 
          ScrollView, TouchableOpacity } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import SideSwipe from 'react-native-sideswipe';
import { getBanner, getBannerSmall } from '../services/FetchBanner';
import { getNewProduct } from '../services/FetchProduct';
import Image from 'react-native-scalable-image';
import GridView from 'react-native-super-grid';

var { height, width } = Dimensions.get('window');
var box_count = 2;
var box_height = height / box_count;

export default class Home extends Component {

  constructor (props) {
      super(props);
      this.state = {
          banners: [],
          banners_small: [],
          new_products: [],
          height: 100
      }
  }

  componentWillMount() {
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
            console.log(this.state.new_products);
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
    // const spaceBetween = 2;
    let screenHeight = Dimensions.get('window').height;
    return (
        <View style={styles.root}>
        <View style={{ height: (screenHeight - this.state.height), borderColor: 'green', borderWidth: 0 }}>
          <ScrollView>
            <View style={styles.box1}>
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
                  <Image  width={Dimensions.get('window').width} //style={{width: width, height: 230}}
                      source={{uri: item.picture}}/>
                )}
              /> 
            </View>
            <View style={styles.box2}>
              <SideSwipe
                index={this.state.currentIndex}
                itemWidth={width}
                style={{ width }}
                data={this.state.banners_small}
                contentOffset={contentOffset}
                onIndexChange={index =>
                  this.setState(() => ({ currentIndex: index }))
                }
                renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                  <Image  width={Dimensions.get('window').width / 3} 
                      source={{uri: item.picture}}/>
                )}
              />
            </View>
            <View style={styles.box3}>
              <GridView
                itemDimension={130}
                items={this.state.new_products}
                style={styles.gridView}
                renderItem={item => (
                  <View style={[styles.itemContainer]}>
                    <Text style={styles.itemName}>{item.title}</Text>
                    <Text style={styles.itemCode}>Author: </Text>
                  </View>
                )}
              />  
            </View>
          </ScrollView>
        </View>
        <View style={{ height: this.state.height, backgroundColor: 'red' }}>
          <TouchableOpacity onPress={() => this.setState({ height: this.state.height + 10 })}>
            <Text>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  box1: {
    flex: 1
  },
  box2: {
    flex: 1
  },
  box3: {
    height: 200,
    backgroundColor: 'red'
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  }
});

AppRegistry.registerComponent("Home", () => Home);