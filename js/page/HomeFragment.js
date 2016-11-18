/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ToastAndroid} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../component/CustomTabBar';
import HomeTab from './HomeTabPages/HomeTab';
import TabItemSwitcherPage from './TabItemSwitcherPage';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class HomeFragment extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: ['首页','Android','iOS']
        };
        this._handleTabNames = this._handleTabNames.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                    <ScrollableTabView
                        renderTabBar={() => <CustomTabBar pullDownOnPress={this._pullDownCallback.bind(this)}/>}
                        tabBarBackgroundColor="rgb(22,131,251)"
                        tabBarActiveTextColor="white"
                        tabBarInactiveTextColor="rgba(255,255,255,0.5)"
                        tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                        tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                        {this.state.tabNames.map((item, i) => {
                            return(
                                <HomeTab tabLabel={item} key={i} tabTag={item}/>
                            );})
                        }
                    </ScrollableTabView>
            </View>
        );
    }

    _pullDownCallback(){
        this.props.navigator.push({
            component: TabItemSwitcherPage,
            args: {tabNames: this.state.tabNames}
        });
    }

    componentDidMount(){
        RCTDeviceEventEmitter.addListener('valueChange', this._handleTabNames);
    }

    componentWillUnmount(){
        RCTDeviceEventEmitter.removeListener('value', this._handleTabNames);
    }

    _handleTabNames(tabNames){
        this.setState({ tabNames: tabNames });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});