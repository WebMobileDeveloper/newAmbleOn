import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    View,
} from 'react-native';
// import NativeButton from 'apsl-react-native-button';

import { ratio, colors } from './Styles';

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        borderRadius: 4 * ratio,
        borderWidth: 2 * ratio,
        width: 320 * ratio,
        height: 52 * ratio,
        borderColor: 'white',

        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDisabled: {
        backgroundColor: 'rgb(243,243,243)',
        alignSelf: 'center',
        borderRadius: 4 * ratio,
        borderWidth: 2 * ratio,
        width: 320 * ratio,
        height: 52 * ratio,
        borderColor: '#333',

        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 14 * ratio,
        color: 'white',
    },
    imgLeft: {
        width: 24 * ratio,
        height: 24 * ratio,
        position: 'absolute',
        left: 16 * ratio,
    },
});
export default class RecorderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onButtonPress = () => {
        this.props.onPress();
    }
    render() {
        if (this.props.isDisabled) {
            return (
                <View style={this.props.disabledStyle}>
                    <Text style={this.props.textStyle}>{this.props.children}</Text>
                </View>
            );
        }
        if (this.props.isLoading) {
            return (
                <View style={this.props.style}>
                    <ActivityIndicator size='small' color={this.props.indicatorColor} />
                </View>
            );
        }
        return (
            <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPress}
            >
                <View style={this.props.style}>
                    {
                        this.props.imgLeftSrc
                            ? <Image
                                style={this.props.imgLeftStyle}
                                source={this.props.imgLeftSrc}
                            />
                            : null
                    }
                    <Text style={this.props.textStyle}>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
RecorderButton.defaultProps = {
    isLoading: false,
    isDisabled: false,
    style: styles.btn,
    textStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
    indicatorColor: 'white',
    activeOpacity: 0.5,
};
