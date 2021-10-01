import {
    GET_ALL_PHOTOS, GET_PHOTO_OF_CLICKED_BREED,
    GET_RANDOM_PHOTO, RESET_CLICKED_PHOTO, RESET_RANDOM_PHOTO
} from '../types'

const initialState = {
    photos: [],
    clickedPhoto: null,
    randomPhoto: null,
    loading: true
}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        case GET_PHOTO_OF_CLICKED_BREED:
            return {
                ...state,
                clickedPhoto: action.payload,
                loading: false
            }
        case GET_RANDOM_PHOTO:
            return {
                ...state,
                randomPhoto: action.payload,
                loading: false
            }
        case RESET_CLICKED_PHOTO:
            return {
                ...state,
                clickedPhoto: null,
                loading: false
            };
        case RESET_RANDOM_PHOTO:
            return {
                ...state,
                randomPhoto: null,
                loading: false
            };
        default: return state
    }
}

export default photosReducer;