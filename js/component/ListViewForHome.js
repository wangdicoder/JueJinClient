/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import MainPage from '../page/MainPage';
import TextButton from '../component/TextButton';

export default class ListViewForHome extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds
        };
    }

    _getList(){
        fetch('http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/2016-11-13T05:04:10.044Z')
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.data;
                var dataBlob = [];

                for(let i in data){
                    let info = {
                        tags: data[i].tagsTitleArray,
                        content: data[i].content,
                        collectionCount: data[i].collectionCount,
                        title: data[i].title,
                        user: data[i].user,
                        url: data[i].url,
                        time: this._computeTime(data[i].createdAtString),
                        screenshot: data[i].screenshot
                    }
                    dataBlob.push(info);
                }

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataBlob)
                });
            }).done();
    }

    _computeTime(time){
        return '3小时';
    }

    _renderItem(rowData, sectionID, rowID, highlightRow){
        return(
            <View style={styles.items}>
                <View style={styles.userBar}>
                    <View style={{flex: 10}}>
                        <Image style={styles.avatar} source={{uri: rowData.user.avatar_large}}/>
                    </View>
                    <View style={{flex: 90, marginLeft: 10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <TextButton text={rowData.user.username} color='steelblue' fontSize={14}/>
                            <Text style={{fontSize: 12, color: theme.grayColor}}>{rowData.tags[0]}</Text>
                        </View>
                        <View style={{marginTop:3}}>
                            <Text style={{fontSize: 11, color: theme.grayColor}} numberOfLines={1}>{rowData.user.jobTitle} @ {rowData.user.company} • {rowData.time}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.content} numberOfLines={3}>{rowData.content}</Text>
            </View>
        );
    }

    render(){
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
            />
        )
    }

    componentDidMount(){
        this._getList();
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: px2dp(15)
    },
    items: {
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 2/PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginBottom: 7
    },
    userBar: {
        flexDirection: 'row',
        height: 45,
        width: theme.screenWidth - 20
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 3
    },
    content: {
        color: '#000'
    }
});