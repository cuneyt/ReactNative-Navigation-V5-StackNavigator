import React from 'react';
import Feed from './src/feed';
import Detail from './src/detail';


import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();;

App = () => {

  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createHomeStack = () =>
    <Stack.Navigator    >
      <Stack.Screen
        name="Home"
        component={Feed}
        options={({ navigation }) => ({
          title: "React Navigation",
        })
        }
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen"
        }}
      />
     
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>


  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>
        {this.createHomeStack()}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;