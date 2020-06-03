import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Image, ImageBackground, FlatList, ScrollView, VirtualizedList } from 'react-native'
import { connect } from 'react-redux';
import Loading from '../../components/UI/Loading/Loading'
import * as actions from '../../store/actions/index';
import relatedComics from './examplerelated';
import md5 from 'md5';
import axios from 'axios';
import RCItem from './relatedComics/ComicsItem'
class ChDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            chData: [], 
            comicsError: false,
            page: 1,
            flatLoader: true,
            datafinish: false
        }
    }
    componentDidMount() {
     this.resetToState()
    }

//      componentWillUnmount() {
//   this.props.onselectedMCh(null)
//      }

    resetToState = async () => {
       await this.setState({
          data: this.props.character,
          loading: false
       });
     this.addComicsData()
    }

    addComicsData = async () => {
        const ts = new Date().getTime()
        const hash8 = "e26db995070f0c398ae40817594dc6d5de9df100";
        const PUBLIC_KEY = "7e852b7670b4fea9a759e54ade928121";
        const hash = md5(ts + hash8 + PUBLIC_KEY);
        const CHID = this.props.character.id
       await fetch(`https://gateway.marvel.com:443/v1/public/characters/${CHID}/comics?dateRange=2015-01-01%2C2020-06-06&orderBy=title&limit=10&offset=${this.state.page}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(response => response.json())
      .then(data => {
          if(data.data.results.length > 1){
            this.setState({
                chData: this.state.chData.concat(data.data.results),
                flatLoader:  false
             })
          } else {
            this.setState({
                chData: this.state.chData.concat(data.data.results),
                flatLoader:  false,
                datafinish: true
             })
          }
      }).catch( err => {
        this.setState({
            comicsError: err,
            flatLoader: false
        })
     } );
    }

    comicsMore = async () => {
        
        await this.setState({
            page: this.state.page + 10,
            flatLoader: true
        })
    this.addComicsData()
    }
    render() {
    // console.log(this.state.chData)
        let container =  <Loading />
        let flatLoader = <View style={styles.flatLoadStyle} />
        if(this.state.flatLoader === false) {
           if(this.state.datafinish === true) {
            flatLoader = (<View style={styles.flatLoadStyle}>
                <Text>Data End</Text>
                </View>)
           } else {
            flatLoader = (<View style={styles.flatLoadStyle}>
                <ActivityIndicator size="large" color="tomato" />
                </View>)
           }
        }

      
       
        if(this.state.loading === false) {
            if(this.props.character === null) {
                container = <Text>Error</Text>
            } else {  
                         
                const flatItems =  <FlatList
                nestedScrollEnabled
                ListHeaderComponent={
                    <>
                    <ImageBackground resizeMode="cover" source={{uri: this.state.data.thumbnail.path +"." + this.state.data.thumbnail.extension}} style={styles.headerImage}>
                    <View style={styles.chHeadTitleContent}>
             <Text style={styles.chHeadTitleText}>{this.state.data.name}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.descContent}>
               <Text style={styles.descTitle}>Description</Text>
               <Text>{this.state.data.description}</Text>
                </View>
                </>
                }
                style={styles.flatStyle}
                data={this.state.chData}
                columnWrapperStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}
                keyExtractor={(item, index) => item.id}
                key={item => item.id}
                numColumns={2}         
                renderItem={({item}) => 
                <RCItem imData={item.thumbnail.path +"." + item.thumbnail.extension} key={item.id} name={item.title} />
                }
                onEndReached={this.comicsMore}
                onEndReachedThreshold={1}
                ListFooterComponent={flatLoader}
                />        
                container = (
                <View style={styles.chHeader}>
    
             {flatItems}
               
          
                </View>
                )
            }
         
        }
        return (
            <View       
            style={styles.chConatainer}>
               {container}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        character: state.comics.selectedCharacter,
        loading: state.comics.loading,  
    };
};

const mapDispatchToProps = dispatch => {
    return {   
        onselectedMCh: (selected) => dispatch( actions.selectedMCh(selected) )
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChDetail)

const styles = StyleSheet.create({
    chConatainer: {
        flex: 1,
        backgroundColor: '#eeeeee'       
    },
    chHeader: {
      width: '100%',
      justifyContent: 'space-around'  
    },
    headerImage: {
        width: '100%',
        height: 250,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    chHeadTitleContent: {
       backgroundColor: 'rgba(0,30,59, 0.6)',
       width: '100%',
       height: 55,
       justifyContent: 'center',
       alignItems: 'center'
    },
    chHeadTitleText: {
        fontSize: 25,
        fontFamily: 'MarvelRegular',
        textTransform: "uppercase",    
        color: 'white',
        textAlign: 'center',
    },
    descContent: {  
        marginTop: 15,
        marginBottom: 15,
      padding: 10,
      width: '90%',
      alignSelf: 'center',
      backgroundColor: 'white',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10,
borderRadius: 10
    },
    descTitle: {
        fontFamily: 'GothamBold',    
        fontSize: 18,
        color: '#001e3b',       
        marginBottom: 5  
    },
    flatStyle: {
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 15
        //flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    flatLoadStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55
    }
})
