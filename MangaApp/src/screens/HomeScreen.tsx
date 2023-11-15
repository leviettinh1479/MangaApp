import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import ItemManga from '../components/item/ItemMangaFavourite';
import { FONT_FAMILY } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { data_Complete } from '../components/item/DataComplete';
import { ToastAndroid } from 'react-native';
import AxiosIntance from '../components/utils/AxiosIntance';

type ItemProps = {
  image: string
  nameManga: string
};
interface ScreenAProps {
  navigation: any; // or use the correct navigation type from @types/react-navigation
}
const ItemMangaHot = ({image, nameManga}:ItemProps) => {
  
return (
      <TouchableOpacity>
        <View style={{flexDirection:'column', justifyContent:'center',paddingHorizontal:20}}>
          <Image resizeMode='contain'style={{width:64, height:64,borderRadius:50}} source={{uri: image}}/>
          <Text style={{fontSize:12,fontFamily:FONT_FAMILY.quicksand_semibold,color:'#000000',textAlign:'center',marginTop:8}}>{nameManga}</Text>
      </View>
      </TouchableOpacity>
)
}

const HomeScreen = ({ navigation}:ScreenAProps)=> {
  navigation = useNavigation();

  const [GetManga, setGetManga] = useState([])


  useEffect(() => {
    try {
        const getAllManga = async () => {
            const respone = await AxiosIntance().get("/api/manga");
            if (respone) {
              setGetManga(respone.allManga);
              console.log("GetManga", GetManga)
            } else {
                ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
            }
        }
        getAllManga();

        return () => { }
    } catch (error) {
        console.log('errrrrrrror', error)
    }

}, []);


  return (
    <SafeAreaView style={{backgroundColor : 'white' , paddingHorizontal:16 , paddingTop:8}}>
     <ScrollView showsVerticalScrollIndicator = {false}> 
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
              <Text style={{fontSize:24, color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>Good Afternoon</Text>
              <Image style={{width:60, height:3}} resizeMode='contain' source={require('../assets/images/Vector1.png')}/>
            </View>
            <Image resizeMode='contain' source={require('../assets/images/avatar.png')}/>
          </View>
          {/* mangahot */}
          <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:25}}>
            <FlatList   style={{ flex: 1}}
              data={data_Complete}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ItemMangaHot image={item.image} nameManga={item.nameAuthor}  />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* category */}
          {/* <View style={{flexDirection:'row', justifyContent:'flex-start',marginTop:32}}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
              
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:16,paddingVertical:12}}>
                <FontAwesome5 name="hotjar" color="#000000" size={24}/>
                <Text style={{fontSize:14,fontFamily:FONT_FAMILY.quicksand_bold,color:'#313333',paddingLeft:5}}>
                  Trending
                </Text>
              
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
                paddingHorizontal:16,paddingVertical:12,borderRadius:20,borderWidth:1,
                borderColor:'#313333'}}>
                <Feather name="book-open" color="#000000" size={24}/>
                <Text style={{fontSize:14,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000',paddingLeft:5}}>
                  5-Minutes Read
                </Text>
                  
              </View>
            </ScrollView>
            
          </View> */}
          {/* boot to */}
          <TouchableOpacity>
            <View style={{backgroundColor:'#2D3047', width:'100%',height:201, marginTop:48,borderRadius:8}}>
              <Text style={{color:'#EAF4F4',fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,width:266,height:48,marginTop:16,marginLeft:16}}>
              Get unlimited access to books in just 
              </Text>
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column',marginTop:14,marginLeft:16}}>
                  <Text style={{color:'#EAF4F4',fontSize:36,fontFamily:FONT_FAMILY.quicksand_bold}}>
                    $10.0
                  </Text>
                  <Text style={{color:'#EAF4F4',fontSize:12,marginTop:30,fontFamily:FONT_FAMILY.quicksand_medium}}>
                    *Terms & conditions apply
                  </Text>
                </View>
                <Image resizeMode='contain' style={{width:59,height:85,marginLeft:16,marginTop:28}} source={require('../assets/images/manga.png')}/>
                <Image resizeMode='contain' style={{width:59,height:85,marginLeft:5,marginTop:23}} source={require('../assets/images/manga.png')}/>
                <Image resizeMode='contain' style={{width:59,height:85,marginLeft:5,marginTop:18}} source={require('../assets/images/manga.png')}/>
              </View>
            </View>
          </TouchableOpacity>
          {/* for you */}
          <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32}}>
              <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                For you
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen',{ data: "For you" })}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                  <Text style={{marginRight:5,fontSize:12,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                    Show all
                  </Text>
                    <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList   style={{ flex: 1,marginBottom:10}}
              data={GetManga}
              keyExtractor={item => item._id}
              renderItem={({item}) => <ItemManga  onpress={() => navigation.navigate("Detail", {_id: item._id})} image={item.image} nameManga={item.name} nameAuthor={item.author}  description={item.status}  />}
              horizontal
              showsHorizontalScrollIndicator = {false}
              
            />
          </View>
          {/* trending */}
          <View style={{flexDirection:'column',justifyContent:'flex-start',marginBottom:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32}}>
              <Text style={{fontSize:20,fontFamily:FONT_FAMILY.quicksand_bold,color:'#000000'}}>
                Trending
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen',{ data: "Trending" })}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:2}}>
                  <Text style={{marginRight:5,fontSize:12,color:'#000000',fontFamily:FONT_FAMILY.quicksand_bold}}>
                    Show all
                  </Text>
                    <FontAwesome5 name="chevron-circle-right" color={'#000000'}  size={24}/>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList   style={{ flex: 1,marginBottom:10}}
              data={GetManga}
              keyExtractor={item => item._id}
              renderItem={({item}) => <ItemManga  onpress={() => navigation.navigate("DetailScreen", { _id: item._id })} image={item.image} nameManga={item.name} nameAuthor={item.author} description={item.status} view={0}  />}
              horizontal
              showsHorizontalScrollIndicator = {false}
            />
          </View>
     </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 40,
    width: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 8,
},
})
type ItemExample ={
  id: string;
  image: string;
  nameManga: string;
  nameAuthor: string;
  view: number;
}
// const data_ItemExample: ItemExample[] = [{
//   id: "1",
//   image: "https://cdn-icons-png.flaticon.com/128/740/740922.png",
//   nameManga: "Red Apple",
//   nameAuthor: "abc 15",
//   view: 3975
// }, {
//   id: "2",
//   image: "https://cdn-icons-png.flaticon.com/128/2909/2909808.png",
//   nameManga: "Apple Pie",
//   nameAuthor: "Name Less",
//   view: 500
// }, {
//   id: "3",
//   image: "https://cdn-icons-png.flaticon.com/128/2079/2079291.png",
//   nameManga: "Apple Pen",
//   nameAuthor: "Skibidi",
//   view: 823
// }]