import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Layout from '../../hox/Layout'
import ComicsList from './CList/Clist'
//import exampleData from './exampleData';
import Loading from '../../components/UI/Loading/Loading';
class Home extends Component {
   constructor(props) {
       super(props)
       this.state = {
           data: [],
           loadding: true
       }
   }
   

   async componentDidMount () {
    await this.getContent()
   }

   getContent = async () => {
    await this.props.onFetchComics();
      this.setState({
        data: this.props.comics,
        loading: false 
      })
   }

    navigateToSelectedCh = async (data) => {
     await this.props.onselectedMCh(data);
     this.props.navigation.navigate("DetailCh")
    }
    render() {
        
    let chList = <Loading />
    if(this.state.loading === false) {
        chList =  <ComicsList chpage={this.navigateToSelectedCh} data={this.state.data} />  
    }
        return (
            <Layout>          
            <View style={{flex: 1, paddingTop: 15}}>                  
               {chList}
            </View>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        comics: state.comics.comics,
        character: state.comics.selectedCharacter,
        loading: state.comics.loading,  
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchComics: () => dispatch( actions.fetchComics() ),
        onselectedMCh: payload => dispatch( actions.selectedMCh(payload))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
const styles = StyleSheet.create({})
