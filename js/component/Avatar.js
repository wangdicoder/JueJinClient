/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component, PropTypes} from "react";
import {View, Image, Text} from "react-native";

export default class Avatar extends Component {
    static propTypes = {
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        size: PropTypes.number,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        text: PropTypes.string,
        textSize: PropTypes.number,
        borderRadius: PropTypes.number,
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number
    };

    static defaultProps = {
        size: 40,
        color: '#ffffff',
        backgroundColor: 'skyblue',
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1
    };

    render() {
        const {
            image,
            size,
            color,
            backgroundColor,
            text,
            textSize,
            borderColor,
            borderWidth
        } = this.props;

        if (image) {
            return(
                <View style={{padding: 3}}>
                    <Image
                        style={{width: size, height: size, borderRadius: size/2, borderColor: borderColor, borderWidth: borderWidth}}
                        source={image}>
                    </Image>
                </View>
            )
        }

        if (text) {
            return (
                <View style={{padding: 5}}>
                    <View style={{ width: size, height: size, borderRadius: size/2, backgroundColor: backgroundColor, alignItems:'center', justifyContent: 'center' }}>
                        <Text style={{ color: color, fontSize: textSize }}>{text}</Text>
                    </View>
                </View>
            );
        }

        return null;
    }
}