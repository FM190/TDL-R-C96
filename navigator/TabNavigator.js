import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/DashboardScreen';
import ReminderAlarmScreen from '../screens/ReminderAlarmScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import Profile from '../screens/ProfileScreen';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === '1') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '2') {
            iconName = focused ? 'reader-outline' : 'reader-outline';
          } else if (route.name === '3') {
            iconName = focused ? 'alarm-outline' : 'alarm-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(40)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={'red'}
      inactiveColor={'gray'}>
      <Tab.Screen name="1" component={DashboardScreen} />
      <Tab.Screen name="2" component={ToDoListScreen} />
      <Tab.Screen name="3" component={ReminderAlarmScreen} />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: 'black',
    height: '12%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(55),
    height: RFValue(55),
  },
});

export default BottomTabNavigator;
