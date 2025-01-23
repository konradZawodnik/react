import { useEffect, useState } from "react";
import { createStore } from "../../redux/store/store";
import { counterReducer } from "../../redux/reducer/reducer";
import { loggerMiddleware } from "@/redux/middleware/middleware";

const initialState = { count: 0 };
const store = createStore(counterReducer, initialState, [loggerMiddleware]);

const Counter: React.FC = () => {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const increment = () => store.dispatch({ type: "INCREMENT" });
  const decrement = () => store.dispatch({ type: "DECREMENT" });

  return (
    <div className="flex flex-col font-bold h-28 justify-center items-center">
      <h6 className="font-bold pb-4 text-base">
        Counter using simple tool to managing of app state
      </h6>
      <div className="flex-row pb-4">
        <button
          className="rounded-md pr-4 bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          onClick={increment}
          type="button"
        >
          Increment
        </button>
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          onClick={decrement}
          type="button"
        >
          Decrement
        </button>
      </div>
      <h1 className="text-base" data-testid="count-text">
        Count: {count}
      </h1>
    </div>
  );
};

export default Counter;
