import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const BottomBar = (props) => {
    return (
        <View style={styles.styles}>
            <TouchableOpacity style={styles.bottomItem}  onPress={() => console.log("onPRess")}>
                <Image />
                <Text>Heroes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomItem} onPress={() => console.log("onPRess")}>
                <Image />
                <Text>Comics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '33%'}} onPress={() => console.log("onPRess")}>
                <Image />
                <Text>Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    bottomContent: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#131930',
        height: 75
    },
    bottomItem: {
        width: '33%',
        borderRightWidth: 1,
        borderRightColor: '#263238'
    }
})
