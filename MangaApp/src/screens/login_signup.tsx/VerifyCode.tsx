import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Icon_1 from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_FAMILY } from '../../theme/theme';


interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const VerifyCode = ({ navigation}:ScreenAProps) => {
  return (
    <ImageBackground source={require('../../assets/images/Backgound_1.jpg')} style={styles.Container}>
    <View style={styles.View_Back}>
        <TouchableOpacity style={styles.View_Back1} onPress={() => navigation.navigate('LoginEmail')}>
            <View>
                <Icon_1 name="chevron-back" size={24} color="white" />
            </View>
            <View >
                <Text style={styles.Text_Back}>Back to Log in</Text>
            </View>
        </TouchableOpacity>
    </View>
    <View style={styles.View_VerifyCode}>
        <Text style={styles.Text_VerifyCode}>Verify Code</Text>
    </View>
    <View style={styles.View_MXT}>
        <Text style={styles.Text_MXT}>An authentication code has been sent to your email.</Text>
        <TextInput placeholder='Enter Code' placeholderTextColor='black' style={styles.TextInput_MXT}></TextInput>
        <TouchableOpacity style={styles.View_Verify}>
            <Text style={styles.Text_Verify}>Verify</Text>
        </TouchableOpacity>
        <View style={styles.View_SendTo}>
            <Text style={styles.Text_SendTo}>Don’t receive a code? </Text>
            <TouchableOpacity style={styles.View_Back1}>
                <Text style={styles.Text_Resend}>Resend</Text>
                <Icon_1 style={styles.Icon_Resend} name="reload" size={14} color="white" />
            </TouchableOpacity>
        </View>
    </View>
</ImageBackground>
  )
}

export default VerifyCode

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FF97A3'
    },
    View_Back: {
        padding: 16,
    },
    View_Back1: {
        flexDirection: 'row',
    },
    Text_Back: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        fontSize: 16,
        color: 'white',
        marginLeft: 8,
    },
    View_VerifyCode: {
        paddingTop: 150,
        paddingLeft: 30,
    },
    Text_VerifyCode: {
        fontSize: 32,
        fontFamily: FONT_FAMILY.quicksand_bold,
        color: COLORS.White,
    },
    View_MXT: {
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 20,
        padding: 20,
        margin: 20,
    },
    Text_MXT: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        color: COLORS.White,
        fontSize: 14,
    },
    TextInput_MXT: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        backgroundColor: 'white',
        borderRadius: 10,
        color: COLORS.DarkGrey,
        fontSize: 14,
        marginTop: 16,
        padding: 12,
    },
    View_Verify: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        marginTop: 16,
    },
    Text_Verify: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        padding: 16,
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',
    },
    View_SendTo: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
    },
    Text_SendTo: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        fontSize: 14,
        color: 'white',
    },
    Text_Resend: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
    },
    Icon_Resend: {
        color: 'white',
        padding: 3,
    },
})