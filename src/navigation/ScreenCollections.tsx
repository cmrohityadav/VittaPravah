
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';


export const authStacks = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
];

export const dashboardStack = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
];

export const mergedStacks = [...dashboardStack, ...authStacks];
