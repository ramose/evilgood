import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Image, Text} from 'react-native';
import Intro from './pages/intro';
import Login from './pages/login';
import TabsContainer from './pages/tabs';


const Stack = createStackNavigator();

export default function App() {
  return (
    // <Intro/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="intro"
      screenOptions={{
        
        headerStyle: {
          backgroundColor: '#31bfa7',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="intro" component={Intro} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="login" component={Login} options={{
          headerShown:false,
          headerBackTitleVisible:true
        }}/>
        <Stack.Screen name="tabs" component={TabsContainer} options={{
          headerShown:true,
          independent:true
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
