/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, PixelRatio, TouchableNativeFeedback, ToastAndroid} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';


export default class MeFragment extends Component{

    _onPressCallback(position){
        ToastAndroid.show(''+position, ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <Text style={{color: theme.actionBar.fontColor, fontSize: theme.actionBar.fontSize}}>我</Text>
                </View>
                <TouchableNativeFeedback onPress={this._onPressCallback.bind(this, 0)}>
                    <View style={[styles.intro]}>
                        <Avatar image={require('../image/logo_og.png')} size={55} textSize={20}/>
                        <View style={{marginLeft: 12}}>
                            <Text style={{color: theme.text.color, fontSize: 20}}>WangdiCoder</Text>
                            <TextButton text="添加职位 @添加公司" color="#949494" fontSize={13}/>
                        </View>
                        <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                            <Icon name="ios-arrow-forward" color="#ccc" size={30}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.list}>
                    <Item icon="md-heart" text="我的收藏" subText="15篇" iconColor="#32cd32" onPress={this._onPressCallback.bind(this, 1)}/>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    <Item icon="md-eye" text="阅读过的文章" subText="15篇" onPress={this._onPressCallback.bind(this, 2)}/>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    <Item icon="md-pricetag" text="标签管理" subText="9个" onPress={this._onPressCallback.bind(this, 3)}/>
                </View>
                <View style={{height: 2/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                <View style={styles.list}>
                    <Item icon="md-ribbon" text="掘金排名" iconColor="#ff4500" onPress={this._onPressCallback.bind(this, 4)}/>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    <Item icon="md-settings" text="设置" onPress={this._onPressCallback.bind(this, 5)}/>
                </View>
                <View style={{height: 2/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
            </View>
        );
    }
}

export class Item extends Component{
    static propTypes = {
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        text: PropTypes.string.isRequired,
        subText: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        iconColor: 'gray'
    }

    render(){
        const {icon, iconColor, text, subText, onPress} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={22} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: 15, marginLeft: 20}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: theme.pageBackgroundColor
    },
    actionBar: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    intro: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderTopWidth: 1.5/PixelRatio.get(),
        borderBottomWidth: 2/PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginTop: 10
    },
    list:{
        borderTopWidth: 1.5/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: 15
    },
    listItem: {
        flex: 1,
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25
    }
});