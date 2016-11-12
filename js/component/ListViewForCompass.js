/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, ListView, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../util/px2dp';

export default class ListViewForCompass extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds
        }
    }

    _getList(){
        fetch('http://gold.xitu.io/api/v1/hot/57fa525a0e3dd90057c1e04d/android')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                var data = responseData.data;
                var entry = data.entry;
                var dataBlob = [];

                for(let i in entry){
                    dataBlob.push(entry[i].title);
                    console.log(entry[i].title);
                }

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataBlob)
                });
        }).done();

    }

    _renderItem(rowData, sectionID, rowID, highlightRow){
        return(
            <Text>{rowData}</Text>
        )
    }

    _renderHeader(){
        return(
          <View style={styles.header}>
              <Text>热门文章</Text>
          </View>
        );
    }

    render(){
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
            />
        );
    }

    componentDidMount(){
        this._getList();
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: 15
    },
    header: {
        backgroundColor: '#fff',
        height: 40,
        paddingLeft: 15,
        justifyContent: 'center'
    }
});