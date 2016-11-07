/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import theme from '../config/theme';
import SearchBar from '../component/SearchBar';

export default class CompassFragment extends Component{

    render(){
        return(
            <View style={styles.container}>
                <SearchBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: theme.pageBackgroundColor
    }
});
