import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
<<<<<<< HEAD
import Genre from './src/screens/login_signup.tsx/Genre';
import LoginNavigations from './src/navigators/LoginNavigations';

=======
import LoginEmail from './src/screens/LoginEmail';
import ForgotPassword2 from './src/screens/ForgotPassword2';
import LoginPassword from './src/screens/LoginPassword';
import VerifyCode from './src/screens/VerifyCode';
>>>>>>> origin/tranthuc

const Stack = createNativeStackNavigator();

const App = () => {
    return (
<<<<<<< HEAD
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginNavigations' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginNavigations" component={LoginNavigations} options={{ animation: 'default' }} />
                <Stack.Screen name="Bottom" component={BottomNavigations} options={{ animation: 'default' }} />
            </Stack.Navigator>
        </NavigationContainer>
        
=======
        // <NavigationContainer>
        //   <Stack.Navigator screenOptions={{headerShown: false}}>
        //     <Stack.Screen name="Bottom" component={BottomNavigations} options={{animation:'default'}} />             
        //   </Stack.Navigator>
        // </NavigationContainer>
        // <LoginPassword/>
        <LoginEmail/>
        // <ForgotPassword2/>
        // <VerifyCode/>
>>>>>>> origin/tranthuc
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
