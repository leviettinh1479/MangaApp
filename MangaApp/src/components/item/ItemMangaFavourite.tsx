import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { ICON_VIEW } from '../../assets/images';

const WIDTH = Dimensions.get('window').width;

interface Item {
    image: string;
    nameManga: string;
    nameAuthor: string;
    view: number;
    description: string;
    onpress?: () => void
}

const ItemManga: React.FC<Item> = ({
    image,
    nameManga,
    nameAuthor,
    view,
    description,
    onpress
}) => {
  
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} resizeMode='cover' source={{ uri: image }} />
                </View>

                <View style={styles.viewNameManga}>
                    <Text numberOfLines={1} style={styles.txtNameManga}>{nameManga}</Text>
                </View>

                <View style={styles.viewNameAuthor}>
                    <Text numberOfLines={1} style={styles.txtNameAuthor}>{nameAuthor}</Text>
                </View>

                <View style={styles.viewDescribe}>
                    <Text numberOfLines={1} style={styles.txtDescribe}>{description}</Text>
                </View>

                <View style={styles.viewView}>
                    <Image style={styles.imageview} resizeMode='contain' source={ICON_VIEW} />
                    <Text numberOfLines={1} style={styles.txtView}>{view}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}


export default ItemManga

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH / 2 - 20,
        marginVertical: 8,
        marginRight:5
    },
    viewImage: {
    },
    image: {
        width: WIDTH / 2 - 20,
        height: 250,
    },
    viewNameManga: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 16
    },
    txtNameManga: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Quicksand-SemiBold',
    },
    viewNameAuthor: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 4,
    },
    txtNameAuthor: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Quicksand-Regular',
    },
    viewDescribe: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 8
    },
    txtDescribe: {
        color: '#000000',
        fontSize: 11,
        fontFamily: 'Quicksand-Regular',
    },
    viewView: {
        flexDirection: 'row',
        marginTop: 8,
        alignContent: 'center',
        alignItems: 'center',
    },
    imageview: {
        width: 18,
        height: 18
    },
    txtView: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'Quicksand-Regular',
        marginLeft: 4
    }
})


