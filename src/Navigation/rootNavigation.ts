import {createStackNavigator} from 'react-navigation-stack';
import App from '../screens/App';
import Settings from '../screens/Settings/Settings';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/*
 * Defined a bottom tab navigation: Home and Settings
 * Home page: this is the main entry including Wells on the top and Robot commands on the bottom
 * Settings page: you can change the default settings for this app, like changing the horizontal/vertical units, fill Wells randomly,Toggle Well labels
 * */

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
    initialRouteName: 'Home',
  },
);
