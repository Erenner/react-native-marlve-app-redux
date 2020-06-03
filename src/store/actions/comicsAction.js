
import * as actionTypes from './actionType';
import axios from '../../axios-comics';
import md5 from 'md5'

export const fetchComicsSuccess = ( comics ) => {
    return {
        type: actionTypes.FETCH_COMICS_SUCCESS,
        comics: comics
    };
};

export const fetchComicsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COMICS_FAIL,
        error: error
    };
};

export const fetchComicsStart = () => {
    return {
        type: actionTypes.FETCH_COMICS_START
    };
};

export const  fetchComics = () => {
    return async (dispatch) => {
        dispatch(fetchComicsStart());
       // const queryParams = "";
       const ts = new Date().getTime()
       const hash8 = "e26db995070f0c398ae40817594dc6d5de9df100";
       const PUBLIC_KEY = "7e852b7670b4fea9a759e54ade928121";
       const hash = md5(ts + hash8 + PUBLIC_KEY);     
      // const CHID = this.props.character.id
     await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&offset=1&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(response => response.json())
      .then(data =>  dispatch(fetchComicsSuccess(data.data.results)))
            .catch( err => {
                dispatch(fetchComicsFail(err));
            } );
    };
};

export const selectedMCh = (payload) => {
    return {
        type: actionTypes.SELECTED_CHARACTER,
        payload
    };
}