/**
 * Created by wangdi on 16/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/SimpleNavigationBar';

export default class SettingPage extends Component{


    _backCallback(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <NavigationBar title="设置" backOnPress={this._backCallback.bind(this)}/>
            </View>
        );
    }


}