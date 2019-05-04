import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from './reducers/actionTypes';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(actionTypes.LOAD_BREEDS_API_REQUEST, workerSaga);
}

export function* watchSelectBreed(){
    yield takeLatest(actionTypes.SELECT_BREED, selectBreedSaga);
}

function fetchDogSpeices(){
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/list/all"
    })
}

function fetchDogFromBreed(breedName){
    return axios({
        method: "get",
        url: `https://dog.ceo/api/breed/${breedName}/images`
    })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchDogSpeices);
        const allBreeds = Object.keys(response.data.message);

        // dispatch a success action to the store with the new dog
        yield put({ type: actionTypes.LOAD_BREEDS_API_SUCCESS, allBreeds });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: actionTypes.LOAD_BREEDS_API_FAILURE, error });
    }
}

function* selectBreedSaga () {
    try {
        const getSelectedBreed = (state) => state.breeds.selectedBreed;
        const response = yield call(fetchDogFromBreed,yield select(getSelectedBreed));
        const selectedBreedDogs = Object.values(response.data.message);
        // dispatch a success action to the store with the new dog
        yield put({ type: actionTypes.LOAD_SELECTED_BREED_DOGS_SUCCESS, selectedBreedDogs });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: actionTypes.LOAD_SELECTED_BREED_DOGS_FAILURE, error });
    }
}
