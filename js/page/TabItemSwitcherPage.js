/**
 * Created by wangdi on 18/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, PixelRatio, Switch, BackAndroid, ToastAndroid} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../component/SimpleNavigationBar';

export default class TabItemSwitcherPage extends Component{
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
        this.state = {
            dataArray: [{name:'Android', value:true},
                        {name:'iOS', value:true},
                        {name:'前端', value:true},
                        {name:'后端', value:false},
                        {name:'产品', value:false},
                        {name:'设计', value:true},
                        {name:'阅读', value:true},
                        {name:'工具资源', value:false}]
        };
    }

    render(){
        return(
            <View>
                <NavigationBar title="首页特别展示" backOnPress={this._handleBack.bind(this)}/>
                {this.state.dataArray.map((item, i) => {
                    return(
                        <Item key={i} id={i} name={item.name} callbackParent={this._onValueChangeCallback.bind(this)}/>
                    )})
                }
            </View>
        );
    }

    _onValueChangeCallback(id, value) {
        ToastAndroid.show(id+' is changed: ' + (value? 'true':'false'), ToastAndroid.SHORT);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    }
}

class Item extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        isSwitchOn: PropTypes.bool,
        callbackParent: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            isSwitchOn: this.props.isSwitchOn
        };
    }

    render(){
        return(
            <View style={styles.item}>
                <Icon name="ios-menu" size={25} color="#ccc"/>
                <Text style={{fontSize: theme.actionBar.fontSize, color: '#000', marginLeft: 20}}>{this.props.name}</Text>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Switch
                        onValueChange={this._onValueChange.bind(this)}
                        value={this.state.isSwitchOn}/>
                </View>
            </View>
        );
    }

    _onValueChange(value){
        this.setState({
            isSwitchOn: value
        });
        this.props.callbackParent(this.props.id, this.state.isSwitchOn);
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 49,
        width: theme.screenWidth,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1/PixelRatio.get()
    }
});