import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
import LoginEmail from './src/screens/LoginEmail';
import ForgotPassword2 from './src/screens/ForgotPassword2';
import LoginPassword from './src/screens/LoginPassword';
import VerifyCode from './src/screens/VerifyCode';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //   <Stack.Navigator screenOptions={{headerShown: false}}>
        //     <Stack.Screen name="Bottom" component={BottomNavigations} options={{animation:'default'}} />             
        //   </Stack.Navigator>
        // </NavigationContainer>
        // <LoginPassword/>
        <LoginEmail/>
        // <ForgotPassword2/>
        // <VerifyCode/>
    )
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
