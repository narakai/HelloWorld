import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react';
import {Image, SectionList, StyleSheet, Text, View,} from 'react-native'
import MyButton from "./MyButton";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 父视图属性(容器属性)：
//
// flexDirection enum('row', 'column','row-reverse','column-reverse')
// flexWrap enum('wrap', 'nowrap')
// justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
// alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
// http://www.jianshu.com/p/688b9108a922


// 子视图属性
//
// alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
// flex number

export default class RootScene extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <NavigationBar
                    title={{title: "我是一个title", tintColor: "rgb(245,166,35)",}}
                    leftButton={{title: 'Back',}}
                    rightButton={{title: 'Forward',}}
                    style={{backgroundColor: "rgb(80,227,194)",}}
                    statusBar={{tintColor: "rgb(74,144,226)",}}
                />
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{height: 100}}/>
                <MyButton title="Button"/>
                <SectionList
                    sections={[
                        {key: 'D', data: ['Devin']},
                        {key: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {key: 'L', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {key: 'K', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {key: 'M', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {key: 'N', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {key: 'T', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text>}
                />
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
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
});