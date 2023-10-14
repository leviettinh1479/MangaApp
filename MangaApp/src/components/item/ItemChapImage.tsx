import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface Item {
    image: string;
}

const ItemChapImage: React.FC<Item> = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{uri: image}}
            />
        </View>
    );
};

export default ItemChapImage;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'

    },
    image: {
        width: '100%',
        height: '100%'
    },
});
