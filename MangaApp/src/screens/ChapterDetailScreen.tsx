import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { FONT_FAMILY } from '../theme/theme';
import ItemChapImage from '../components/item/ItemChapImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import AxiosIntance from '../components/utils/AxiosIntance';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
}
const ChapterDetailScreen = ({ navigation }: ScreenAProps) => {
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const dataChapId = route.params?._id;
    const dataId = route.params?.dataid;
    console.log(">>>>>>>>>>", dataChapId);
    console.log(">Itemms", dataId);


    const [GetChapDetailId, setGetChapDetailId] = useState([])
    const [chapImage, setchapImage] = useState([])
    const [GetChapterId, setGetChapterId] = useState([])
    const [Chapter, setChapter] = React.useState("");
    const [Data, setData] = React.useState([]);

    useEffect(() => {
        const getAllManga = async () => {
            try {
                const respone = await AxiosIntance().get("/api/chapter/" + dataChapId);
                if (respone) {
                    setGetChapDetailId(respone.chapter);
                    setchapImage(respone.chapter.image);

                } else {
                    ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT);
                }
                const respone1 = await AxiosIntance().get("/api/chapter/getall/" + dataId);
                if (respone1) {
                    setGetChapterId(respone1.chapters);
                    console.log("chaoterID", GetChapterId)

                    let newArray = respone1.chapters.map((item: { _id: any; chap: any; }) => {
                        return { key: item._id, value: 'Chap ' + item.chap }
                    })
                    setData(newArray)
                } else {
                    ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
                }
            } catch (error) {
                console.log('errrrrrrror', error);
            } finally {
                setLoading(false); // Kết thúc khi dữ liệu đã được tải hoặc xảy ra lỗi
            }
        };

        getAllManga();

        return () => { };
    }, [GetChapDetailId]);

    useEffect(() => {
        if (GetChapterId.length > 0 && GetChapDetailId._id) {
          const currentIndex = GetChapterId.findIndex(chap => chap._id === GetChapDetailId._id);
          setCurrentChapIndex(currentIndex);
        }
      }, [GetChapDetailId, GetChapterId, currentChapIndex]);

    const [currentChapIndex, setCurrentChapIndex] = useState(GetChapterId.findIndex(chap => chap._id == GetChapDetailId._id));
    const currentChapter = GetChapterId.length > 0 ? GetChapterId[currentChapIndex] : null;
    // console.log('current chap', currentChapter)



    const moveToNextChapter = () => {
        const nextChapterIndex = currentChapIndex + 1;
        if (nextChapterIndex < GetChapterId.length) {
            setLoading(true)
            setCurrentChapIndex(nextChapterIndex);
            navigation.navigate('DetailChap', { _id: GetChapterId[nextChapterIndex]._id });
        } else {
            console.log("Bạn đã đọc hết truyện.")
        }
    };

    const prevToNextChapter = () => {
        const nextChapterIndex = currentChapIndex - 1;
        if (nextChapterIndex < GetChapterId.length) {
            setLoading(true)
            setCurrentChapIndex(nextChapterIndex);
            navigation.navigate('DetailChap', { _id: GetChapterId[nextChapterIndex]._id });
        } else {
            console.log("Bạn đã đọc hết truyện.")
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                // Hiển thị loading component trong khi dữ liệu đang tải
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.viewHead}>
                        <Ionicons
                            name="arrow-back-ios"
                            size={20}
                            color={'black'}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.txtNameManga}>{GetChapDetailId.title} - {GetChapDetailId.chap}</Text>
                        <View />
                    </View>
                    <View style={styles.viewUpDay}>
                        <Text style={styles.txtUpDay}>{GetChapDetailId.createdAt}</Text>
                    </View>
                    <View style={styles.viewErr}>
                        <TouchableOpacity style={styles.btnErr}>
                            <Ionicons
                                style={{ marginStart: 4, marginEnd: 4 }}
                                name="error-outline"
                                size={24}
                                color={'white'}
                            />
                            <Text style={styles.txtErr}>Báo lỗi chương</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewControll}>
                        <TouchableOpacity style={styles.btnControll} onPress={prevToNextChapter}>
                            <Ionicons
                                name="arrow-back-ios"
                                size={20}
                                color={'white'}
                            />
                            <Text style={styles.txtControll}>Chương trước</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnControll} onPress={moveToNextChapter}>
                            <Text style={styles.txtControll}>Chương sau</Text>
                            <Ionicons
                                name="arrow-forward-ios"
                                size={20}
                                color={'white'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnControllMenu}>
                            <Ionicons
                                name="menu"
                                size={35}
                                color={'#FF97A3'}
                            />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        style={{ flex: 1, marginBottom: 50 }}
                        data={chapImage}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ overflow: 'hidden', }}>
                                {item && (
                                    <Image
                                        style={styles.image}
                                        resizeMode="stretch"
                                        source={{ uri: item }}
                                        onError={(error) => console.error('image load err', error)}
                                    />
                                )}
                            </View>
                        )}
                        ListEmptyComponent={() => (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Không có hình ảnh để hiển thị</Text>
                            </View>
                        )} />

                </ScrollView>
            )}
            <View style={styles.viewBottomBtn}>
                <TouchableOpacity style={styles.btnBottomBtn}>
                    <Ionicons
                        name="arrow-circle-left"
                        size={35}
                        color={'white'}
                    />
                </TouchableOpacity>
                <View style={{ width: 'auto', backgroundColor: 'white', borderRadius: 10 }}>
                    <SelectList
                        dropdownStyles={styles.listChap}
                        setSelected={setChapter}
                        data={Data}
                        search={false}
                        onSelect={() => (Chapter)}
                        boxStyles={{ width: 100, height: 35, justifyContent: 'center', alignItems: 'center' }}
                        inputStyles={{ height: 25, justifyContent: 'center', alignItems: 'center' }}
                        fontFamily={FONT_FAMILY.quicksand_regular}
                    />
                </View>

                <TouchableOpacity style={styles.btnBottomBtn}>
                    <Ionicons
                        name="arrow-circle-right"
                        size={35}
                        color={'white'}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ChapterDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor: 'white',
    },
    viewHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    txtNameManga: {
        color: 'black',
        fontSize: 20,
        fontFamily: FONT_FAMILY.quicksand_semibold
    },
    viewUpDay: {
        marginLeft: 20,
        padding: 8
    },
    txtUpDay: {
        fontSize: 15,
        fontFamily: FONT_FAMILY.quicksand_regular
    },
    viewErr: {
        width: 155,
        height: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#F0AD4E',
        borderRadius: 12,
        padding: 5,
        margin: 10,
    },
    btnErr: {
        flexDirection: 'row',
    },
    txtErr: {
        color: 'white',
        textAlign: 'center'
    },
    viewControll: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnControll: {
        flexDirection: 'row',
        backgroundColor: '#FF97A3',
        borderRadius: 9,
        width: 130,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtControll: {
        color: 'white'
    },
    btnControllMenu: {

    },
    viewFlat: {
        marginTop: 15,
    },
    viewBottomBtn: {
        width: 350,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        backgroundColor: '#FF97A3',
        marginStart: 20,
        borderRadius: 50
    },
    btnBottomBtn: {
        zIndex: 1,
        marginStart: 15,
        marginEnd: 15
    },
    listChap: {
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        width: 400,
        height: 400,
        marginTop: 5
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
