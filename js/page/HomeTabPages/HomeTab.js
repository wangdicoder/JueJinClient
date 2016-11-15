/**
 * Created by wangdi on 6/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import HotPanel from '../../component/HotPanel';
import ListView from '../../component/ListViewForHome';
import DataModel from '../../model/DataModel';
import ListViewForOtherTab from '../../component/SimpleListView';

export default class HomeTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
            hotData: [{title: '仅两步实现 拜拜 汉堡导航栏效果～ 全新底部导航交互', star: 235, author: 'android', time: '一周前', url: 'http://www.google.com.au', image:  ''},
                      {title: '双十一特级', star: 653, author: '魔法诗', time: '23小时', url: 'http://www.google.com.au', image:  ''},
                      {title: 'Git操作知识，再见一步', star: 115, author: 'sdzdee', time: '3天前', url: 'http://www.google.com.au', image:  ''}]
        }

    }

    updataRefresherState(refreshing){
        this.setState({refreshing: refreshing});
    }

    componentDidMount(){
    }

    render(){
        return(
            <ScrollView
                style={{}}
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
                }>
                { this._renderContents() }
            </ScrollView>
        );
    }

    _renderContents(){
        var {tabTag} = this.props;
        if(tabTag === '首页')
            tabTag = '热门推荐';
        else
            tabTag += '热门';

        if(!this.state.refreshing){
            return(
                <View>
                    <HotPanel title={tabTag} contents={this.state.hotData}/>
                    { tabTag === '热门推荐' ? <ListView /> : <ListViewForOtherTab /> }
                </View>
            );
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        // fetchData().then(() => {
        //     this.setState({refreshing: false});
        // });

        setTimeout(() => this.setState({refreshing: false}), 3000);
    }
}
