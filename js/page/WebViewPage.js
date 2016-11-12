/**
 * Created by wangdi on 13/11/16.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class WebViewPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'web'
        };
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Text>{this.state.text}</Text>
                <WebView
                    source={{uri: 'https://gold.xitu.io/entry/582313c8da2f60005d1dc60a/view'}}
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
}

const styles = StyleSheet.create({
    webView: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#000',
        flex: 1
    }
});