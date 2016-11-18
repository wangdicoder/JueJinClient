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
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class TabItemSwitcherPage extends Component{
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
        this.state = {
            dataArray: [{name:'Android', value:false},
                        {name:'iOS', value:false},
                        {name:'前端', value:false},
                        {name:'后端', value:false},
                        {name:'产品', value:false},
                        {name:'设计', value:false},
                        {name:'阅读', value:false},
                        {name:'工具资源', value:false}]
        };
    }

    render(){
        return(
            <View>
                <NavigationBar title="首页特别展示" backOnPress={this._handleBack.bind(this)}/>
                {this.state.dataArray.map((item, i) => {
                    return(
                        <Item key={i} id={i} name={item.name} isSwitchOn={item.value} callbackParent={this._onValueChangeCallback.bind(this)}/>
                    )})
                }
            </View>
        );
    }

    _onValueChangeCallback(id, value) {
        this.state.dataArray.map((item, index) => {
            if(index === id){
                item.value = !value;  //anti-human!!!!
            }
        });
    }

    componentWillMount(){
        var array = [{name:'Android', value:false},
                     {name:'iOS', value:false},
                     {name:'前端', value:false},
                     {name:'后端', value:false},
                     {name:'产品', value:false},
                     {name:'设计', value:false},
                     {name:'阅读', value:false},
                     {name:'工具资源', value:false}];

        for(let i in array){
            for(let j in this.props.tabNames){
                if(this.props.tabNames[j] === array[i].name) {
                    array[i].value = true;
                }
            }
        }

        this.setState({dataArray: array});
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    _handleBack() {
        //update
        var tabNames = [];
        tabNames.push('首页');
        for(let i in this.state.dataArray){
            if(this.state.dataArray[i].value){
                tabNames.push(this.state.dataArray[i].name);
            }
        }
        RCTDeviceEventEmitter.emit('valueChange', tabNames);

        //back to the last page
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
                <Icon name="ios-menu" size={px2dp(25)} color="#ccc"/>
                <Text style={{fontSize: theme.actionBar.fontSize, color: '#000', marginLeft: px2dp(20)}}>{this.props.name}</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
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
        height: px2dp(49),
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: px2dp(20),
        paddingRight: px2dp(20),
        borderBottomColor: '#ccc',
        borderBottomWidth: 1/PixelRatio.get()
    }
});