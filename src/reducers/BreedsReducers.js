import * as actionTypes from './actionTypes';

const initialState = {
    allBreeds:[],
    fetching: false,
    error: null,
    selectedBreed: null,
    selectedBreedDogs:[]
};

export default function breedsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_BREEDS_API_REQUEST: {
            return {...state, fetching: true, error: null}
        }
        case actionTypes.LOAD_BREEDS_API_SUCCESS: {
            return {...state, allBreeds: action.allBreeds ,fetching: false, error: null}
        }
        case actionTypes.LOAD_BREEDS_API_FAILURE: {
            return {...state, fetching: false, error: action.error}
        }
        case actionTypes.SELECT_BREED: {
            return {...state, fetching: false, selectedBreed: action.selectedBreed}
        }
        case actionTypes.LOAD_SELECTED_BREED_DOGS_SUCCESS: {
            return {...state, fetching: false, selectedBreedDogs: action.selectedBreedDogs}
        }
        case actionTypes.LOAD_SELECTED_BREED_DOGS_FAILURE: {
            return {...state, fetching: false, selectedBreed: action.error}
        }
        default:return state;
    }
}
