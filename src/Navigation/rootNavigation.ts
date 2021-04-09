
import { createStackNavigator } from 'react-navigation-stack';
import App from '../screens/App'
import About from '../screens/About/About'
export const rootNavigation = createStackNavigator({
    Home: {
        screen: App,
        path:'app'
    },
    About: {
        screen: About,
        path:'about'
    }
}, {
    initialRouteName:'Home'
})
