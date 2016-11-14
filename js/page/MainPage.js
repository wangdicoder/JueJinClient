/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';
import IndividualPage from './IndividualPage';

export default class MainScene extends Component{
    constructor(props){
        super(props);
        MainScene.switchToWebViewPage = MainScene.switchToWebViewPage.bind(this);
        MainScene.switchToIndividualPage = MainScene.switchToIndividualPage.bind(this);
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

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar/>
            </View>
        );
    }
}