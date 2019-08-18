import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainNavigation from './routes/MainNavigation';
import CustomFooter from './components/CustomFooter'
import { View } from 'react-native'

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{flex:1}}>
            <MainNavigation />
            <CustomFooter />
        </View>    
        </Provider>
        );   
    }
}

export default App;