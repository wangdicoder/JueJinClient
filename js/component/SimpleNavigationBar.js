/**
 * Created by wangdi on 16/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import ImageButton from '../component/ImageButtonWithText';
import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class SimpleNavigationBar extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        backOnPress: PropTypes.func.isRequired
    };

    render(){
        return(
            <View style={styles.toolbar}>
                {Platform.OS === 'android' ?
                    <ImageButton icon="md-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
                    :
                    <ImageButton icon="ios-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
                }
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: theme.actionBar.height,
        width: theme.screenWidth,
        backgroundColor: theme.actionBar.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    },
    imgBtn: {
        width: px2dp(49),
        height: px2dp(49)
    },
    title:{
        color: theme.actionBar.fontColor,
        fontSize: theme.actionBar.fontSize,
        marginLeft: px2dp(5),
    }
});