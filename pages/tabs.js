import React from 'react';
import {View} from 'react-native';
// import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import List from './list';

// const Tabs = AnimatedTabBarNavigator();

const Tab = createBottomTabNavigator();

export default function TabsContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
