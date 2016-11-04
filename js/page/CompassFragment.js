/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';


export default class CompassFragment extends Component{

    render(){
        return(
            <View style={styles.view}>
                <Text>compass</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    }
});
