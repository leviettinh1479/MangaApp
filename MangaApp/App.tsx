import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
import VerifyCode from './tranthuc/VerifyCode';
import LoginEmail from './tranthuc/LoginEmail';
import LoginPassword from './tranthuc/LoginPassword';
import ForgotPassword2 from './tranthuc/ForgotPassword2';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator screenOptions={{headerShown: false}}>
      //     <Stack.Screen name="Bottom" component={BottomNavigations} options={{animation:'default'}} />             
      //   </Stack.Navigator>
      // </NavigationContainer>
      //<VerifyCode/>
      //<LoginPassword/>
      //<LoginEmail/>
      <ForgotPassword2/>
    )
}
export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})
