import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {data_ItemExample} from '../components/item/Data'
import ItemProductList from '../components/item/ItemProductList';
import { FONT_FAMILY } from '../theme/theme';


interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const ProductListScreen = ({ navigation}:ScreenAProps) => {
  return (
      <SafeAreaView style={{backgroundColor:'white',paddingHorizontal:16,paddingTop:7,flex:1,paddingBottom:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="chevron-back" color={'#000000'}  size={24} style={{paddingTop:2}} onPress={()=> navigation.goBack()}/>
            <Text style={{fontSize:22 , fontFamily:FONT_FAMILY.quicksands_medium, color:'#000000',marginLeft:5}}>Fiction</Text>
        </View>
      {/* fiction */}
        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
              <FlatList
                data={data_ItemExample}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemProductList image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view} descrption={item.descrption}  />}
                numColumns={2}
                contentContainerStyle={{paddingBottom: 10, paddingTop: 8}}
                showsVerticalScrollIndicator = {false}
                
              />
      </View>
       
      
    </SafeAreaView>
  )
}

export default ProductListScreen

const styles = StyleSheet.create({
  borderSearch: {
    height:48,
    paddingHorizontal:16,
    backgroundColor:'#ffffff',
    borderRadius:8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
      }

  
})