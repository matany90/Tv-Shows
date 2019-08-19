import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import ShowScreen from '../screens/ShowScreen';
import LoadingScreen from '../screens/LoadingScreen';
import CustomHeader from '../components/CustomHeader'

const AppFlow = createStackNavigator(
  {
    Main: { screen: MainScreen, navigationOptions: { header: <CustomHeader title="All Shows" />}},
    Show: { screen: ShowScreen,
      navigationOptions: ({ navigation }) => ({
        header: <CustomHeader title={navigation.getParam('title')} onPressBack={navigation.goBack} /> 
      }),
    }
  },
);

const MainStack = createSwitchNavigator(
  {
    Loading: { screen: LoadingScreen, navigationOptions: { header: null }},
    App: AppFlow
  }, 
  {
    initialRouteName: 'Loading',
    cardStyle: { backgroundColor: '#e8eaf6' },
  }
)

export default createAppContainer(MainStack);