/**
 * Created by wangdi on 6/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import HotPanel from '../../component/HotPanel';

export default class HomeTab extends Component{

    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <HotPanel title="热门推荐"/>
            </View>
        );
    }
}
