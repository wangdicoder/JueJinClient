/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, PixelRatio, ListView, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import MainPage from '../page/MainPage';

export default class ListViewForCompass extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds
        }
    }

    _getList(){
        fetch('http://gold.xitu.io/api/v1/hot/57fa525a0e3dd90057c1e04d/android')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                var data = responseData.data;
                var entry = data.entry;
                var dataBlob = [];

                for(let i in entry){
                    let itemInfo = {
                        title: entry[i].title,
                        count: entry[i].collectionCount,
                        author: entry[i].user,
                        time: this._computeTime(entry[i].createdAtString),
                        url: entry[i].url
                    }
                    dataBlob.push(itemInfo);
                }

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataBlob)
                });
        }).done();

    }

    _computeTime(time){
        return '1天前';
    }

    _itemClickCallback(url, userInfo){
        MainPage.switchWebViewPage(url, userInfo);
    }

    _renderItem(rowData, sectionID, rowID, highlightRow){
        //if(Platform.OS === 'ios') {
            return (
                <TouchableOpacity
                    onPress={this._itemClickCallback.bind(this, rowData.url, rowData.author)}
                    activeOpacity={theme.btnActiveOpacity}>
                    <View>
                        <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}/>
                        <View style={styles.item}>
                            <View style={{flex: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Image style={styles.image} source={require('../image/logo_og.png')} resizeMode="stretch"/>
                            </View>
                            <View style={{flex: 80, marginTop: px2dp(10)}}>
                                <Text style={styles.content}>{rowData.title}</Text>
                                <View style={styles.infoBar}>
                                    <Text style={styles.infoBarText}>{rowData.count}人收藏 • </Text>
                                    <Text style={styles.infoBarText}>{rowData.author.username} • </Text>
                                    <Text style={styles.infoBarText}>{rowData.time}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        {/*}else if(Platform.OS === 'android'){*/}
            {/*return (*/}
                {/*<TouchableNativeFeedback*/}
                    {/*onPress={this._itemClickCallback.bind(this)}>*/}
        //             <View>
        //                 <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}/>
        //                 <View style={styles.item}>
        //                     <View style={{flex: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        //                         <Image style={styles.image} source={require('../image/logo_og.png')} resizeMode="stretch"/>
        //                     </View>
        //                     <View style={{flex: 75, marginTop: px2dp(15)}}>
        //                         <Text style={styles.content}>{rowData.title}</Text>
        //                         <View style={styles.infoBar}>
        //                             <Text style={styles.infoBarText}>{rowData.count}人收藏 • </Text>
        //                             <Text style={styles.infoBarText}>{rowData.author} • </Text>
        //                             <Text style={styles.infoBarText}>{rowData.time}</Text>
        //                         </View>
        //                     </View>
        //                 </View>
        //             </View>
        //         </TouchableNativeFeedback>
        //     )
        // }
    }

    _renderHeader(){
        return(
          <View style={styles.header}>
              <Text>热门文章</Text>
          </View>
        );
    }

    render(){
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
            />
        );
    }

    componentDidMount(){
        this._getList();
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: px2dp(15)
    },
    header: {
        backgroundColor: '#fff',
        height: px2dp(40),
        paddingLeft: px2dp(15),
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        width: theme.screenWidth,
        height: px2dp(80),
        backgroundColor: '#fff',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(17)
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(50),
        width: px2dp(50)
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: px2dp(3)
    },
    infoBarText: {
        fontSize: px2dp(11),
        color: theme.grayColor
    }
});