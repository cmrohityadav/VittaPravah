import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { useCustomTheme } from './Theme';
import { navigationRef } from '../utils/NavigationUtil';
import MainNavigator from './MainNavigator';
const Navigation = () => {
  const customTheme = useCustomTheme();
  const myTheme = {
    ...DefaultTheme,
    colors:{
      background:customTheme.colors.background,
      text: customTheme.colors.text,
      card: customTheme.colors.card,
      border: customTheme.colors.border,
      notification: customTheme.colors.notification,
      primary: customTheme.colors.primary,
    },
  };
  return (
    <>
      <NavigationContainer ref={navigationRef} theme={myTheme}>
        <MainNavigator/>
      </NavigationContainer>
    </>
  );
};
export default Navigation;
