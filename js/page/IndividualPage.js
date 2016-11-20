/**
 * Created by wangdi on 14/11/16.
 */
import React, {PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio, BackAndroid} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/SimpleNavigationBar';
import PageComponent from './BackPageComponent';

export default class IndividualPage extends PageComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <NavigationBar title="个人主页" backOnPress={this._handleBack.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});