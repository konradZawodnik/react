import { Action, Listener, Reducer, Store } from "../types";

const createStore = <State>(
  reducer: Reducer<State>,
  initialState: State,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  loggerMiddleware: Function[] = []
): Store<State> => {
  let state = initialState;
  const listeners: Listener[] = [];

  const getState = (): State => state;

  const dispatch = (action: Action): void => {
    let currentDispatch = (action: Action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };

    loggerMiddleware.forEach((middleware) => {
      currentDispatch = middleware({ getState, dispatch })(currentDispatch);
    });

    currentDispatch(action);
  };

  const subscribe = (listener: Listener): (() => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export { createStore };
