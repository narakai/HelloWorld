/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BoxModel from "./src/BoxModel";

const pizzaImage = require('./src/img/pizza.jpg');

export default class HelloWorld extends Component {
    render() {
        return (
            <ScrollView>
                <View style={viewStyles}>
                    <TouchableHighlight
                        style={[buttonStyles.core, buttonStyles.spacer]}
                    >
                        <Text>Default Normal</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[buttonStyles.core, buttonStyles.hairlineBorder,
                            buttonStyles.spacer]}
                        underlayColor="#30abaaaa"
                        activeOpacity={0.8}
                        onPress={() => {
                        }}
                    >
                        <Text>Default Hairline</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[buttonStyles.core, buttonStyles.primary, buttonStyles.spacer]}
                    >
                        <Text>Primary Normal</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[buttonStyles.core, buttonStyles.primary,
                            buttonStyles.hairlineBorder]}
                    >
                        <Text>Primary Hairline</Text>
                    </TouchableHighlight>
                    <BoxModel/>
                </View>
            </ScrollView>
        );
    }
}

// 父视图属性(容器属性)：
//
// flexDirection enum('row', 'column','row-reverse','column-reverse')
// flexWrap enum('wrap', 'nowrap')
// justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
// alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
// http://www.jianshu.com/p/688b9108a922

const viewStyles = {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff3',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center'
};


// 子视图属性
//
// alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
// flex number
const buttonStyles = StyleSheet.create({
    core: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,
        width: 125,
        height: 25,
    }, primary: {
        backgroundColor: '#60b044',
        borderColor: '#355f27'
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
        marginBottom: 10
    },
    bg: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        resizeMode: 'cover'
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);