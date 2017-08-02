/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'L', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'K', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'M', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'N', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'T', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(47,147,147,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);