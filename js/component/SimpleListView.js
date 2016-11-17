/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, PixelRatio, ListView, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import MainPage from '../page/MainPage';

export default class SimpleListView extends Component{
    static propTypes = {
        isRenderHeader: PropTypes.bool
    }

    static defaultProps = {
        isRenderHeader: false
    }

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.contents)
        }
    }

    _itemClickCallback(url, userInfo){
        MainPage.switchToWebViewPage(url, userInfo);
    }

    _renderItem(rowData, sectionID, rowID, highlightRow){
        if(Platform.OS === 'ios') {
            return (
                <TouchableOpacity
                    onPress={this._itemClickCallback.bind(this, rowData.url, rowData.user)}
                    activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.item}>
                        <View style={{
                            flex: 20,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Image style={styles.image} source={require('../image/user_article_no_data.png')}
                                   resizeMode="stretch"/>
                        </View>
                        <View style={{flex: 80, marginTop: px2dp(10)}}>
                            <Text style={styles.content} numberOfLines={2}>{rowData.title}</Text>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoBarText} numberOfLines={1}>{rowData.collectionCount}人收藏
                                    • {rowData.user.username} • {rowData.time}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }else if(Platform.OS === 'android'){
            return (
                <TouchableNativeFeedback onPress={this._itemClickCallback.bind(this, rowData.url, rowData.user)}>
                    <View style={styles.item}>
                        <View style={{
                            flex: 20,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Image style={styles.image} source={require('../image/user_article_no_data.png')}
                                   resizeMode="stretch"/>
                        </View>
                        <View style={{flex: 80, marginTop: px2dp(10)}}>
                            <Text style={styles.content} numberOfLines={2}>{rowData.title}</Text>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoBarText} numberOfLines={1}>{rowData.collectionCount}人收藏
                                    • {rowData.user.username} • {rowData.time}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }

    _renderHeader(){
        if(this.props.isRenderHeader) {
            return (
                <View style={styles.header}>
                    <Text>热门文章</Text>
                </View>
            );
        }
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
        paddingRight: px2dp(17),
        borderTopColor: '#d4d4d4',
        borderTopWidth: 1 / PixelRatio.get()
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(55),
        width: px2dp(55),
        backgroundColor: '#f4f4f4'
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