import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Dashboard from '../screens/Dashboard';
import AuthLoading from '../action/AuthLoading';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function MainNavigator() 
{
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}