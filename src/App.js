import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { View, StyleSheet } from 'react-native'

import MainStack from './routes/MainStack';
import CustomFooter from './components/CustomFooter'

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.appContainer}>
            <MainStack />
            <CustomFooter />
        </View>    
        </Provider>
        );   
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    }
})

export default App;