import { createStore } from "../store";
import { counterReducer } from "../../reducer/reducer";
import { increment, decrement } from "../../actions/actions";
import { loggerMiddleware } from "../../middleware/middleware";

describe("Store", () => {
    const initialState = 0;
    it("should initialize state with the provided initial state", () => {
        const store = createStore(counterReducer, initialState);
        expect(store.getState()).toEqual(initialState);
    });

    it("should increment count", () => {
        const store = createStore(counterReducer);
        store.dispatch(increment());
        expect(store.getState().count).toEqual(1);
    });

    it('should notify listeners when state changes', () => {
        const store = createStore(counterReducer, initialState);
        const listener = jest.fn();
        store.subscribe(listener);
        store.dispatch({ type: 'INCREMENT' });

        expect(listener).toHaveBeenCalledTimes(1);
    });

    it("should decrement count", () => {
        const store = createStore(counterReducer);
        store.dispatch(increment());
        store.dispatch(decrement());
        expect(store.getState().count).toEqual(0);
    });

    it('should allow unsubscribing from listeners', () => {
        const store = createStore(counterReducer, initialState);
        const listener = jest.fn();
        const unsubscribe = store.subscribe(listener);
        store.dispatch({ type: 'INCREMENT' });

        expect(listener).toHaveBeenCalledTimes(1);

        unsubscribe();
        store.dispatch({ type: 'INCREMENT' });

        expect(listener).toHaveBeenCalledTimes(1);
    });

    it("should apply middleware correctly", () => {
        const store = createStore(counterReducer, initialState, [loggerMiddleware]);
        const dispatchSpy = jest.spyOn(store, "dispatch");
        const action = { type: "INCREMENT" };
        store.dispatch(action);

        expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
});