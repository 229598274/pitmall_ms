import React from 'react';
import ReactDOM from 'react-dom';

import LeftNav from './layout/leftnav/LeftNav';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
// import Router from  './Router';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'

const store = compose(
    applyMiddleware(ReduxThunk)
)(createStore)(reducers)

const App = () => {
    return (
        <Provider store={store}>
            <LeftNav />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
