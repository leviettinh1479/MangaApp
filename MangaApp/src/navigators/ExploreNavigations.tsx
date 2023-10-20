import React from 'react';

import {COLORS, FONT_SIZE, SPACING} from '../theme/theme';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ListSearchScreen from '../screens/ListSearchScreen';


const ExploreNavigatorStack = createNativeStackNavigator();

const ExploreNavigationScreen = () => {
    return (
      <ExploreNavigatorStack.Navigator initialRouteName='ExploreScreen' screenOptions={{ headerShown: false }}>
              <ExploreNavigatorStack.Screen component={ExploreScreen} name="ExploreScreen" />
              <ExploreNavigatorStack.Screen component={ListSearchScreen} name="ListSearchScreen" />
              <ExploreNavigatorStack.Screen component={ProductListScreen} name="ProductListScreen" />
          </ExploreNavigatorStack.Navigator>
    )
  }
  
  export default ExploreNavigationScreen
  
  const styles = StyleSheet.create({})