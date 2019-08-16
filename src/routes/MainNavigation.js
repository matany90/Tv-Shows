import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ShowScreen from '../screens/ShowScreen';

const mainNavigation = createStackNavigator({
    Main: { screen: MainScreen },
    Show: { screen: ShowScreen }
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
});

export default createAppContainer(mainNavigation);