/**
 * Created by wangdi on 16/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, ScrollView, Switch, TouchableNativeFeedback, TouchableOpacity, Platform, PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/SimpleNavigationBar';

export default class SettingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            switchIsOn: true
        };
    }

    _backCallback(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <NavigationBar title="设置" backOnPress={this._backCallback.bind(this)}/>
                <ScrollView>
                    <View style={styles.list}>
                        <Item text="邮箱" subText="未设置"/>
                        <Item text="手机号" subText="未设置"/>
                        <Item text="修改账户密码"/>
                    </View>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        <Item text="绑定新浪微博" subText="未设置" isHasSwitcher={true}/>
                        <Item text="绑定微信" subText="未设置" isHasSwitcher={true}/>
                        <Item text="绑定Github" subText="React-Native" isHasSwitcher={true} switcherValue={true}/>
                    </View>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        <Item text="清除缓存"/>
                        <Item text="向我推送好文章" isHasSwitcher={true}/>
                        <Item text="移动网络下首页不显示图片" isHasSwitcher={true}/>
                        <Item text="自动检查粘贴板快速分享" isHasSwitcher={true} switcherValue={true}/>
                    </View>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        <Item text="用户反馈" />
                        <Item text="关于" />
                    </View>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        { Platform.OS === 'android' ?
                            <TouchableNativeFeedback>
                                <View style={[styles.listItem, {justifyContent: 'center'}]}>
                                    <Text style={{color: 'red', fontSize: px2dp(15)}}>退出登录</Text>
                                </View>
                            </TouchableNativeFeedback>
                            :
                            <TouchableOpacity activeOpacity={theme.btnActiveOpacity}>
                                <View style={[styles.listItem, {justifyContent: 'center'}]}>
                                    <Text style={{color: 'red', fontSize: px2dp(15)}}>退出登录</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={{flexDirection: 'row' , justifyContent: 'center', marginBottom: 30, marginTop: 20}}>
                        <Text style={{color: '#ccc'}}>掘金 3.7.3 - gold.xitu.io</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }


}

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            switchIsOn: this.props.switcherValue
        };
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        textColor: PropTypes.string,
        subText: PropTypes.string,
        onPress: PropTypes.func,
        isHasSwitcher: PropTypes.bool,
        switcherValue: PropTypes.bool
    }

    static defaultProps = {
        textColor: '#000',
        switcherValue: false
    }

    render(){
        const {text, textColor, subText, onPress, isHasSwitcher, switcherValue} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View>
                        <View style={styles.listItem}>
                            <Text style={{color: textColor, fontSize: px2dp(15)}}>{text}</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                                <Text style={{color: "#ccc"}}>{subText}</Text>
                                { isHasSwitcher ?
                                    <Switch
                                        onValueChange={(value) => this.setState({switchIsOn: value})}
                                        style={{marginLeft: px2dp(5)}}
                                        value={this.state.switchIsOn}/>
                                    :
                                    null
                                }
                            </View>
                        </View>
                        <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    </View>
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress}>
                    <View>
                        <View style={styles.listItem}>
                            <Text style={{color: textColor, fontSize: px2dp(15)}}>{text}</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                                <Text style={{color: "#ccc"}}>{subText}</Text>
                                { isHasSwitcher ?
                                    <Switch
                                        onValueChange={(value) => this.setState({switchIsOn: value})}
                                        style={{marginLeft: px2dp(5)}}
                                        value={this.state.switchIsOn}
                                        onTintColor={theme.themeColor}/>
                                    :
                                    null
                                }
                            </View>
                        </View>
                        <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    list:{
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(12)
    },
    listItem: {
        flex: 1,
        height: px2dp(47),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25)
    },
});