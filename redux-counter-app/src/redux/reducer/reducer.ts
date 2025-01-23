import { Action, DECREMENT, INCREMENT, State } from "../types";

const counterReducer = (state: State = { count: 0 }, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export { counterReducer };
