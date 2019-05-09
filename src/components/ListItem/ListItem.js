import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const ListItem = props => (
    <TouchableOpacity onPress = {props.onPressHandler}>
        <View style={styles.listItem} >
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#ffbd5b' 
    }
})

export default ListItem;

