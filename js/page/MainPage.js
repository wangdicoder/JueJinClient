/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';
import IndividualPage from './IndividualPage';
import SettingPage from './SettingPage';
import SignInPage from './SignInAndSignup/SignInPage';

export default class MainScene extends Component{
    constructor(props){
        super(props);
        MainScene.switchToWebViewPage = MainScene.switchToWebViewPage.bind(this);
        MainScene.switchToIndividualPage = MainScene.switchToIndividualPage.bind(this);
        MainScene.switchToSettingPage = MainScene.switchToSettingPage.bind(this);
        MainScene.switchToSingInPage = MainScene.switchToSingInPage.bind(this);
    }

    static switchToWebViewPage(url, userInfo){
        this.props.navigator.push({
            component: WebViewPage,
            args: {url: url, user: userInfo}
        });
    }

    static switchToIndividualPage(userInfo){
        this.props.navigator.push({
            component: IndividualPage,
            args: {user: userInfo}
        });
    }

    static switchToSettingPage(){
        this.props.navigator.push({
            component: SettingPage
        });
    }

    static switchToSingInPage(){
        this.props.navigator.push({
            component: SignInPage
        });
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar/>
            </View>
        );
    }
}