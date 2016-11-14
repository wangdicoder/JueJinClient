/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

    _itemClickCallback(url, userInfo){
        MainPage.switchWebViewPage(url, userInfo);
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
                        screenshot: null
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
                { rowData.screenshot === null ?
                    <View>
                        <Text style={styles.content} numberOfLines={3}>{rowData.content}</Text>
                        <TouchableOpacity
                            onPress={this._itemClickCallback.bind(this, rowData.url, rowData.user)}
                            activeOpacity={theme.btnActiveOpacity}>
                            <View style = {styles.linkView}>
                                <View style={{flex: 20}}>
                                    <Image source={require('../image/logo_og.png')} style={styles.linkImage}/>
                                </View>
                                <View style={{flex: 80, justifyContent:'center', alignItems:'flex-start', padding: 5}}>
                                    <Text style={styles.linkText} numberOfLines={2}>{rowData.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <Image style={styles.banner} source={{uri: rowData.screenshot}}/>
                    </View>
                }
                <View style={styles.bottom}>
                    <Icon name="favorite-border" color='#58c900' size={25}/>
                    <Text style={styles.commentText}>{rowData.collectionCount}</Text>
                    <Icon name="chat-bubble-outline" size={25} color={theme.grayColor}/>
                </View>
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
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 2/PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginBottom: 7
    },
    userBar: {
        padding: 10,
        flexDirection: 'row',
        height: 45,
        width: theme.screenWidth
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 3
    },
    content: {
        color: '#000',
        padding: 10
    },
    linkView: {
        flexDirection: 'row',
        height: 60,
        width: theme.screenWidth-20,
        borderWidth: 2/PixelRatio.get(),
        borderColor: theme.grayColor,
        marginLeft: 10,
        marginRight: 10
    },
    linkImage:{
        width: 60,
        height: 60,
        resizeMode: 'cover'
    },
    linkText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    banner: {
        width: theme.screenWidth,
        height: 120,
        resizeMode: 'cover',
        marginTop: 10,
    },
    bottom: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    commentText: {
        marginRight: 25,
        marginLeft: 5
    }
});