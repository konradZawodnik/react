import { INCREASE_COUNT, DECREASE_COUNT, REFRESH_COUNT } from '../types'

const initialState = {
    count: 0,
    price: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: action.payload + 1,
            }
        case DECREASE_COUNT:
            return {
                ...state,
                count: action.payload - 1,
            }
        case REFRESH_COUNT:
            return {
                ...state,
                count: 0,
            }
        default: return state
    }
}
