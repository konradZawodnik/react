import axios from 'axios'

import {
    GET_ALL_PHOTOS, GET_PHOTO_OF_CLICKED_BREED, PHOTOS_ERROR,
    RESET_CLICKED_PHOTO, GET_RANDOM_PHOTO, RESET_RANDOM_PHOTO
} from '../types';

export const getAllPhotos = () => async dispatch => {

    try {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all')
        dispatch({
            type: GET_ALL_PHOTOS,
            payload: res.data.message
        })
    }
    catch (err) {
        dispatch({
            type: PHOTOS_ERROR,
            payload: console.log(err),
        })
    }
}

export const getImageOfClickedBreed = (e, value) => async dispatch => {

    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${value.trim()}/images/random`)
        dispatch({
            type: GET_PHOTO_OF_CLICKED_BREED,
            payload: res.data.message
        })
    }
    catch (err) {
        dispatch({
            type: PHOTOS_ERROR,
            payload: console.log(err),
        })
    }
}

export const getRandomPhoto = () => async dispatch => {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random')
        dispatch({
            type: GET_RANDOM_PHOTO,
            payload: res.data.message
        })
    }
    catch (err) {
        dispatch({
            type: PHOTOS_ERROR,
            payload: console.log(err),
        })
    }
}


export const resetClickedPhoto = () => async dispatch => {
    try {
        dispatch({
            type: RESET_CLICKED_PHOTO,
            payload: null,
        })
    }
    catch (err) {
        dispatch({
            type: PHOTOS_ERROR,
            payload: console.log(err),
        })
    }
}

export const resetRandomPhoto = () => async dispatch => {
    try {
        dispatch({
            type: RESET_RANDOM_PHOTO,
            payload: null,
        })
    }
    catch (err) {
        dispatch({
            type: PHOTOS_ERROR,
            payload: console.log(err),
        })
    }
}