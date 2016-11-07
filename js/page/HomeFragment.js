/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../component/CustomTabBar';
import HomeTab from './HomeTabPages/HomeTab';


export default class HomeFragment extends Component{

    render(){
        return(
            <View style={styles.container}>
                    <ScrollableTabView
                        renderTabBar={() => <CustomTabBar />}
                        tabBarBackgroundColor="rgb(22,131,251)"
                        tabBarActiveTextColor="white"
                        tabBarInactiveTextColor="rgba(255,255,255,0.5)"
                        tabBarTextStyle={theme.scrollView.fontSize}
                        tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                        <HomeTab tabLabel="首页"/>
                        <Text tabLabel="Android">favorite</Text>
                        <Text tabLabel="iOS">project</Text>
                        <Text tabLabel="前端">My</Text>
                        <Text tabLabel="后端">favorite</Text>
                        <Text tabLabel="iOS">project</Text>
                        <Text tabLabel="产品">My</Text>
                    </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});