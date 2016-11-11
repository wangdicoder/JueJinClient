/**
 * Created by wangdi on 11/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';

export default class HotPanel extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render(){
        const {title} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="flame" color={theme.themeColor} size={15}/>
                        <Text style={{color: theme.themeColor}}>{title}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Icon name="sync" color="#c4c4c4" size={15}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="x" color="#c4c4c4" size={15}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    title: {
        flexDirection: 'row',
        height: 20,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between'
    }
});