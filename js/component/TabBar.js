/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import HomeFragment from '../page/HomeFragment';
import CompassFragment from '../page/CompassFragment';
import MeFragment from '../page/MeFragment';
import NotifyFragment from '../page/NotificationFragment';
import px2dp from '../util/px2dp';


export default class TabBar extends Component{
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render(){
        const {selectedColor} = this.props;
        return(
            <TabNavigator
                tabBarStyle={styles.tabbar}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomeFragment />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    selected={this.state.selectedTab === 'compass'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.compassNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.compassSelected} />}
                    onPress={() => this.setState({ selectedTab: 'compass' })}>
                    {<CompassFragment />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    selected={this.state.selectedTab === 'notification'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.notificationNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.notificationSelected} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    {<NotifyFragment />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.meNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.meSelected} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    {<MeFragment />}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;
        Icon.getImageSource('md-notifications', 50, normalColor).then((source) => this.setState({ notificationNormal: source }));
        Icon.getImageSource('md-notifications', 50, selectedColor).then((source) => this.setState({ notificationSelected: source }));
        Icon.getImageSource('md-home', 50, normalColor).then((source) => this.setState({ homeNormal: source }));
        Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({ homeSelected: source }));
        Icon.getImageSource('md-person', 50, normalColor).then((source) => this.setState({ meNormal: source }));
        Icon.getImageSource('md-person', 50, selectedColor).then((source) => this.setState({ meSelected: source }));
        Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({ compassNormal: source }));
        Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({ compassSelected: source }));
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(49),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle:{
        padding: px2dp(8)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});