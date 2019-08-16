import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainNavigation from './routes/MainNavigation';
import MainScreen from './screens/MainScreen';

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <MainNavigation />
        </Provider>
        );   
    }
}

export default App;