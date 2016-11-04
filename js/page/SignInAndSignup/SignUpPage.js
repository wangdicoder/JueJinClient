/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';

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
                        <Icon name="md-arrow-back" size={18} color="white"/>
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
                    <View style={{marginTop: 15}}>
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
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: 'rgb(22,131,251)'
    },
    actionBar:{
        margin: 20
    },
    editGroup:{
        margin: 20
    },
    edit:{
        height: 38,
        fontSize: 13,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 3,
        marginBottom: 3
    },
    editView1:{
        height: 45,
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },
    editView2:{
        height: 45,
        backgroundColor:'white',
        justifyContent: 'flex-end'
    },
    editView3:{
        height: 45,
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
    },
});