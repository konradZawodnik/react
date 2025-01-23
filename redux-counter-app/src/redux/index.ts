import { createStore } from "./store/store";
import { counterReducer } from "./reducer/reducer";
import { loggerMiddleware } from "./middleware/middleware";

const initialState = { count: 0 };
createStore(counterReducer, initialState, [loggerMiddleware]);
