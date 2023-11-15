import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface ItemChap {
    image: string;
}

const ItemChapImage: React.FC<ItemChap> = ({ image }) => {
    return (
        <View>
            <Image
                style={styles.image}
                resizeMode="stretch"
                source={{uri: image}}
            />
        
        </View>
            
    );
};

export default ItemChapImage;

const styles = StyleSheet.create({
    image: {
        width:400,
        height:500,
        marginTop: 10
    },
});