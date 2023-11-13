import { Text, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './src/screens/DetailScreen';
import Account from './src/screens/Account/Account';
import ProfileDetail from './src/screens/Account/ProfileDetail';
import ChapterDetailScreen from './src/screens/ChapterDetailScreen';
import ItemChapImage from './src/components/item/ItemChapImage';

import MyLibraryScreen from './src/screens/MyLibraryScreen';
import BottomTabNagivation from './src/navigators/BottomTabNagivation';
import LoginEmail from './src/screens/login_signup.tsx/LoginEmail';
import LoginPassword from './src/screens/login_signup.tsx/LoginPassword';
import SignUp from './src/screens/login_signup.tsx/SignUp';
import LoginNavigations from './src/navigators/LoginNavigations';
import { AppContext, AppContextProvider } from './src/screens/login_signup.tsx/AppContext';




const Stack = createNativeStackNavigator();

const StackLogin =()=> {
    return(
        <Stack.Navigator initialRouteName='LoginEmail' screenOptions={{headerShown: false}}>
            <Stack.Screen name='LoginEmail' component={LoginEmail}/>
            <Stack.Screen name='LoginPassword' component={LoginPassword}/>
            <Stack.Screen name='Register' component={SignUp}/>
        </Stack.Navigator>
    )
}
const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
  return (
    <>
        {
            isLogin == false ? <StackLogin/> : <BottomTabNagivation/>
        }
    </>
  );
  }

const App = () => {
    return (
        <AppContextProvider>
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName='StackLogin' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='StackLogin' component={StackLogin}/>
                <Stack.Screen name='LoginNavigation' component={LoginNavigations}/>
                <Stack.Screen name='BottomTab' component={BottomTabNagivation}/>
                <Stack.Screen name='Detail' component={DetailScreen}/>
                <Stack.Screen name='DetailChap' component={ChapterDetailScreen}/>
            </Stack.Navigator> */}
            <AppNavigator/>
        </NavigationContainer>
        </AppContextProvider>
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

