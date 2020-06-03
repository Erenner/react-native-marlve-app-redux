import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ComicsItem = (props) => {
    return (
        <View style={styles.rlComContent}>
            <Image resizeMode="cover" source={{uri: props.imData}} style={styles.imageRCStyle}  />
            <Text>{props.name}</Text>
        </View>
    )
}

export default ComicsItem

const styles = StyleSheet.create({
    rlComContent: {
        width: '40%',alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageRCStyle: {
       width: '100%',
       height: 150 
    }
})
