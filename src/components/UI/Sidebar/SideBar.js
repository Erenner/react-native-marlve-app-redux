import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SideBar = (props) => {
    return (
        <View style={styles.sideContent}>
            <TouchableOpacity onPress={() => props.navigation.navigate("AboutPage")} style={styles.listItems}>
            <Text style={styles.listTextStyle}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("ContactPage")} style={styles.listItems}>
            <Text style={styles.listTextStyle}>Contact</Text>
            </TouchableOpacity>
       
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({
    sideContent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFD733',
    },
    listItems: {
      width: '90%',
      paddingVertical: 10,
      marginBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: 'black'
    },
    listTextStyle: {
        fontSize: 16,
        fontWeight: '700'
    }
})
