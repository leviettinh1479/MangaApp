import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ItemManga from '../item/ItemManga';
import {data_ItemExample} from '../item/Data'

type ItemProps = {
  title: string
};
interface ScreenAProps {
  navigation: any; // or use the correct navigation type from @types/react-navigation
}
const ItemTopics = ({title}:ItemProps) => {
  return (
    <TouchableOpacity  style={{backgroundColor:'#FF97A3', paddingHorizontal:16, paddingVertical:8,alignItems:'center',
      marginTop:16,justifyContent:'center',marginHorizontal:5,borderRadius:8}}>
      <Text style={{fontSize:14, fontWeight:'400', color:'#000000'}}>{title}</Text>
    </TouchableOpacity>
  )
  }
const ExploreScreen = ({ navigation}:ScreenAProps) => {
  return (
   <ScrollView >
      <SafeAreaView style={{backgroundColor:'white',paddingHorizontal:16,paddingTop:7,flex:1,paddingBottom:10}}>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:26 , fontWeight:'700', color:'#000000'}}>Explore</Text>
        <View style={{width:86, borderBottomWidth:2, borderBlockColor:'#FF97A3',padding:2}}></View>
      </View>
      {/* Search */}
      <View style={[{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',marginTop:24},styles.borderSearch]}>
      <Ionicons name="search" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
        <TextInput style={{fontSize:16, color:'#000000',paddingLeft:10}}
            placeholder="Tìm kiếm..."
          />
      </View>
      <Text style={{marginTop:38,fontSize:22,fontWeight:'700',color:'#000000'}}>
        Topics
      </Text>
      {/* topics */}
      <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
        <FlatList   style={{ flex:1}}
                data={data_ItemTopics}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemTopics title={item.title}  />}
                showsVerticalScrollIndicator
                numColumns={3}
              />
      </View>
      {/* fiction */}
      <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32,marginBottom:16}}>
                <Text style={{fontSize:20,fontWeight:'700',color:'#000000'}}>
                  Fiction
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen')}>
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                    <Text style={{marginRight:5,fontSize:12,color:'#000000',fontWeight:'700'}}>
                      Show all
                    </Text>
                      <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={data_ItemExample}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemManga image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view}  />}
                horizontal
              />
      </View>
       {/* Culture & Society */}
       <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32,marginBottom:16}}>
                <Text style={{fontSize:20,fontWeight:'700',color:'#000000'}}>
                  Culture & Society
                </Text>
                <TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                    <Text style={{marginRight:5,fontSize:12,color:'#000000',fontWeight:'700'}}>
                      Show all
                    </Text>
                      <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={data_ItemExample}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemManga image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view}  />}
                horizontal
              />
      </View>
      {/* Life style */}
      <View style={{flexDirection:'column',justifyContent:'flex-start',marginBottom:30}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32,marginBottom:16}}>
                <Text style={{fontSize:20,fontWeight:'700',color:'#000000'}}>
                Life style
                </Text>
                <TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                    <Text style={{marginRight:5,fontSize:12,color:'#000000',fontWeight:'700'}}>
                      Show all
                    </Text>
                      <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={data_ItemExample}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemManga image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view}  />}
                horizontal
              />
      </View>
      
    </SafeAreaView>
   </ScrollView>
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
    elevation: 2,
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