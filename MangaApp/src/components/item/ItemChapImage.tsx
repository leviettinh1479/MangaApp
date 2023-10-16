import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface ItemChap {
    image: string;
}

const ItemChapImage: React.FC<ItemChap> = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: image}}
            />
        </View>
    );
};

export default ItemChapImage;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    image: {
        width: '100%',
    },
});
