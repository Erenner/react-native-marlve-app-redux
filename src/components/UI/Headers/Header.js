import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({scene, previous, navigation}) => {
    const { options } = scene.descriptor;
    const title = options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;     
    return (
        <View style={styles.headerContent}>
        
            <View style={styles.buttonStyle}>
    {previous ? <Icon name="chevron-left" size={22} color="white" onPress={() => navigation.goBack()} /> : <Icon name="align-justify" size={22} color="white" onPress={() => navigation.openDrawer()} /> }
            </View>
          
         
            <Image source={require('../../../assets/marvel.png')} style={{width: 80, height: 80, marginTop: 22}} />
        
      
              
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContent: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',   
        backgroundColor: '#e8d733',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,    
    },
    buttonStyle: {   
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: '#001e3b',
    }
})
