/**
 * Created by wangdi on 14/11/16.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageButton from '../component/ImageButtonWithText';
import theme from '../config/theme';

export default class IndividualPage extends Component{

    _backCallback(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.toolbar}>
                    {Platform.OS === 'android' ?
                        <ImageButton icon="md-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={this._backCallback.bind(this)}/>
                        :
                        <ImageButton icon="ios-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={this._backCallback.bind(this)}/>
                    }
                    <Text style={styles.title}>个人主页</Text>
                </View>
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