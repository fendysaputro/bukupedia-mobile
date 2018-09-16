import 'intl';
import 'intl/locale-data/jsonp/en';
import React, { Component } from "react";
import { AppRegistry, 
          StyleSheet, 
          Text, 
          View, 
          Search, 
          Button, 
          Dimensions, 
          ScrollView, 
          TouchableOpacity, 
          TouchableHighlight, 
          BackAndroid, 
          Alert,
          BackHandler } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import SideSwipe from 'react-native-sideswipe';
import { getBanner, getBannerSmall } from '../services/FetchBanner';
import { getNewProduct } from '../services/FetchProduct';
import Image from 'react-native-scalable-image';
import GridView from 'react-native-super-grid';
import { SearchBar, Icon, Header } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { ProductDetail } from '../components/ProductDetail';
import Carousel from 'react-native-carousel-view';
import Swiper from 'react-native-swiper';
import WebviewBanner from '../components/WebviewBanner';

var { height, width } = Dimensions.get('window');

export default class Home extends Component {

  constructor (props) {
      super(props);
      this.handleOnTouchProduct = this.handleOnTouchProduct.bind(this);
  }

  componentWillMount() {
    this.setState({ banners: [], banners_small: [], new_products: []});
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

  static navigationOptions = ({navigation}) => ({
    headerTitle: 
      <SearchBar
        lightTheme
        // onChangeText={someMethod}
        // onClearText={someMethod}
        placeholder='Bukupedia App' 
        containerStyle={{width: '100%', backgroundColor: COLOR_PRIMARY}}
      />,
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null,
    headerRight:
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <Image
          // width={24}
          style={{flex: 1, margin: 12.5, padding: 12.5, aspectRatio: 1.5, resizeMode: 'contain'}}
          source={require('../styles/icon/notification.png')}
        />
      </TouchableOpacity>
  })

  getAuthorsText(authorObj) {
    return authorObj.results.map(function(author){
      author + ' ';
    });
  }

  handleOnTouchProduct(item) {
    this.props.navigation.navigate('ProductDetail', {url: item.link});
  }

  render () {
    const {navigate} = this.props.navigation;
    const contentOffset = 0;
    let screenHeight = Dimensions.get('window').height;
    return (
      <View style={styles.root}>
        <View style={{ height: (screenHeight - 100), borderColor: 'green', borderWidth: 0 }}>
          <ScrollView>
            <View style={styles.box1}>
              <Swiper height={190} showsButtons={false}>
                {
                  this.state.banners.map(function(banner, i){   
                    // console.log(banner);
                    return  (
                              <View key={i}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('WebviewBanner')}>
                                <Image  width={Dimensions.get('window').width} 
                                      source={{uri: banner.attributes.picture}}/>
                              </TouchableOpacity>
                              </View>
                            )  
                  })
                }
              </Swiper>
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
                  <TouchableHighlight key={item.id} onPress={() => this.handleOnTouchProduct(item)}>
                    <View style={[styles.itemContainer]}>
                      <Image width={Dimensions.get('window').width / 3} 
                        source={{uri: item.image}}/>
                      <View style={styles.itemCaption}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemAuthor}> {item.authors[0]}</Text>
                        <Text style={styles.itemPrice}>
                          {new Intl.NumberFormat('en-GB', { 
                              style: 'currency', 
                              currency: 'IDR',
                              minimumFractionDigits: 0, 
                              maximumFractionDigits: 0 
                          }).format(item.price)}
                      </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
              />  
            </View>
          </ScrollView>
        </View>  
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
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
    flex: 1
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 250,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  itemCaption: {

  },
  itemTitle: {
    fontSize: 14,
    color: '#1791c5',
    fontWeight: '600',
  },
  itemAuthor: {
    fontWeight: '600',
    fontSize: 11,
    color: '#49aedd'
  },
  itemPrice: {
    fontSize: 12,
    color: '#e7ad46',
    fontWeight: '600',
  },
});

AppRegistry.registerComponent("Home", () => Home);