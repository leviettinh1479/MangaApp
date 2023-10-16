import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


interface Item {
    image: string;
    nameManga: string;
    nameAuthor: string;
    descrption: string;
    view: number;
}

const ItemProductList = ({image, nameManga, nameAuthor,descrption, view}:Item) => {
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
            <View style={styles.viewNameAuthor}>
                <Text numberOfLines={1} style={styles.txtdescrption}>{descrption}</Text>
            </View>
            <View style={styles.viewView}>
                <Image style={styles.imageview} resizeMode='contain' source={require('../../assets/images/ViewImage.png')}/>
                <Text numberOfLines={1} style={styles.txtView}>{view}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default ItemProductList

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 379,
        marginLeft:5,
        marginVertical:5,
        marginHorizontal:5,
        paddingBottom:8
    },
    viewImage: {
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 175,
        height: 254
    },
    viewNameManga: {
        justifyContent: 'center',
        alignContent:'center'
    },
    txtNameManga: {
        color: '#000000',
        fontSize: 16,
        fontWeight:'400',
        fontFamily: 'Quicksand-Regular',
    },
    viewNameAuthor: {
        justifyContent: 'center',
        alignContent:'center',
        marginTop: 2
    },
    txtNameAuthor: {
        color: '#000000',
        fontSize: 14,
        fontWeight:'400',
        fontFamily: 'Quicksand-Regular',
    },
    txtdescrption: {
        color: '#000000',
        fontSize: 12,
        fontWeight:'400',
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
    descrption: string;
    view: number;
}

const data_ItemExample: ItemExample[] = [{
    "id": "1",
    "image": "https://cdn-icons-png.flaticon.com/128/740/740922.png",
    "nameManga": "Red Apple",
    "nameAuthor": "abc 15",
    "descrption":"A story about a guy who was very good until the very end when every",
    "view": 3975
  }, {
    "id": "2",
    "image": "https://cdn-icons-png.flaticon.com/128/2909/2909808.png",
    "nameManga": "Apple Pie",
    "nameAuthor": "Name Less",
    "descrption":"A story about a guy who was very good until the very end when every",
    "view": 500
  }, {
    "id": "3",
    "image": "https://cdn-icons-png.flaticon.com/128/2079/2079291.png",
    "nameManga": "Apple Pen",
    "nameAuthor": "Skibidi",
    "descrption":"A story about a guy who was very good until the very end when every",
    "view": 823
  }]