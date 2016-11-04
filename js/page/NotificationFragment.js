/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';


export default class NotificationFragment extends Component{

    render(){
        return(
            <View style={styles.view}>
                <Text>notification</Text>
            </View>
        );
    }
}

const styles = ({
    view: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    }
});