/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */
//import liraries
import React, {PropTypes, PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

// create a component
export default class MyButton extends PureComponent {

    static propTypes = {
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        style: Text.propTypes.style,
        containerStyle: View.propTypes.style,
        title: PropTypes.string.isRequired,
        activeOpacity: PropTypes.number
    };

    static defaultProps = {
        onPress:() => {alert("You tapped the button!")},
        disabled: false,
        activeOpacity: 0.8
    };

    render() {
        let { onPress, disabled, style, containerStyle, title, activeOpacity } = this.props;
        return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                <Text style={style}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});