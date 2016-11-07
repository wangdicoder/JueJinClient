/**
 * Created by wangdi on 7/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends Component{
    static propTypes = {
        onPress: PropTypes.func
    };

    render(){
        if(Platform.OS === 'android'){
            return(
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={this.props.onPress}>
                        <View style={styles.searchBar}>
                            <Icon name="ios-search" size={px2dp(25)} color="white"/>
                            <Text style={styles.text}>搜索</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <View style={styles.searchBar}>
                            <Icon name="ios-search" size={px2dp(25)} color="white"/>
                            <Text style={styles.text}>搜索</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        justifyContent: 'center'
    },
    searchBar: {
        flexDirection: 'row',
        height: px2dp(33),
        paddingLeft: px2dp(13),
        paddingRight: px2dp(13),
        backgroundColor: '#489efc',
        alignItems: 'center',
        marginRight: px2dp(8),
        marginLeft: px2dp(8),
        borderRadius: px2dp(3)
    },
    text: {
        fontSize: px2dp(15),
        color: 'rgba(255,255,255,0.7)',
        marginLeft: px2dp(13)
    }
});