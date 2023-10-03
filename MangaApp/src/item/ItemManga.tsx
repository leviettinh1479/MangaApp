import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

type ItemProps = {
    image: string;
    nameManga: string;
    nameAuthor: string;
    view: number;
}

const ItemManga = ({image, nameManga, nameAuthor, view}:ItemProps) => {
  return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.viewImage}>
                <Image style={styles.image} resizeMode='contain' source={{uri: image}}/>
            </View>
            <View style={styles.viewNameManga}>
                <Text numberOfLines={1} style={styles.txtNameManga}>{nameManga}</Text>
            </View>
            <View style={styles.viewNameAuthor}>
                <Text numberOfLines={1} style={styles.txtNameAuthor}>{nameAuthor}</Text>
            </View>
            <View style={styles.viewView}>
                <Image style={styles.imageview} resizeMode='contain' source={require('../assets/images/ViewImage.png')}/>
                <Text numberOfLines={1} style={styles.txtView}>{view}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default ItemManga

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 245,
        borderWidth: 1,
        borderRadius: 10
    },
    viewImage: {
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 160
    },
    viewNameManga: {
        justifyContent: 'center',
        alignContent:'center'
    },
    txtNameManga: {
        color: '#000000',
        fontSize: 17,
        fontFamily: 'Quicksand-Regular',
    },
    viewNameAuthor: {
        justifyContent: 'center',
        alignContent:'center',
        marginTop: 2
    },
    txtNameAuthor: {
        color: '#000000',
        fontSize: 13,
        fontFamily: 'Quicksand-Regular',
    },
    viewView: {
        flexDirection: 'row',
        marginTop: 8,
        alignContent: 'center',
        alignItems: 'center'
    },
    imageview: {
        width: 20,
        height: 20
    }, 
    txtView: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'Quicksand-Regular',
        marginLeft: 4
    }
})    


type ItemExample ={
    id: string;
    image: string;
    nameManga: string;
    nameAuthor: string;
    view: number;
}

const data_ItemExample: ItemExample[] = [{
    "id": "1",
    "image": "https://cdn-icons-png.flaticon.com/128/740/740922.png",
    "nameManga": "Red Apple",
    "nameAuthor": "abc 15",
    "view": 3975
  }, {
    "id": "2",
    "image": "https://cdn-icons-png.flaticon.com/128/2909/2909808.png",
    "nameManga": "Apple Pie",
    "nameAuthor": "Name Less",
    "view": 500
  }, {
    "id": "3",
    "image": "https://cdn-icons-png.flaticon.com/128/2079/2079291.png",
    "nameManga": "Apple Pen",
    "nameAuthor": "Skibidi",
    "view": 823
  }]