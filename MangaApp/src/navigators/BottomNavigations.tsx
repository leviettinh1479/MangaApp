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
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
        component={HomeScreen}
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
                name="home-outline"
                color="FFFFFF"
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
        component={ExploreScreen}
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
                  name="search-outline"
                  color="FFFFFF"
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
        component={FavoriteScreen}
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
                name="bookmark-outline"
                color="FFFFFF"
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
        component={UserAccountScreen}
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
                  name="person-outline"
                  color="FFFFFF"
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
