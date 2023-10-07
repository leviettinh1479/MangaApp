import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigations from './src/navigators/BottomNavigations';
import Genre from './src/screens/Genre';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="Bottom" component={BottomNavigations} options={{ animation: 'default' }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Genre/>
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
