import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionType';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from "redux-persist";

const initialState = {
    comics: [],
    selectedCharacter: null,
    loading: false,
};

const fetchComicsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchComicsSuccess = ( state, action ) => {
    return updateObject( state, {
        comics: action.comics,
        loading: false
    } );
};

const fetchComicsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const selectedMCh = (state, action) => {
    return updateObject( state, { 
        selectedCharacter: action.payload,
        loading: false 
    }); 
}


const comicsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.FETCH_COMICS_START: return fetchComicsStart( state, action );
        case actionTypes.FETCH_COMICS_SUCCESS: return fetchComicsSuccess( state, action );
        case actionTypes.FETCH_COMICS_FAIL: return fetchComicsFail( state, action );
        case actionTypes.SELECTED_CHARACTER: return selectedMCh( state, action );
        default: return state;
    }
};

const persistConfig = {
    key: "comicsReducer",
    storage: AsyncStorage,
    blacklist: ['comics', 'loading', 'selectedCharacter'],  
}
export default persistReducer(persistConfig, comicsReducer);