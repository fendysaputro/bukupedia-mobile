import { StyleSheet, Dimensions, Platform } from 'react-native';

export const COLOR_PRIMARY = '#2B78AC';
export const COLOR_SECONDARY = '#fff';
export const FONT_NORMAL = 'OpenSans-Reguler';
export const FONT_BOLD = 'OpenSans-Bold';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;