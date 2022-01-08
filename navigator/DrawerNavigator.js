import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import TabNavigator from './TabNavigator';
import Profile from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator= () => {
  return (
    <Drawer.Navigator screenOptions={(navigate)=>{
      return    <Icon
            name = "md-menu"
            size = {38}
            color = "black"
            style = {{paddingLeft : 20}}
            onPress = {() => navigate('DrawerOpen')}
/>
    }}>
    <Drawer.Screen name = "Dashboard" component = {TabNavigator}/>
    <Drawer.Screen name = "Profile" component = {Profile}/>

    </Drawer.Navigator>
  )
}

export default DrawerNavigator;