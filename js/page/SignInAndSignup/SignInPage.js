/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from '../MainPage';
import Button from './Button';
import TextButton from './TextButton';
import SignUpPage from './SignUpPage';
import ImageButton from './ImageButton';
import TextDivider from './TextDivider';
import px2dp from '../../util/px2dp';

export default class SignInPage extends Component{

    _backCallback(){
        this.props.navigator.push({
            component: MainPage
        });
    }

    _signinCallback(){
        this.props.navigator.push({
            component: MainPage
        });
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
                        <Icon name="md-arrow-back" size={px2dp(18)} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.logo}>
                    <Image style={{width:px2dp(45), height:px2dp(45)}} source={require('../../image/ic_login_logo.png')}/>
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="手机号/邮箱"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{marginTop: px2dp(10)}}>
                        <Button text="登录" onPress={this._signinCallback.bind(this)}/>
                    </View>
                    <View style={styles.textButtonLine}>
                        <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
                        <TextButton text="注册账号" onPress={this._signupCallback.bind(this)}/>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'flex-end', margin: px2dp(20)}}>
                        <TextDivider text="其他账号登录"/>
                    </View>
                    <View style={styles.thirdPartyView}>
                        <ImageButton text="微博" image={require('../../image/weibo_login.png')}/>
                        <ImageButton text="微信" image={require('../../image/wechat_login.png')}/>
                        <ImageButton text="Github" image={require('../../image/github_login.png')}/>
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
        padding: px2dp(20)
    },
    logo:{
        alignItems: 'center',
        marginTop: px2dp(40)
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
        borderTopLeftRadius: px2dp(0),
        borderTopRightRadius: px2dp(0)
    },
    editView2:{
        height: px2dp(45),
        backgroundColor:'white',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: px2dp(0),
        borderBottomRightRadius: px2dp(0)
    },
    editGroup:{
        margin: px2dp(20)
    },
    textButtonLine:{
        marginTop: px2dp(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thirdPartyView:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around'
    }

});