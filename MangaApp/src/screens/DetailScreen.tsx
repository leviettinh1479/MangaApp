import { FlatList, Image,ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { FONT_FAMILY } from '../theme/theme'
import { data_ItemExample } from '../components/item/Data'
import ItemManga from '../components/item/ItemManga'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


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
      <Text style={{fontSize:14, fontFamily:FONT_FAMILY.quicksand_medium, color:'#000000'}}>{title}</Text>
    </TouchableOpacity>
  )
  }
  // item chap
  interface ItemChap {
    id: String; 
    title: String; 
    content: String; 
  }
  const ItemChaps = ({id,title,content}:ItemChap) => {
    return (
      <TouchableOpacity >
       <View style={{flexDirection:'row',marginTop:24}}>
                  <Text style={{fontSize:18,fontFamily:FONT_FAMILY.quicksand_regular,color:'#000000'}}>{id}</Text>
                  <View style={{flexDirection:'column',marginLeft:16}}>
                    <Text style={{fontSize:18,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                      {title}
                    </Text>
                    <Text numberOfLines={1} style={{fontSize:16,color:'#000000',fontFamily:FONT_FAMILY.quicksand_regular}}>
                      {content}
                    </Text>
                  </View>
                </View>
      </TouchableOpacity>
    )
    }
const UserAccountScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground  style={{height:280,flexDirection:'column',justifyContent:'flex-end',alignItems:'center',paddingHorizontal:16}} blurRadius={5}  source={require('../assets/images/testimage.jpg')}>
              <Image  style={{position:'absolute',height:160,width:160}}  resizeMode='contain' source={require('../assets/images/testimage.jpg')}/>
              <View style={{backgroundColor:'#FF97A3',width:'100%',height:56,borderRadius:8,padding:8,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name="book" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
                  <Text style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_bold,marginLeft:10,color:'#000000'}}>Read Nexus</Text>
                </View>
                <View style={{width:1,height:20,backgroundColor:'#000000'}}></View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <SimpleLineIcons name="earphones" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
                  <Text style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_bold,marginLeft:10,color:'#000000'}}>Play Nexus</Text>
                </View>
              </View>
            </ImageBackground>
            <View  style={{flexDirection:'column',paddingHorizontal:16,marginBottom:20}} >
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:24}}>
                <Text numberOfLines={2} style={{fontSize:22,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                  Project Management for the Unofficial Proect Manager
                </Text>
                <TouchableOpacity><Ionicons name="bookmark-outline" color="#FF97A3" size={20} style={{padding:1,marginTop:5}}/></TouchableOpacity>
              </View>
              <Text numberOfLines={1} style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000',marginTop:12}}>
                Kory Kogon, Suzette Blakemore, and James wood
              </Text>
              <Text style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_regular,color:'#000000',marginTop:12}}>
               A FanklinConvey Title
              </Text>
              <View style={{backgroundColor:'#FF97A3',width:'100%',borderRadius:8,padding:8,flexDirection:'row',justifyContent:'space-around',marginTop:18,alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name="clock" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
                  <Text style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_bold,marginLeft:10,color:'#000000'}}>18 min</Text>
                </View>
                <View style={{width:1,height:20,backgroundColor:'#000000'}}></View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Fontisto name="lightbulb" color="#000000" size={18} style={{backgroundColor: 'transparent',}}/>
                  <Text style={{fontSize:16,fontFamily:FONT_FAMILY.quicksand_bold,marginLeft:10,color:'#000000'}}>6 key ideas</Text>
                </View>
              </View>
              <Text style={{fontSize:18,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold,marginTop:32}}>
                About this Book
              </Text>
              <Text style={{fontSize:16,color:'#000000',fontFamily:FONT_FAMILY.quicksand_regular}}>
                Getting Along (2022) describes the importance of workplace interactions and their effecs on productivity and creaiviy.
              </Text>
              <FlatList   style={{ flex: 1,marginTop:16}}
                      data={data_ItemTopics}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <ItemTopics title={item.title}  />}
                      numColumns={2}
                      nestedScrollEnabled={true}
                      scrollEnabled={false}
                    />
                <Text style={{fontSize:22,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold,marginTop:26}}>
                  56 Chapters
                </Text>
                <FlatList   style={{ flex: 1}}
                      data={data_ItemExample.slice(0,3)}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <ItemChaps title={item.nameManga} id={item.id} content={item.descrption}  />}
                      numColumns={1}
                      nestedScrollEnabled={true}
                      scrollEnabled={false}
                      initialNumToRender={2}
                    />
                <Text style={{fontSize:18,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold,marginTop:24,marginLeft:39}}>
                  Final Sumary
                </Text>
                <View style={{flexDirection:'row',height:101,padding:12,backgroundColor:'#FF97A3',borderRadius:12,marginTop:29}}>
                <Image  style={{height:56,width:56,borderRadius:50}}  resizeMode='contain' source={require('../assets/images/manga.png')}/>
                  <View style={{flexDirection:'column',marginLeft:12}}>
                    <Text style={{fontSize:18,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>James wood</Text>
                    <Text style={{fontSize:14,fontFamily:FONT_FAMILY.quicksand_regular,color:'#000000'}}>A FanklinConvey Title</Text>
                    <Text numberOfLines={2} style={{fontSize:14,fontFamily:FONT_FAMILY.quicksand_regular,color:'#000000'}}>Managers who want to create positive work enviroments</Text>
                  </View>
                </View>
                {/* Life style */}
                <View style={{flexDirection:'column',justifyContent:'flex-start',marginBottom:30}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:32,marginBottom:16}}>
                    <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                    Relate To Manga
                    </Text>
                    <TouchableOpacity>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                        <Text style={{marginRight:5,fontSize:14,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                          Show all
                        </Text>
                          <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <FlatList style={{ flex: 1}}
                    data={data_ItemExample}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemManga image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view}  />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                  />
                </View>
            </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default UserAccountScreen

const styles = StyleSheet.create({})
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