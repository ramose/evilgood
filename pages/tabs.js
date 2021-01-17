import React from 'react';
import {Image} from 'react-native';
// import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import List from './list';
import Act from "./act";

// const Tabs = AnimatedTabBarNavigator();

const Tab = createBottomTabNavigator();

export default function TabsContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'white',
            borderTopColor:"white",
            paddingTop:0,
            // marginTop:20,
            height:100
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size, marginLeft:100}}
                  source={require('../assets/tabbar/tab-1.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={List}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size, marginLeft:30}}
                  source={require('../assets/tabbar/tab-2.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Tab 3"
          component={Act}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 60, height: 60}}
                  source={require('../assets/tabbar/tab-3.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Tab 4"
          component={List}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size, marginLeft:-30}}
                  source={require('../assets/tabbar/tab-4.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Tab 5"
          component={List}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 20, marginLeft:-100}}
                  source={require('../assets/tabbar/tab-5.png')}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
