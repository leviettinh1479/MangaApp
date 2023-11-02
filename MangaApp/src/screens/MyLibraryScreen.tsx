import { Pressable, StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import ItemManga from '../components/item/ItemMangaFavourite'
import { data_ItemExample } from '../components/item/DataFavourite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONT_FAMILY } from '../theme/theme'
import { data_Inprogress } from '../components/item/DataInProgress'
import { data_Complete } from '../components/item/DataComplete'

interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
}

const MyLibraryScreen: React.FC = (navigation: any) => {
    const [activeTab, setActiveTab] = useState('saved') // Mặc định tab 'saved' được chọn

    const handleTabPress = (tab: string) => {
        setActiveTab(tab)
    }

    const renderTabButton = (tab: string, icon: string, text: string) => {
        const isActive = activeTab === tab
        // isActive = true nếu tab được chọn, ngược lại isActive = false

        return (
            <Pressable
                style={[styles.btn, { backgroundColor: isActive ? COLORS.MainPink : COLORS.White, borderColor: COLORS.MainPink }]}
                onPress={() => handleTabPress(tab)}
            >
                <Text><Icon name={icon} size={18} color={COLORS.Black}></Icon> </Text>
                <Text style={[styles.text, { color: COLORS.Black }]}>{text}</Text>
            </Pressable>
        )
    }

    const renderFlatList = () => {
        switch (activeTab) {
            case 'saved':
                return (
                    <FlatList
                        style={styles.list}
                        data={data_ItemExample}
                        keyExtractor={(item) => item.id}
                        refreshing={true}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        renderItem={({ item }) => (
                            <ItemManga
                                onpress={() => navigation.navigate("Detail")}
                                image={item.image}
                                nameManga={item.nameManga}
                                nameAuthor={item.nameAuthor}
                                description={item.description}
                                view={item.view}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )
            case 'inProgress':
                // Return FlatList cho tab 'inProgress' ở đây nha :D
                // Ví dụ:
                return (
                    <FlatList
                        style={styles.list}
                        data={data_Inprogress}
                        keyExtractor={(item) => item.id}
                        refreshing={true}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        renderItem={({ item }) => (
                            <ItemManga
                                image={item.image}
                                nameManga={item.nameManga}
                                nameAuthor={item.nameAuthor}
                                description={item.description}
                                view={item.view}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )
            case 'complete':
                // Return FlatList cho tab 'complete' ở đây nha :D
                // Ví dụ:
                return (
                    <FlatList
                        style={styles.list}
                        data={data_Complete}
                        keyExtractor={(item) => item.id}
                        refreshing={true}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        renderItem={({ item }) => (
                            <ItemManga
                                image={item.image}
                                nameManga={item.nameManga}
                                nameAuthor={item.nameAuthor}
                                description={item.description}
                                view={item.view}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )
            default:
                return null
            // Return null nếu không có tab nào được chọn
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Library</Text>
            <View style={styles.outlineButton}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'flex-start' }}
                >
                    {renderTabButton('saved', 'bookmark-outline', 'Saved Manga')}
                    {renderTabButton('inProgress', 'headphones', 'In Progress')}
                    {renderTabButton('complete', 'check-circle-outline', 'Complete')}
                </ScrollView>
            </View>
            {renderFlatList()}
        </View>
    )
}

export default MyLibraryScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        fontFamily: 'Quicksand-SemiBold',
        marginTop: 7,
        fontSize: 24,
        color: COLORS.Black,
    },
    outlineButton: {
        height: 'auto',
        marginTop: 24,
    },
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
    text: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 14,
        marginStart: 4,
    },
    list: {
        marginTop: 24
    },
    row: {
        justifyContent: 'space-between',
    },
})