/**
 * Created by wangdi on 11/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Platform, TouchableNativeFeedback, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';
import MainPage from '../page/MainPage';

export default class HotPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHotPanelShow: true,
            data: []
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        contents: PropTypes.array
    };

    componentWillMount(){  //handle three top data
        for(let i in this.props.contents){
            this.state.data[i] = this.props.contents[i];
        }

        this.state.data.sort((item1, item2) => {
            if(item1.collectionCount < item2.collectionCount)
                return 1;
            if(item1.collectionCount > item2.collectionCount)
                return -1;
            return 0;
        });

        this.state.data.length = 3;
    }

    render(){
        const {title} = this.props;
        var {data} = this.state;

        if(this.state.isHotPanelShow) {
            return (
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="flame" color={theme.themeColor} size={px2dp(16)}/>
                            <Text style={{
                                color: theme.themeColor,
                                fontSize: theme.scrollView.fontSize,
                                marginLeft: px2dp(5)
                            }}>{title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={{marginRight: px2dp(15)}}
                                onPress={this._refreshBtnCallback.bind(this)}
                                activeOpacity={theme.btnActiveOpacity}>
                                <Icon name="sync" color={theme.grayColor} size={px2dp(20)}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._closeBtCallback.bind(this)}
                                activeOpacity={theme.btnActiveOpacity}>
                                <Icon name="x" color={theme.grayColor} size={px2dp(20)}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                    <View style={styles.list}>
                        {data.map((item, index) => {
                            if(Platform.OS === 'ios'){
                            return(
                                <TouchableOpacity
                                    key={index}
                                    onPress={this._hotPanelCallback.bind(this, item)}
                                    activeOpacity={theme.btnActiveOpacity}>
                                    {this._renderContent(item, index)}
                                </TouchableOpacity>
                            )}else if(Platform.OS === 'android'){
                            return(
                                <TouchableNativeFeedback
                                    key={index}
                                    onPress={this._hotPanelCallback.bind(this, item)}>
                                    {this._renderContent(item, index)}
                                </TouchableNativeFeedback>
                            )}})
                        }
                    </View>
                </View>
            )
        }else{
            return null;
        }
    }

    _renderContent(item, index){
        return(
            <View>
                <View style={styles.listItem}>
                    <View style={{flex: 80, marginTop: px2dp(10)}}>
                        <Text style={styles.content} numberOfLines={2}>{item.title}</Text>
                        <View style={styles.infoBar}>
                            <Icon name="heart" size={px2dp(13)} color={theme.grayColor}/>
                            <Text style={styles.infoBarText}>{item.collectionCount}</Text>
                            <Icon name="person" size={px2dp(12)} color={theme.grayColor}/>
                            <Text style={styles.infoBarText}>{item.user.username}</Text>
                            <Icon name="clock" size={px2dp(13)} color={theme.grayColor}/>
                            <Text style={styles.infoBarText}>{item.time}</Text>
                        </View>
                    </View>
                    <View style={{flex: 20, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        {item.screenshot ?
                            <Image source={{uri: item.screenshot.url}}
                                   style={styles.image}/>
                            :
                            <Image source={require('../image/user_article_no_data.png')}
                                   style={styles.image}/>
                        }
                    </View>
                </View>
                <View style={{height: 1/PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
            </View>
        );
    }

    _closeBtCallback(){
        this.setState({isHotPanelShow: false});
    }

    _refreshBtnCallback(){

    }

    _hotPanelCallback(rowData){
        MainPage.switchToWebViewPage(rowData);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: px2dp(12),
        marginBottom: px2dp(3),
    },
    title: {
        flexDirection: 'row',
        width: theme.screenWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15),
        paddingTop: px2dp(7),
        paddingBottom: px2dp(7),
    },
    list: {
        width: theme.screenWidth,
    },
    listItem: {
        height: px2dp(80),
        flexDirection: 'row',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(50),
        width: px2dp(50),
        backgroundColor: '#f4f4f4',
        resizeMode:'cover'
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: px2dp(5)
    },
    infoBarText: {
        fontSize: px2dp(10),
        marginRight: px2dp(12),
        color: theme.grayColor
    }
});