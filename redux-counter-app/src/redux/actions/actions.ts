import {
  DECREMENT,
  DecrementAction,
  INCREMENT,
  IncrementAction,
} from "../types";

export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});
