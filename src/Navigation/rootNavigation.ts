import {createStackNavigator} from 'react-navigation-stack';
import App from '../screens/App';
import Settings from '../screens/Settings/Settings';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const rootNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: App,
      path: 'app',
    },
    Settings: {
      screen: Settings,
      path: 'settings',
    },
  },
  {
    initialRouteName: 'Settings',
  },
);
