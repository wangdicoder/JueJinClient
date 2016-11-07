/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, PixelRatio, TouchableNativeFeedback, ToastAndroid} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';


export default class MeFragment extends Component{

    _onPressCallback(id){
        ToastAndroid.show(''+id, ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <Text style={{color: theme.actionBar.fontColor, fontSize: theme.actionBar.fontSize}}>我</Text>
                </View>
                <TouchableNativeFeedback onPress={this._onPressCallback.bind(this)}>
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

            </View>
        );
    }
}

export class Item extends Component{
    render(){
        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress>

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
    }
});