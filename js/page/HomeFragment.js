/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import theme from '../config/theme';

export default class HomeFragment extends Component{

    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});