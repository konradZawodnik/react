export type Action = { type: string; payload?: number };

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type ActionTypes = IncrementAction | DecrementAction;

export type State = {
  count: number;
};

export type Reducer<State> = (state: State, action: Action) => State;

export type Listener = () => void;

export type Store<State> = {
  getState: () => State;
  dispatch: (action: Action) => void;
  subscribe: (listener: Listener) => () => void;
};
