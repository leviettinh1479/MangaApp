import React from 'react';

import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Genre from '../screens/login_signup.tsx/Genre';
import SignUp from '../screens/login_signup.tsx/SignUp';
import VerifyCode from '../screens/login_signup.tsx/VerifyCode';
import LoginEmail from '../screens/login_signup.tsx/LoginEmail';
import ForgotPassword_1 from '../screens/login_signup.tsx/ForgotPassword_1';
import ForgotPassword2 from '../screens/login_signup.tsx/ForgotPassword2';
import LoginPassword from '../screens/login_signup.tsx/LoginPassword';


const LoginNavigatorStack = createNativeStackNavigator();

const LoginNavigations = () => {
    return (
      <LoginNavigatorStack.Navigator initialRouteName='LoginEmail' screenOptions={{ headerShown: false }}>
              <LoginNavigatorStack.Screen component={Genre} name="Genre" />
              <LoginNavigatorStack.Screen component={SignUp} name="SignUp" />
              <LoginNavigatorStack.Screen component={VerifyCode} name="VerifyCode" />
              <LoginNavigatorStack.Screen component={LoginEmail} name="LoginEmail" />
              <LoginNavigatorStack.Screen component={LoginPassword} name="LoginPassword" />
              <LoginNavigatorStack.Screen component={ForgotPassword_1} name="ForgotPassword_1" />
              <LoginNavigatorStack.Screen component={ForgotPassword2} name="ForgotPassword2" />
          </LoginNavigatorStack.Navigator>
    )
  }
  
  export default LoginNavigations
  
  const styles = StyleSheet.create({})