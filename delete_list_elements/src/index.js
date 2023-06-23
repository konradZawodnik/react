import { createRoot } from 'react-dom/client';
import './index.css';
import List from './List';
import * as serviceWorker from './serviceWorker';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<List />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
