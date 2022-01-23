/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Node} from 'react';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchScreen from "./containers/Match";
import ProfileScreen from "./containers/Profile"
import styles_index from "./assets/styles/index"

import {
  LogBox
} from 'react-native';
LogBox.ignoreAllLogs()

const Tab = createBottomTabNavigator();

export default function MyTabs(){
  return (
    <NavigationContainer style={styles_index.navContainer}>
        <Tab.Navigator
            screenOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Explore" component={MatchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);
}