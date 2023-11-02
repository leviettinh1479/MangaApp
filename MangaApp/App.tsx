import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
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


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
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
