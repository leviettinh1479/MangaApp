import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


interface Item {
    image: string;
    nameManga: string;
    nameAuthor: string;
    view: number;
    onpress?: () => void
}

const ItemManga: React.FC<Item> = ({
    image,
    nameManga,
    nameAuthor,
    view,
    onpress
}) => {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} resizeMode='contain' source={{uri: image}} />
                </View>
                <View style={styles.viewNameManga}>
                    <Text numberOfLines={1} style={styles.txtNameManga}>{nameManga}</Text>
                </View>
                <View style={styles.viewNameAuthor}>
                    <Text numberOfLines={1} style={styles.txtNameAuthor}>{nameAuthor}</Text>
                </View>
                <View style={styles.viewView}>
                    <Image style={styles.imageview} resizeMode='contain' source={require('../../assets/images/ViewImage.png')} />
                    <Text numberOfLines={1} style={styles.txtView}>{view}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}


export default ItemManga

const styles = StyleSheet.create({
    container: {
        width: 128,
        height: 'auto',
        borderRadius: 10
        
    },
    viewImage: {
        
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
        
    },
    image: {
        width: 128,
        height: 184,
    },
    viewNameManga: {
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 3
    },
    txtNameManga: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Quicksand-Regular',
    },
    viewNameAuthor: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 2,
        marginHorizontal: 3
    },
    txtNameAuthor: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Quicksand-Regular',
    },
    viewView: {
        flexDirection: 'row',
        marginTop: 8,
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3
    },
    imageview: {
        width: 20,
        height: 20
    },
    txtView: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Quicksand-Regular',
        marginLeft: 4
    }
})


