import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/dashboard/HomeScreen'
import LoginScreen from '../screens/auth/LoginScreen'

const Stack=createNativeStackNavigator()
const Navigation = () => {
  return (
   <>
   <NavigationContainer >
        <Stack.Navigator
                
                screenOptions={()=>({
                    headerShown:false,
                })}

                initialRouteName='LoginScreen'
        >

            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
   </>
  )
}

export default Navigation

const styles = StyleSheet.create({})