import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Comics = () => {
    return (
        <View style={styles.Content}>
            <Text>Comics Page</Text>
        </View>
    )
}

export default Comics

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})

