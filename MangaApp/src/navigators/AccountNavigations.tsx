import React from 'react';

import {COLORS, FONT_SIZE, SPACING} from '../theme/theme';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ListSearchScreen from '../screens/ListSearchScreen';
import Account from '../screens/Account/Account';
import ProfileDetail from '../screens/Account/ProfileDetail';


const AccountNavigatorStack = createNativeStackNavigator();

const AccountNavigationScreen = () => {
    return (
      <AccountNavigatorStack.Navigator initialRouteName='Account' screenOptions={{ headerShown: false }}>
              <AccountNavigatorStack.Screen component={Account} name="Account" />
              <AccountNavigatorStack.Screen component={ProfileDetail} name="ProfileDetail" />
          </AccountNavigatorStack.Navigator>
    )
  }
  
  export default AccountNavigationScreen
  
  const styles = StyleSheet.create({})