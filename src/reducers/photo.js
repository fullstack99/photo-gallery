import { Types } from '../actions'
import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    photos: [],
    isLoaded: false,
    favoriteImages: []
}

const getPhotoRequest = state => ({
    ...state,
    isLoading: true
})

const getPhotoSuccess = (state, { data }) =>  ({
    ...state,
    photos: data,
    isLoading: false,
    isLoaded: true
})

const getPhotoFailure = (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    isLoaded: true
})

const setFavoriteImage = (state, { item }) => {
    let newState = Object.assign({}, state);
    let flag = false;
    newState.favoriteImages.forEach((image, i) => {
        if (image.id === item.id) {
            flag = true;
            newState.favoriteImages.splice(i, 1)
            return;
        }
    })
    if (!flag) {
        newState.favoriteImages.push(item)
    }

    return newState;
}

const ACTION_HANDLERS = {
    [Types.GET_PHOTO_REQUEST]: getPhotoRequest,
    [Types.GET_PHOTO_SUCCESS]: getPhotoSuccess,
    [Types.GET_PHOTO_FAILURE]: getPhotoFailure,
    [Types.SET_FAVORITE_IMAGE]: setFavoriteImage,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)