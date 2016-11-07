/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import SearchBar from '../component/SearchBar';
import Swiper from 'react-native-swiper';

export default class CompassFragment extends Component{

    render(){
        return(
            <View style={styles.container}>
                <SearchBar onPress={this._searchButtonCallback.bind(this)}/>
                <Swiper
                    height={130}
                    autoplay={false}
                    bounces={true}>
                    <View style={styles.slide}>
                        {/*<Image style={styles.image} source={BANNER_IMAGES[0]}/>*/}
                        <View style={{backgroundColor:'red', height: 130}}></View>
                    </View>
                    <View style={styles.slide}>
                        {/*<Image style={styles.image} source={BANNER_IMAGES[1]}/>*/}
                        <View style={{backgroundColor:'yellow', height: 130}}></View>
                    </View>
                    <View style={styles.slide}>
                        {/*<Image style={styles.image} source={BANNER_IMAGES[2]}/>*/}
                        <View style={{backgroundColor:'green', height: 130}}></View>
                    </View>
                </Swiper>
            </View>
        );
    }

    _searchButtonCallback(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
        backgroundColor: theme.pageBackgroundColor
    },
    slide: {

    }
});
