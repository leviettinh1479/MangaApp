import { Image,ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserAccountScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <ImageBackground  style={{flex:1}} blurRadius={5}  source={require('../assets/images/testimage.jpg')}>
              <Image  style={{position:'absolute',height:100,width:100}}  resizeMode='contain' source={require('../assets/images/testimage.jpg')}/>
            </ImageBackground>
    </SafeAreaView>
  )
}

export default UserAccountScreen

const styles = StyleSheet.create({})