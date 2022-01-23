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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatchScreen from "./containers/Match";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  //useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import {
 Colors,
} from 'react-native/Libraries/NewAppScreen';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function MyTabs(){
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Explore') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            screenOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Explore" component={MatchScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);
}

	// {
	// 	Explore: {
	// 		screen: MatchScreen,
	// 		navigationOptions: {
	// 			tabBarIcon: ({ focused }) => {
	// 				const iconFocused = focused ? "#7444C0" : "#363636";
	// 				return (
	// 					<Text style={[styles.iconMenu, { color: iconFocused }]}>
	// 						<Icon name="explore" />
	// 					</Text>
	// 				);
	// 			}
	// 		}
	// 	},
  // });

  // export default createAppContainer(App);