import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import ListItem from './CListItems/ClistItem';
import md5 from 'md5'

export default class Clist extends Component {
     constructor(props) {
         super(props)
             this.state = {
                 data: this.props.data,
                 page: 1,
                 flatLoader: false
             }
      
     }

   getMoreHeroes = async () => {
    const ts = new Date().getTime()
    const hash8 = "e26db995070f0c398ae40817594dc6d5de9df100";
    const PUBLIC_KEY = "7e852b7670b4fea9a759e54ade928121";
    const hash = md5(ts + hash8 + PUBLIC_KEY);
   await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&offset=${this.state.page}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
   .then(response => response.json())
   .then(data =>  {
       this.setState({
           data: this.state.data.concat(data.data.results), 
           flatLoader: false
       })
   })
         .catch( err => {
             this.setState({
                 errorData: true
             })
         } );
   }

   moreHeroes = async () => {
        
    await this.setState({
        page: this.state.page + 10,
        flatLoader: true
    })
   this.getMoreHeroes() 
   }

    render() {
        // const renderComics = this.props.data.map(crx => {
        //     return <ListItem chSl={this.props.chpage} key={crx.id} dt={crx} />
        // })
        let flatLoader = <View style={styles.flatLoadStyle} />
        if(this.state.flatLoader === true) {
         
            flatLoader = (<View style={styles.flatLoadStyle}>
                <ActivityIndicator size="large" color="tomato" />
                </View>)
           
        }
        return (
            <View style={{flex: 1, width: '100%', marginBottom: 5}}> 
               
            <FlatList   
              nestedScrollEnabled        
             style={{
                marginTop: 15,
                width: '100%',             
                marginBottom: 15
            }}
                data={this.state.data}
                columnWrapperStyle={styles.comicsContent}
                keyExtractor={(item, index) => item.id}
                key={item => item.id}
                numColumns={2}         
                renderItem={({item}) => 
                <ListItem chSl={this.props.chpage} key={item.id} dt={item} />
                }
                onEndReached={this.moreHeroes}
                onEndReachedThreshold={1}
                ListFooterComponent={flatLoader}
                /> 
       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    comicsContent : {   
       justifyContent: 'space-between',
       flexGrow: 2,
       flexShrink: 2,
       flexDirection: 'row',
       flexWrap: 'wrap',     
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20
    },
    flatLoadStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55
    }
})
