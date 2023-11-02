import React from 'react';

import {COLORS, FONT_SIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ExploreNavigationScreen from './ExploreNavigations';
import Account from '../screens/Account/Account';
import AccountNavigationScreen from './AccountNavigations';
import HomeNavigationScreen from './HomeNavigations';
import MyLibraryScreen from '../screens/MyLibraryScreen';
const Tab = createBottomTabNavigator();

const BottomNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: SPACING.space_10 * 6,
        },
      }}>
      <Tab.Screen
        
        name="Trang chủ"
        component={HomeNavigationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{flexDirection:'column',marginBottom:10}}>
              <View  style={[
                styles.activeline,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}></View>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <Feather
                name="home"
                color="#000000"
                size={24}
                style={{backgroundColor: 'transparent',}}
              />
              </View>
            
            </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={ExploreNavigationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{flexDirection:'column',marginBottom:10}}>
                <View  style={[
                  styles.activeline,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}></View>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Ionicons
                  name="search"
                  color="#000000"
                  size={24}
                  style={{backgroundColor: 'transparent',}}
                />
                </View>
              
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={MyLibraryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{flexDirection:'column',marginBottom:10}}>
              <View  style={[
                styles.activeline,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}></View>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <Feather
                name="heart"
                color="#000000"
                size={24}
                style={{backgroundColor: 'transparent',}}
              />
              </View>
            
            </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={AccountNavigationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{flexDirection:'column',marginBottom:10}}>
                <View  style={[
                  styles.activeline,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}></View>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Ionicons
                  name="compass-outline"
                  color="#000000"
                  size={24}
                  style={{backgroundColor: 'transparent',}}
                />
                </View>
              
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
  
  },
  activeline: {
    width: 50,
    height: 2,
    marginBottom:10,
  
  },
});

export default BottomNavigations;
