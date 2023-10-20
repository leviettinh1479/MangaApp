import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { IconButton, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {data_ItemExample} from '../components/item/Data'
import ItemMangaSearch from '../components/item/ItemMangaSearch';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import { FONT_FAMILY } from '../theme/theme';


interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const ListSearchScreen = ({ navigation}:ScreenAProps) => {
    const handleBlur = () => {
         navigation.goBack();
      };
  return (
      <SafeAreaView style={{backgroundColor:'white',paddingHorizontal:16,paddingTop:7,flex:1,paddingBottom:10}}>
         <View>
         <Searchbar
                  placeholder="Tìm kiếm..."
                  //  onFocus={() => navigation}
                  //  onBlur={handleBlur}
                  elevation={4}
                  onIconPress={handleBlur}
                  icon={"chevron-left"}
                  style={[{ backgroundColor: '#ffffff', marginTop: 24, marginHorizontal: 5}, styles.borderSearch]} value={''}  />
         </View>
         <Text style={{fontSize:18,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold,marginTop:32}}>
            Search results
         </Text>
      {/* fiction */}
            <FlatList style={[styles.listSearch,{flex:1}]}
            data={data_ItemExample}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>  <ItemMangaSearch image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view}  />}
            showsVerticalScrollIndicator = {false}
          />
          
       
      
    </SafeAreaView>
  )
}

export default ListSearchScreen

const styles = StyleSheet.create({
  borderSearch: {
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
      },
      listSearch: {
        position:'relative',
        width:'100%',
        height:'auto',
        backgroundColor:'#ffffff',
        top:10
    }

  
})