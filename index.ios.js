import React, {Component} from 'react';
import {AppRegistry} from 'react-native'
import RootScene from "./src/RootScene";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

export default class HelloWorld extends Component {
    render() {
        return (
            <RootScene/>
        );  
    }  
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
