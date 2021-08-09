import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AnimalList from './components/list';
import Events from './components/events';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import AnimalForm from './components/form';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {Login: {screen: Login},
   Register: {screen: Register},
   Home: {screen: Home},
   AnimalList: {screen: AnimalList},
   Events: {screen: Events},
   AnimalForm: {screen: AnimalForm},}
)

const App = createAppContainer(AppNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    margin: 20,
    padding: 15,
    width: '95%'
  },
});
