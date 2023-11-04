import {  StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ItemManga from '../components/item/ItemMangaFavourite';
import {data_ItemExample} from '../components/item/Data'
import { FONT_FAMILY } from '../theme/theme';
import SearchComponent from '../components/SearchComponent';
import { useNavigation } from '@react-navigation/native';
import { data_Complete } from '../components/item/DataComplete';

interface ItemProps {
  title: string;
  onpress?: () => void
};
interface ScreenAProps {
  navigation: any; // or use the correct navigation type from @types/react-navigation
}
const ItemTopics = ({title,onpress}:ItemProps) => {
  return (
    <TouchableOpacity onPress={onpress}  style={{backgroundColor:'#FF97A3', paddingHorizontal:16, paddingVertical:8,alignItems:'center',
      marginTop:16,justifyContent:'center',marginHorizontal:5,borderRadius:8}}>
      <Text style={{fontSize:14, fontFamily:FONT_FAMILY.quicksand_semibold, color:'#000000'}}>{title}</Text>
    </TouchableOpacity>
  )
  }
const ExploreScreen = ({ navigation}:ScreenAProps) => {
  navigation = useNavigation();
  const [data, setData] = useState(['Món ăn 1', 'Món ăn 2', 'Món ăn 3', 'Món ăn 4']);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filteredData: React.SetStateAction<string[]>) => {
    setFilteredData(filteredData);
  };
  return (
   
      <SafeAreaView style={{backgroundColor:'white',paddingHorizontal:16,paddingTop:8}}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:26 , fontFamily:FONT_FAMILY.quicksand_bold, color:'#000000'}}>Explore</Text>
            <View style={{width:86, borderBottomWidth:2, borderBlockColor:'#FF97A3',padding:2}}></View>
          </View>
          {/* Search */}
          {/* <View style={[{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',marginTop:24,marginHorizontal:5},styles.borderSearch]}>
            <Ionicons name="search" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
            <TextInput style={{fontSize:16, color:'#000000',paddingLeft:10,fontFamily:FONT_FAMILY.quicksand_semibold}}
                placeholder="Tìm kiếm..."
              />
          </View> */}
          <View >
            <SearchComponent data={data} onpress={()=> navigation.navigate("ListSearchScreen")}/>
          </View>
              
          <Text style={{marginTop:38,fontSize:22,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
            Topics
          </Text>
          {/* topics */}
          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <FlatList   style={{ flex: 1}}
                      data={data_ItemTopics}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <ItemTopics onpress={() => navigation.navigate('ProductListScreen',{ data: item.title })}  title={item.title}  />}
                      numColumns={3}
                      nestedScrollEnabled={true}
                      scrollEnabled={false}
                    />
          </View>
          {/* fiction */}
          <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:32,marginBottom:16}}>
                    <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                      Fiction
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen',{ data: "Fiction" })}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                        <Text style={{marginRight:5,fontSize:12,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                          Show all
                        </Text>
                          <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <FlatList style={{ flex: 1}}
                    data={data_Complete}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemManga onpress={() => navigation.navigate('Detail')}  image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view} description={item.description}  />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                  />
          </View>
          {/* Culture & Society */}
          <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:32,marginBottom:16}}>
                    <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                      Culture & Society
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen',{ data: "Culture & Society" })}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                        <Text style={{marginRight:5,fontSize:12,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                          Show all
                        </Text>
                          <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <FlatList style={{ flex: 1}}
                    data={data_Complete}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemManga onpress={() => navigation.navigate('Detail')} image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view} description={item.description}  />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                  />
          </View>
          {/* Life style */}
          <View style={{flexDirection:'column',justifyContent:'flex-start',marginBottom:30}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:32,marginBottom:16}}>
                    <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                    Life style
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen',{ data: "Life style" })}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                        <Text style={{marginRight:5,fontSize:12,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                          Show all
                        </Text>
                          <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <FlatList style={{ flex: 1}}
                    data={data_Complete}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemManga onpress={() => navigation.navigate('Detail')} image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view} description={item.description}  />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                  />
          </View>
      </ScrollView>
    </SafeAreaView>
   
  )
}

export default ExploreScreen

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
    elevation: 4,
      }

  
})
type ItemTopics ={
  id: string;
  title: string;
}
const data_ItemTopics: ItemTopics[] = [{
  id: "1",
  title: "Personal growth"
}, {
  id: "2",
  title: "Personal growth"
}, {
  id: "3",
  title: "Personal"
},
{
  id: "4",
  title: "growth"
},
{
  id: "5",
  title: "Personal"
},
]