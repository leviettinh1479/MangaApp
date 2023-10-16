import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { FONT_FAMILY } from '../theme/theme';
import ItemChapImage from '../components/item/ItemChapImage';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChapterDetailScreen = () => {

    const [Chapter, setChapter] = React.useState("");

    const dataa = [
        { key: '1', value: 'Chap 1' },
        { key: '2', value: 'Chap 2' },
        { key: '3', value: 'Chap 3' },
        { key: '4', value: 'Chap 4' },
        { key: '5', value: 'Chap 5' }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewHead}>
                    <Ionicons
                        name="arrow-back-ios"
                        size={20}
                        color={'black'}
                    />
                    <Text style={styles.txtNameManga}>Đại Chiến người khổng lồ - Chapter 139</Text>
                </View>
                <View style={styles.viewUpDay}>
                    <Text style={styles.txtUpDay}>Cập nhật ngày abcd</Text>
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
                    <TouchableOpacity style={styles.btnControll}>
                        <Ionicons
                            name="arrow-back-ios"
                            size={20}
                            color={'white'}
                        />
                        <Text style={styles.txtControll}>Chương trước</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnControll}>
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
                <View style={styles.viewFlat}>
                    <FlatList
                    style={{width: '98%', alignSelf: 'center'}}
                    data={dataaa}
                    scrollEnabled={false}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => <ItemChapImage image={item.image}/>}/>
                </View>
            </ScrollView>
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
                        setSelected={(chap: any) => setChapter(chap)}
                        data={dataa}
                        search={false}
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
        marginStart: 5,
        marginEnd: 5,
        paddingTop: 5
    },
    viewHead: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    }
})

type ItemChap = {
    id: string,
    image: string
}

const dataaa:ItemChap[]=[{
    id: "1", image: "https://digiart.academy/upload/images/nghe-thuat-dien-anh-1.jpg",
},{
    id: "2", image: "https://digiart.academy/upload/images/nghe-thuat-dien-anh-1.jpg",
},
]