import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
<<<<<<< HEAD
import LoginEmail from './src/screens/LoginEmail';
import ForgotPassword2 from './src/screens/ForgotPassword2';
import LoginPassword from './src/screens/LoginPassword';
import VerifyCode from './src/screens/VerifyCode';
=======
import Genre from './src/screens/Genre';
import SignUp from './src/screens/SignUp';
import ForgotPassword_1 from './src/screens/ForgotPassword_1';

>>>>>>> origin/baongoc

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //   <Stack.Navigator screenOptions={{headerShown: false}}>
        //     <Stack.Screen name="Bottom" component={BottomNavigations} options={{animation:'default'}} />             
        //   </Stack.Navigator>
        // </NavigationContainer>
<<<<<<< HEAD
        // <LoginPassword/>
        // <ForgotPassword2/>
        <VerifyCode navigation={undefined}/>
=======
        <Genre/>
        // <SignUp/>
        // <ForgotPassword_1/>
>>>>>>> origin/baongoc
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
