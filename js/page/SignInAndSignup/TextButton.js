/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';

export default class TextButton extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        color: PropTypes.string
    };

    static defaultProps = {
        color: 'white'
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}>
                <View style={{height: 25}}>
                    <Text style={{fontSize:20, color: this.props.color}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({

});