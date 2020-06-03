import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Contact = () => {
    return (
        <View style={styles.Content}>
        <Text>Contact page</Text>
        <Text>Eren Vardar</Text>
        <Text>erenvrdr@gmail.com</Text>
    </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
