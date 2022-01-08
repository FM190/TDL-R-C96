 import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DashboardScreen from './screens/DashboardScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import ReminderAlarmScreen from './screens/ReminderAlarmScreen';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigator/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
