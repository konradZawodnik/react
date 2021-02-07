import { INCREASE_COUNT, DECREASE_COUNT, REFRESH_COUNT } from '../types';

export const increaseCount = (count) => async dispatch => {
    dispatch({
        type: INCREASE_COUNT,
        payload: count
    })
}

export const decreaseCount = (count) => async dispatch => {
    dispatch({
        type: DECREASE_COUNT,
        payload: count
    })
}

export const refreshCount = (count) => async dispatch => {
    dispatch({
        type: REFRESH_COUNT,
        payload: count
    })
}
