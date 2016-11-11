/**
 * Created by wangdi on 11/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, PixelRatio} from 'react-native';
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
                                <Icon name="sync" color="#c4c4c4" size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._closeBtCallback.bind(this)}>
                                <Icon name="x" color="#c4c4c4" size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                    <View style={styles.list}>

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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 12
    },
    title: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    list: {
        height: 30
    }
});