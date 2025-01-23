# Docummentation of tool to manage state of application

## Using in our app
Import `createStore`, `counterReducer` and actions `increment`, `decrement` to your project.
import { createStore } from './store';
import { counterReducer } from './reducer';
import { increment, decrement } from './actions';

# Creating store
const store = createStore(counterReducer, initialState, [loggerMiddleware]);

# Subscribe changing of store
store.subscribe(() => {
  console.log('Nowy stan:', store.getState());
});

# Sending action
store.dispatch(increment());
store.dispatch(decrement());

# Describing behaviour of app
First of all according running app, you have to open terminal, go to directory, where you have opened that project, type `npm install` || `yarn install` to install all packages from package.json, then type `npm run build` || `yarn build`, to build app, and type `npm run start` || `yarn start` to run that app. Of course also command `npm run dev` || `yarn dev` should work, as it decribed in create-next-app. You can use `npm run dev` || `yarn dev` instead `npm run build` || `yarn build` and `npm run start` || `yarn start` if you want.
You should run that app, by opening http://localhost:3000 address.
As you see, after clicking increment button, action `increment` is called, and value near text `Count` increases.
After clicking decrement button, action `decrement` is called, and value near text `Count` decreases.
In that app, i added middleware, to confirming by console.logs, that proper action is called,
after clicking selected button, and confirming, that count value has set correctly.
Of course in my app, i am using hook `useState`, where i am using value of count, which comes
from store. I have also added in `useEffect` hook, cleanup function, to ensure, that evervthing is correct.
I mean unsubscribing from the store, when component is unmounting(emulate ComponentWillUnmount function from lifecycle methods in React.) I have added also some unit tests to `Counter` component and to redux store. 
You can run it by command `npm run test`.
