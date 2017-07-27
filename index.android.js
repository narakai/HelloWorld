/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Title = require('./src/Title');

export default class HelloWorld extends Component {
    render() {
        return (
            <View>
                <h1>TITLE</h1>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Title titleText="Custom module"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
