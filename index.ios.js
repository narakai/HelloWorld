import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

export default class HelloWorld extends Component {
  render() {
    return (
      <NavigationBar
        title={{ title: "我是一个title", tintColor: "rgb(245,166,35)", }}
        leftButton={{ title: 'Back', }}
        rightButton={{ title: 'Forward', }}
        style={{ backgroundColor: "rgb(80,227,194)", }}
        statusBar={{ tintColor: "rgb(74,144,226)", }}
      />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
