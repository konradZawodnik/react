import { Action, State, Store } from "../types";

const loggerMiddleware = (store: Store<State>) => {
  return (next: (action: Action) => void) => (action: Action) => {
    console.log('Previous state:', store.getState());
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
  };
};

export { loggerMiddleware };