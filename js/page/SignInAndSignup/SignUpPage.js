/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import px2dp from '../../util/px2dp';

export default class SignUpPage extends Component {

    _backCallback(){
        this.props.navigator.pop();
    }

    _signinCallback(){

    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.actionBar}>
                    <TouchableOpacity onPress={this._backCallback.bind(this)}>
                        <Icon name="md-arrow-back" size={px2dp(18)} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="邮箱/手机号"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="用户名"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView3}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{marginTop: px2dp(15)}}>
                        <Button text="注册" onPress={this._signinCallback.bind(this)}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
        backgroundColor: 'rgb(22,131,251)'
    },
    actionBar:{
        margin: px2dp(20)
    },
    editGroup:{
        padding: px2dp(20)
    },
    edit:{
        height: px2dp(38),
        fontSize: px2dp(13),
        backgroundColor: '#fff',
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        paddingBottom: px2dp(5)
    },
    editView1:{
        height: px2dp(45),
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderTopLeftRadius: px2dp(2),
        borderTopRightRadius: px2dp(2)
    },
    editView2:{
        height: px2dp(45),
        backgroundColor:'white',
        justifyContent: 'flex-end'
    },
    editView3:{
        height: px2dp(45),
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: px2dp(2),
        borderBottomRightRadius: px2dp(2)
    },
});