import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
<<<<<<< HEAD
import Genre from './src/screens/Genre';
=======
import VerifyCode from './tranthuc/VerifyCode';
import LoginEmail from './tranthuc/LoginEmail';
import LoginPassword from './tranthuc/LoginPassword';
import ForgotPassword2 from './tranthuc/ForgotPassword2';
>>>>>>> origin/tranthuc


const Stack = createNativeStackNavigator();

const App = () => {
    return (
<<<<<<< HEAD
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bottom" component={BottomNavigations} options={{ animation: 'default' }} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )

=======
      // <NavigationContainer>
      //   <Stack.Navigator screenOptions={{headerShown: false}}>
      //     <Stack.Screen name="Bottom" component={BottomNavigations} options={{animation:'default'}} />             
      //   </Stack.Navigator>
      // </NavigationContainer>
      //<VerifyCode/>
      //<LoginPassword/>
      <LoginEmail/>
      //<ForgotPassword2/>
    )
>>>>>>> origin/tranthuc
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
