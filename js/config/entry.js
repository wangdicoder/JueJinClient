/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import MainPage from '../page/MainPage';
import SignInPage from '../page/SignInAndSignup/SignInPage';
import WebViewPage from '../page/WebViewPage';
import SplashScreen from '../native_modules/SplashScreen';

export default class Navigation extends Component{

    render(){
        return(
        <Navigator
            initialRoute={{component: MainPage}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }

    componentDidMount(){
        if(Platform.OS === 'android')
            SplashScreen.hide();
    }
}