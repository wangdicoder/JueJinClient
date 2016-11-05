/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity, Image} from 'react-native';
import px2dp from '../../util/px2dp';

export default class ImageButton extends Component{

    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.number,
        onPress: PropTypes.func
    };


    render(){
        const {text, image, onPress} = this.props;

        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.view}>
                    <Image source={image} style={styles.img}/>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center'
    },
    img: {
        width: px2dp(40),
        height: px2dp(40)
    },
    text:{
        fontSize: px2dp(13),
        color: 'rgba(255,255,255,0.7)'
    }
});