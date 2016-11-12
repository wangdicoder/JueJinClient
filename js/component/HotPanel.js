/**
 * Created by wangdi on 11/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';

export default class HotPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHotPanelShow: true
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        contents: PropTypes.object
    };

    render(){
        const {title, contents} = this.props;

        if(this.state.isHotPanelShow) {
            return (
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="flame" color={theme.themeColor} size={16}/>
                            <Text style={{
                                color: theme.themeColor,
                                fontSize: theme.scrollView.fontSize,
                                marginLeft: 5
                            }}>{title}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={{marginRight: 15}}
                                onPress={this._refreshBtnCallback.bind(this)}>
                                <Icon name="sync" color={theme.grayColor} size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._closeBtCallback.bind(this)}>
                                <Icon name="x" color={theme.grayColor} size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                    <View style={styles.list}>
                        <TouchableOpacity
                            onPress={this._hotPanelCallback.bind(this)}>
                            <View style={styles.listItem}>
                                <View style={{flex: 75}}>
                                    <Text style={styles.content}>仅2步实现 拜拜 汉堡导航栏效果～全新底部导航交互</Text>
                                    <View style={styles.infoBar}>
                                        <Icon name="heart" size={13} color={theme.grayColor}/>
                                        <Text style={styles.infoBarText}>234</Text>
                                        <Icon name="person" size={12} color={theme.grayColor}/>
                                        <Text style={styles.infoBarText}>Android</Text>
                                        <Icon name="clock" size={13} color={theme.grayColor}/>
                                        <Text style={styles.infoBarText}>1周前</Text>
                                    </View>
                                </View>
                                <View style={{flex: 25, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <Image style={styles.image} source={require('../image/logo_og.png')} resizeMode="stretch"/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return null;
        }
    }

    _closeBtCallback(){
        this.setState({isHotPanelShow: false});
    }

    _refreshBtnCallback(){

    }

    _hotPanelCallback(){

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 12
    },
    title: {
        flexDirection: 'row',
        width: theme.screenWidth,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    list: {
        width: theme.screenWidth,
    },
    listItem: {
        height: 90,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 15,
        alignItems: 'center'
    },
    content: {
        color: '#000',
        fontSize: 15,
    },
    image: {
        height: 60,
        width: 60
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: 8
    },
    infoBarText: {
        fontSize: 10,
        marginRight: 12,
        color: theme.grayColor
    }
});