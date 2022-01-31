import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
