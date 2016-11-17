/**
 * Created by wangdi on 6/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import HotPanel from '../../component/HotPanel';
import ListViewForHomeTab from '../../component/ListViewForHome';
import ListViewForOtherTab from '../../component/SimpleListView';
import computeTime from '../../util/computeTime';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: []
        };
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        return (
            <ScrollView
                style={{}}
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
                }>
                { this._renderContents() }
            </ScrollView>
        );
    }

    _renderContents() {
        var {tabTag} = this.props;
        if (tabTag === '首页')
            tabTag = '热门推荐';
        else
            tabTag += '热门';

        if (!this.state.refreshing || this.state.loadedData) {
            return (
                <View>
                    <HotPanel title={tabTag} contents={this.state.dataBlob}/>
                    { tabTag === '热门推荐' ?
                        <ListViewForHomeTab contents={this.state.dataBlob}/>
                        :
                        <ListViewForOtherTab contents={this.state.dataBlob}/>
                    }
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

    _getCurrentTime() {
        function convertTime(time) {
            if (time <= 9)
                return '0' + time;
            return time;
        }

        var date = new Date();
        return date.getFullYear() + '-' + convertTime(date.getMonth() + 1) + '-' + convertTime(date.getDate()) + 'T' + convertTime(date.getHours()) + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds() + '.' + date.getMilliseconds() + 'Z');
    }

    _fetchData() {
        var url = 'http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/' + this._getCurrentTime();
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.data;
                var dataBlob = [];

                for (let i in data) {
                    let info = {
                        tags: data[i].tagsTitleArray,
                        category: data[i].category,
                        content: data[i].content,
                        collectionCount: data[i].collectionCount,
                        title: data[i].title,
                        user: data[i].user,
                        url: data[i].url,
                        time: computeTime(data[i].createdAtString),
                        screenshot: null
                    }
                    dataBlob.push(info);
                }

                this.setState({
                    dataBlob: dataBlob,
                    loadedData: true,
                    refreshing: false
                });
            }).done();
    }
}
