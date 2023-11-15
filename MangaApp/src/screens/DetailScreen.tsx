import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { FONT_FAMILY } from '../theme/theme'
import { data_ItemExample } from '../components/item/Data'
import ItemManga from '../components/item/ItemMangaFavourite'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AxiosIntance from '../components/utils/AxiosIntance'
import { ActivityIndicator } from 'react-native';
import { AppContext } from './login_signup.tsx/AppContext'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../components/utils/redux/action';

type ItemProps = {
  title: string
};

interface ScreenAProps {
  navigation: any; // or use the correct navigation type from @types/react-navigation
}
const ItemTopics = ({ title }: ItemProps) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: '#FF97A3', paddingHorizontal: 16, paddingVertical: 8, alignItems: 'center',
      marginTop: 16, justifyContent: 'center', marginHorizontal: 5, borderRadius: 8, overflow:'hidden'
    }}>
      <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.quicksand_medium, color: '#000000' }}>{title}</Text>
    </TouchableOpacity>
  )
}


interface FavoriteItemProps {
  mangaId: string;
  userId:string;
}
interface ScreenAProps{
  navigation: any;
}
// item chap
interface ItemChap {
  id?: String;
  title: String;
  content: String;
  onpress?: () => {

  }
}

const ItemChaps: React.FC<ItemChap> = ({
  title,
  content,
  onpress
}) => {
  
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={{ flexDirection: 'row', marginTop: 24 }}>
        {/* <Text style={{fontSize:18,fontFamily:FONT_FAMILY.quicksand_regular,color:'#000000'}}>{id}</Text> */}
        <View style={{ flexDirection: 'column', marginLeft: 16 }}>
          <Text style={{ fontSize: 18, color: '#000000', fontFamily: FONT_FAMILY.quicksand_bold }}>Chương {title}
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 16, color: '#000000', fontFamily: FONT_FAMILY.quicksand_regular }}>
            {content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
type CombinedProps = FavoriteItemProps & ScreenAProps;
const DetailScreen: React.FC<ScreenAProps> = ({
  navigation,
}) => {
  



// chi tiết manga
  const route = useRoute();
  const dataId = route.params?._id;
  const [loading, setLoading] = useState(true);
  const [GetMangaId, setGetMangaId] = useState([])
  const [GetChapterId, setGetChapterId] = useState([])

  const [GetGenre, setGetGenre] = useState([])
  useEffect(() => {
    const getMangaID = async () => {
      try {
        const respone = await AxiosIntance().get("/api/manga/" + dataId);
        if (respone) {
          setGetMangaId(respone.manga);
          console.log("idmanga", dataId)
        } else {
          ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
        }
        const respone1 = await AxiosIntance().get("/api/chapter/getall/" + dataId);
        // console.log('ádasdasd', respone1)
        if (respone1) {
          setGetChapterId(respone1.chapters);
          console.log("chaoterID", GetChapterId)
        } else {
          ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
        }
        const respone2 = await AxiosIntance().get("/api/manga/getgenres/"+dataId);
        if (respone2) {
          setGetGenre(respone2.genres);
          console.log("genres", respone2)
        } else {
          ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
        }
      } catch (error) {
        console.log('errrrrrrror', error)
      }
      finally {
        setLoading(false); // Kết thúc khi dữ liệu đã được tải hoặc xảy ra lỗi
      }

    }
    getMangaID();

    return () => { }


  }, []);


/// favorite
  const [isFavorite, setIsFavorite] = useState(false);
  // const handleToggleFavorite = () => {
  //   if (isFavorite) {
  //     // Xóa khỏi danh sách yêu thích
  //     removeFromFavorites(dataId)
  //       .then(() => setIsFavorite(false))
  //       .catch((error) => console.error('Error removing from favorites:', error));
  //   } else {
  //     // Thêm vào danh sách yêu thích
  //     console.log(":>>>>>>favorite")
  //     addToFavorites(dataId,infoUser._id)
  //       .then(() => setIsFavorite(true))
  //       .catch((error) => console.error('Error adding to favorites:', error));
  //   }
  // };
  // favorite api
  const {infoUser} = useContext(AppContext)
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);
  console.log("favorites.userId",favorites[0].manga._id);
  const handleToggleFavorite = () => {
    if (favorites.includes(favorites[0]._id)) {
      // Xóa khỏi danh sách yêu thích
      dispatch(removeFromFavorites(favorites._id));
      console.log(">>>>>Reomovefavrite")
    } else {
      // Thêm vào danh sách yêu thích
      dispatch(addToFavorites(dataId,infoUser._id));
      console.log(">>>>>Addfavrite")

    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          // Hiển thị loading component trong khi dữ liệu đang tải
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ImageBackground style={{ height: 280, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingHorizontal: 16, position: 'relative' }} blurRadius={5} source={require('../assets/images/testimage.jpg')}>
            <Image style={{ position: 'absolute', height: 250, width: 160 }} resizeMode='cover' source={{ uri: GetMangaId.image }} />
            <View style={{ backgroundColor: '#FF97A3', width: '100%', height: 56, borderRadius: 8, padding: 8, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('DetailChap', { _id: GetChapterId[0]._id, chapter: GetMangaId.chapters[0] })}>
                <Feather name="book" color="#000000" size={18} style={{ backgroundColor: 'transparent', }} />
                <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_bold, marginLeft: 10, color: '#000000' }}>Read Nexus</Text>
              </TouchableOpacity>
              <View style={{ width: 1, height: 20, backgroundColor: '#000000' }}></View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SimpleLineIcons name="earphones" color="#000000" size={18} style={{ backgroundColor: 'transparent', }} />
                <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_bold, marginLeft: 10, color: '#000000' }}>Play Nexus</Text>
              </View>
            </View>
          </ImageBackground>
        )}
        <View style={{ flexDirection: 'column', paddingHorizontal: 16, marginBottom: 10 }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
            <Text numberOfLines={2} style={{ fontSize: 22, fontFamily: FONT_FAMILY.quicksand_bold, color: '#000000' }}>
              {GetMangaId.name}
            </Text>
            <TouchableOpacity onPress={handleToggleFavorite}>
              {favorites.includes(favorites[0].manga._id) == dataId ? <Ionicons name="bookmark" color="#FF97A3" size={20} style={{ padding: 1, marginTop: 5 }} />
               : 
               <Ionicons name="bookmark-outline" color="#FF97A3" size={20} style={{ padding: 1, marginTop: 5 }} />}
              </TouchableOpacity>
          </View>
          <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_bold, color: '#000000', marginTop: 12 }}>
            {GetMangaId.author}
          </Text>
          <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_regular, color: '#000000', marginTop: 12 }}>
            {GetMangaId.status}
          </Text>
          <View style={{ backgroundColor: '#FF97A3', width: '100%', borderRadius: 8, padding: 8, flexDirection: 'row', justifyContent: 'space-around', marginTop: 18, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="clock" color="#000000" size={18} style={{ backgroundColor: 'transparent', }} />
              <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_bold, marginLeft: 10, color: '#000000' }}>18 min</Text>
            </View>
            <View style={{ width: 1, height: 20, backgroundColor: '#000000' }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Fontisto name="lightbulb" color="#000000" size={18} style={{ backgroundColor: 'transparent', }} />
              <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.quicksand_bold, marginLeft: 10, color: '#000000' }}>6 key ideas</Text>
            </View>
          </View>
          <Text style={{ fontSize: 18, color: '#000000', fontFamily: FONT_FAMILY.quicksand_bold, marginTop: 32 }}>
            About this Manga
          </Text>
          <Text style={{ fontSize: 16, color: '#000000', fontFamily: FONT_FAMILY.quicksand_regular }}>
            Getting Along (2022) describes the importance of workplace interactions and their effecs on productivity and creaiviy.
          </Text>
          <FlatList style={{ flex: 1, marginTop: 16 }}
            data={GetGenre}
            keyExtractor={(item, index)=> index.toString()}
            renderItem={({ item }) => <ItemTopics title={item} />}
            numColumns={2}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
          <Text style={{ fontSize: 22, color: '#000000', fontFamily: FONT_FAMILY.quicksand_bold, marginTop: 26 }}>
            56 Chapters
          </Text>
          <FlatList style={{ flex: 1 }}
            data={GetChapterId}
            keyExtractor={item => item._id}
            renderItem={({ item }) => <ItemChaps onpress={() => navigation.navigate('DetailChap', { _id: item._id, dataid: dataId })} title={item.chap} id={item._id} content={item.content} />}
            numColumns={1}
            nestedScrollEnabled={true}
            scrollEnabled={false}
            initialNumToRender={5}
          />
          {/* <Text style={{ fontSize: 18, color: '#000000', fontFamily: FONT_FAMILY.quicksand_bold, marginTop: 24, marginLeft: 39 }}>
            Final Sumary
          </Text> */}
          <View style={{ flexDirection: 'row', height: 101, padding: 12, backgroundColor: '#FF97A3', borderRadius: 12, marginTop: 29 }}>
            <Image style={{ height: 56, width: 56, borderRadius: 50 }} resizeMode='contain' source={require('../assets/images/manga.png')} />
            <View style={{ flexDirection: 'column', marginLeft: 12 }}>
              <Text style={{ fontSize: 18, fontFamily: FONT_FAMILY.quicksand_bold, color: '#000000' }}>James wood</Text>
              <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.quicksand_regular, color: '#000000' }}>A FanklinConvey Title</Text>
              <Text numberOfLines={2} style={{ fontSize: 14, fontFamily: FONT_FAMILY.quicksand_regular, color: '#000000' }}>Managers who want to create positive work enviroments</Text>
            </View>
          </View>
          {/* Life style */}
          <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginBottom: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
              <Text style={{ fontSize: 20, fontFamily: FONT_FAMILY.quicksand_bold, color: '#000000' }}>
                Relate To Manga
              </Text>
              <TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
                  <Text style={{ marginRight: 5, fontSize: 14, color: '#000000', fontFamily: FONT_FAMILY.quicksand_bold }}>
                    Show all
                  </Text>
                  <FontAwesome5 name="chevron-circle-right" color={'#000000'} size={24} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList style={{ flex: 1 }}
              data={data_ItemExample}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <ItemManga image={item.image} nameManga={item.nameManga} nameAuthor={item.nameAuthor} view={item.view} description={''} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  loadingContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
type ItemTopics = {
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