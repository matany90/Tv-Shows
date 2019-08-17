import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ShowScreen from '../screens/ShowScreen';
import CustomHeader from '../components/CustomHeader'
import {Text, View} from 'react-native';

const mainNavigation = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        header: <CustomHeader title="All Shows" />
      } 
    },
    Show: {
      screen: ShowScreen,
      navigationOptions: ({ navigation }) => ({
        header: <CustomHeader title={navigation.getParam('title')} onPressBack={navigation.goBack} /> 
      }),
    }
  }, {
    initialRouteName: 'Main',
  }
);

export default createAppContainer(mainNavigation);