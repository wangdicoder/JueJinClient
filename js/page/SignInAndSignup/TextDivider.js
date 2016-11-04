/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, PixelRatio, TouchableOpacity, Image} from 'react-native';

export default class TextDivider extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.divider}/>
                <Text style={styles.text}>{this.props.text}</Text>
                <View style={styles.divider}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider:{
        flex: 1,
        backgroundColor: '#3d3d3d',
        height: 1 / PixelRatio.get()
    },
    text:{
        color: '#3d3d3d',
        fontSize: 10,
        marginLeft: 9,
        marginRight: 9
    }
});
