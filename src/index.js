import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
//import registerServiceWorker from './registerServiceWorker';
import counter from './reducers'

let store = createStore(counter);

const renderPage = () => ReactDOM.render(<App values={store.getState()} onIncrement={
    () => {
        store.dispatch({type: 'ADD'})
    }} onDecrement={
    () => {
        store.dispatch({type: 'Reduce'})
    }
}
/>, document.getElementById('root'));

renderPage();
store.subscribe(renderPage)
