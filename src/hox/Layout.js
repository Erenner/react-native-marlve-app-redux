import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';import {connect} from 'react-redux';

class Layout extends Component {

    render() {     
        return (
            <LinearGradient
            colors={["#FFD733", "#ff9800", "#FFD733"]}
            startPoint={{ x: 0, y: 1 }}
            endPoint={{ x:1, y: 0 }}
            style={styles.gradient}
          >
     {this.props.children}     
  </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        ...StyleSheet.absoluteFillObject, 
      
    },
})

 
export default Layout
