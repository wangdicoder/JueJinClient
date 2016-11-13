/**
 * Created by wangdi on 13/11/16.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/WebViewNavigationBar';

export default class WebViewPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <NavigationBar userInfo={this.props.user} onPress={this._backCallback.bind(this)}/>
                <WebView
                    source={{uri: this.props.url}}
                    style={styles.webView}
                    renderLoading={this._renderLoading.bind(this)}
                    onLoad={this._showTips.bind(this, 'load')}
                    onError={this._showTips.bind(this, 'error')}
                />
            </View>
        );
    }

    _showTips(msg){
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    _renderLoading(){
        return(
            <Text style={{fontSize: 30}}>Loading</Text>
        );
    }

    _backCallback(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    webView: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#000',
        flex: 1
    }
});