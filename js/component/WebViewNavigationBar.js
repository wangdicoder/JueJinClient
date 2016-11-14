/**
 * Created by wangdi on 13/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, PixelRatio, Platform, TouchableOpacity} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageButton from '../component/ImageButtonWithText';
import Avatar from '../component/Avatar';

export default class WebViewNavigationBar extends Component{
    static propTypes = {
        userInfo: PropTypes.object,
        onPress: PropTypes.func
    };

    static defaultProps = {
        userInfo: {
            username: '',
            avatar_large: 'https://facebook.github.io/react/img/logo_og.png'
        }
    };

    render(){
        const {userInfo, onPress} = this.props;
        return(
            <View style={styles.toolbar}>
                {Platform.OS === 'android' ?
                    <ImageButton icon="md-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={onPress}/>
                    :
                    <ImageButton icon="ios-arrow-back" color="#fff" imgSize={px2dp(25)} btnStyle={styles.imgBtn} onPress={onPress}/>
                }
                <TouchableOpacity
                    onPress={this._userNameClickCallback.bind(this)}
                    activeOpacity={0.9}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar size={px2dp(30)} image={{uri: userInfo.avatar_large}}/>
                        <Text style={styles.title}>{userInfo.username}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    _userNameClickCallback(){

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
    },
    imgBtn: {
        width: px2dp(49),
        height: px2dp(49)
    },
    title:{
        color: theme.actionBar.fontColor,
        fontSize: theme.actionBar.fontSize,
        marginLeft: px2dp(5)
    }
});