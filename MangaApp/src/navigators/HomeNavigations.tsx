import React from 'react';

import {COLORS, FONT_SIZE, SPACING} from '../theme/theme';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';


const HomeNavigatorStack = createNativeStackNavigator();

const HomeNavigationScreen = () => {
    return (
      <HomeNavigatorStack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
              <HomeNavigatorStack.Screen component={HomeScreen} name="HomeScreen" />
              <HomeNavigatorStack.Screen component={DetailScreen} name="DetailScreen" />
              <HomeNavigatorStack.Screen component={ChapterDetailScreen} name="ChapterDetailScreen"  />
          </HomeNavigatorStack.Navigator>
    )
  }
  
  export default HomeNavigationScreen
  
  const styles = StyleSheet.create({})