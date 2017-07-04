/**
 * Created by wangdi on 20/11/16.
 */
import React, {Component} from 'react';
import {BackHandler} from 'react-native';

export default class PageComponent extends Component{
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
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