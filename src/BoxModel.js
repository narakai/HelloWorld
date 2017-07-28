import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TouchableHighlight,
    View
} from 'react-native';

export default class BoxModel extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.content}>Column 1</Text>
                <Text style={styles.content}>Column 2</Text>
            </View>);
    }
}


const styles = StyleSheet.create({
    main: {
        paddingVertical: 20,
        flexDirection: 'column',
        flexWrap: 'wrap'
    }, content: {
        padding: 20,
        margin: 10,
        backgroundColor: '#ef4c',
        width: 125,
        height: 125,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center'
    }
});