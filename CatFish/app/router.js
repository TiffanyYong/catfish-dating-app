import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, withNavigation} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Icon} from 'react-native-elements';

import Profile from './screens/Profile';
import Swiping from './screens/Swiping';
import Matches from './screens/Matches';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="open-book" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Swiping': {
        screen: Swiping,
        navigationOptions: {
            tabBarLabel: 'Swiping',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
        },
    },
    'Matches': {
        screen: Matches,
        navigationOptions: {
            tabBarLabel: 'Matches',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                                               color={tintColor}/>
        },
    },
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};
