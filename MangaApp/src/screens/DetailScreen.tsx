import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserAccountScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white',paddingHorizontal:16,paddingTop:8}}>
         <ScrollView showsVerticalScrollIndicator = {false}>
          <ImageBackground  blurRadius={5} resizeMode='contain' source={require('../assets/images/avatar.png')}/>
            
         </ScrollView>
    </SafeAreaView>
  )
}

export default UserAccountScreen

const styles = StyleSheet.create({})