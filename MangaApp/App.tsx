import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './src/screens/DetailScreen';
import Account from './src/screens/Account/Account';
import ProfileDetail from './src/screens/Account/ProfileDetail';
import ChapterDetailScreen from './src/screens/ChapterDetailScreen';
import ItemChapImage from './src/components/item/ItemChapImage';
import Genre from './src/screens/Genre';
import SignUp from './src/screens/SignUp';
import ForgotPassword_1 from './src/screens/ForgotPassword_1';
import MyLibraryScreen from './src/screens/MyLibraryScreen';
import BottomTabNagivation from './src/navigators/BottomTabNagivation';
import LoginEmail from './src/screens/LoginEmail';
import LoginPassword from './src/screens/LoginPassword';


const Stack = createNativeStackNavigator();

const StackLogin =()=> {
    return(
        <Stack.Navigator initialRouteName='LoginEmail' screenOptions={{headerShown: false}}>
            <Stack.Screen name='LoginEmail' component={LoginEmail}/>
            <Stack.Screen name='LoginPassword' component={LoginPassword}/>
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='StackLogin' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='StackLogin' component={StackLogin}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='BottomTab' component={BottomTabNagivation}/>
                <Stack.Screen name='Detail' component={DetailScreen}/>
                <Stack.Screen name='DetailChap' component={ChapterDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
