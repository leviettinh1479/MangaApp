import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ListSearchScreen from '../screens/ListSearchScreen';
import ProductListScreen from '../screens/ProductListScreen';
import Account from '../screens/Account/Account';
import ProfileDetail from '../screens/Account/ProfileDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import MyLibraryScreen from '../screens/MyLibraryScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../screens/login_signup.tsx/AppContext';
import LoginNavigations from './LoginNavigations';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const StackHome = () =>{
    return(
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            {/* <Stack.Screen name='StackMangaDetail' component={StackMangaDetail}/> */}
        </Stack.Navigator>
    )
}

// const StackMangaDetail = () =>{
//     return(
//         <Stack.Navigator initialRouteName='DetailScreen'  screenOptions={{headerShown: false}}>
//             <Stack.Screen name='DetailScreen' component={DetailScreen}/>
//             <Stack.Screen name='ChapterDetailScreen' component={ChapterDetailScreen}/>
//         </Stack.Navigator>
//     )
// }

const StackExplore = () =>{
    return(
        <Stack.Navigator initialRouteName='ExploreScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='ExploreScreen' component={ExploreScreen}/>
            <Stack.Screen name="ListSearchScreen" component={ListSearchScreen} />
            <Stack.Screen name="ProductListScreen" component={ProductListScreen}/>
        </Stack.Navigator>
    )
}

const StackAccount = () =>{
    return(
        <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown: false}}>
            <Stack.Screen  name="Account" component={Account}/>
            <Stack.Screen  name="ProfileDetail" component={ProfileDetail} />
        </Stack.Navigator>
    )
}




const BottomTabNagivation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: SPACING.space_10 * 6,
        },
      }}>
        <Tab.Screen name='Trang chủ' component={StackHome}
        options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <View style={[
                    styles.activeline,
                    focused ? { backgroundColor: COLORS.Orange } : {},
                  ]}></View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather
                      name="home"
                      color="#000000"
                      size={24}
                      style={{ backgroundColor: 'transparent', }}
                    />
                  </View>
  
                </View>
              );
            },
          }}/>
        <Tab.Screen name='Tìm kiếm' component={StackExplore}
        options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <View style={[
                    styles.activeline,
                    focused ? { backgroundColor: COLORS.Orange } : {},
                  ]}></View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                      name="search"
                      color="#000000"
                      size={24}
                      style={{ backgroundColor: 'transparent', }}
                    />
                  </View>
  
                </View>
              );
            },
          }}/>
        <Tab.Screen name='Yêu thích' component={MyLibraryScreen}
        options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <View style={[
                    styles.activeline,
                    focused ? { backgroundColor: COLORS.Orange } : {},
                  ]}></View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather
                      name="heart"
                      color="#000000"
                      size={24}
                      style={{ backgroundColor: 'transparent', }}
                    />
                  </View>
  
                </View>
              );
            },
          }}/>
        <Tab.Screen name='Tài khoản' component={StackAccount}
        options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <View style={[
                    styles.activeline,
                    focused ? { backgroundColor: COLORS.Orange } : {},
                  ]}></View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                      name="compass-outline"
                      color="#000000"
                      size={24}
                      style={{ backgroundColor: 'transparent', }}
                    />
                  </View>
  
                </View>
              );
            },
          }}/>
    </Tab.Navigator>
  )
}
const AppNavigator = () => {
  const {isLogin} = useContext(AppContext);
return (
  <>
      {
          isLogin == false ? <LoginNavigations/> : <BottomTabNagivation/>
      }
  </>
);
}

export default AppNavigator

const styles = StyleSheet.create({
    activeline: {
        width: 50,
        height: 2,
        marginBottom: 10,
    
      },
})