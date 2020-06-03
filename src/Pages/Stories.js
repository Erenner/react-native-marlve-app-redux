import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stories = () => {
    return (
        <View style={styles.Content}>
        <Text>Stories Page</Text>
    </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
