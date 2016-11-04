/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Navigator} from 'react-native';
import MainScene from '../page/MainScene';

export default class Navigation extends Component{

    render(){
        return(
        <Navigator
            initialRoute={{component: MainScene}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }
}