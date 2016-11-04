/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import TextButton from './TextButton';
import SignUpPage from './SignUpPage';

export default class SignInPage extends Component{

    _backCallback(){

    }

    _signinCallback(){

    }

    _signupCallback(){
        this.props.navigator.push({
            component: SignUpPage
        });
    }

    _forgetPassword(){

    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.actionBar}>
                    <TouchableOpacity onPress={this._backCallback.bind(this)}>
                        <Icon name="md-arrow-back" size={30} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.logo}>
                    <Image style={{width:80, height:80}} source={require('../../image/ic_login_logo.png')}/>
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="手机号/邮箱"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1, backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Button text="登录" onPress={this._signinCallback.bind(this)}/>
                    </View>
                    <View style={styles.textButtonLine}>
                        <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
                        <TextButton text="注册账号" onPress={this._signupCallback.bind(this)}/>
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
        margin: 25
    },
    logo:{
        alignItems: 'center',
        margin: 20
    },
    edit:{
        height: 45,
        fontSize: 20,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 7
    },
    editView1:{
        height: 65,
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    editView2:{
        height: 65,
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    editGroup:{
        margin: 20
    },
    textButtonLine:{
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});