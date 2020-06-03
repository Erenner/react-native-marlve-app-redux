import React from 'react'
import { StyleSheet, Text, View, Image, Platform, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const ClistItem = (props) => {
    return (
        <View style={styles.cHContainers}>
   <View style={styles.itemContent}>
            <View style={[styles.imageContent, styles.elevationLow]}>
            <Image resizeMode="cover" style={styles.imageStyle} source={{uri: props.dt.thumbnail.path +"." + props.dt.thumbnail.extension}} />
            </View> 
        </View>
        <ImageBackground 
             imageStyle={{opacity: 0.1, borderRadius: 20,  width: '100%',}}
             blurRadius={3} rad resizeMethod="resize" resizeMode="stretch" source={{uri: props.dt.thumbnail.path +"." + props.dt.thumbnail.extension}}
              resizeMode="cover"  style={styles.imageBack}>  
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.ChNameStyle}>{props.dt.name}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textDescription}>{props.dt.description}</Text>
        <View style={styles.linkContent}>
             <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>Wiki</Text>
              <Icon name="wikipedia-w" size={15} color="white" />
             </TouchableOpacity>

             <TouchableOpacity onPress={() => props.chSl(props.dt)} style={styles.linkItem}>
              <Text style={styles.linkText}>Details</Text>
              <Icon name="chevron-right" size={15} color="white" />
             </TouchableOpacity>

        </View>
        </ImageBackground>
        </View>
    )
}

export default ClistItem

const styles = StyleSheet.create({
 cHContainers: {
  width: '82%',
  alignSelf: 'center',
  flexDirection: 'row',
  padding: 8, 
  
 },
 imageBack: {
    width: '96%', 
    height: 140,
    alignSelf: 'center',   
    marginLeft: -10,    
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: '#29516B',
    borderRadius: 20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 3,
 },
   itemContent: {
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'center'
   },
   imageStyle: {
       width: 150,
       height: 150,
       borderRadius: 10,
             
   },
   imageContent: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //backgroundColor: 'white',
    marginBottom: 5, 
    borderRadius: 10,
   },
   elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,    
      },
      android: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    }),
  },
   ChNameStyle: {  
    width: '80%',
       paddingLeft: 10,    
       fontFamily: 'MarvelRegular',
       textTransform: "uppercase",
       fontSize: 20,
       color: 'white',
       textAlign: 'center',
       marginBottom: 4,
   },
   linkContent: {
       width: '85%',
       alignSelf: 'center',
       paddingLeft: 20,  
       flexDirection: 'row',
       justifyContent: 'space-between'
   },
   textDescription: {
    paddingLeft: 10,
    width: '80%',
     color: 'white',
     textAlignVertical: 'center'  
   },
   linkItem: {
       marginRight: 5,
       flexDirection: 'row',  
       alignItems: 'center'     
   },
   linkText: {
    fontFamily: 'GothamBold',
    textTransform: "uppercase",
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginRight: 5
   }
})
