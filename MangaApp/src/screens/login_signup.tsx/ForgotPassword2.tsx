import { StyleSheet, Text, Animated, View, TouchableOpacity, TextInput, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Icon_1 from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_FAMILY } from '../../theme/theme';


const ForgotPassword2 = () => {
  return (
    <ImageBackground source={require('../assets/images/Backgound_1.jpg')} style={styles.Container}>
            <View style={styles.View_Back}>
                <TouchableOpacity style={styles.View_Back1}>
                    <View>
                        <Icon_1 name="chevron-back" size={24} color="white" />
                    </View>
                    <View >
                        <Text style={styles.Text_Back}>Back to Log in</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.View_Header}>
                <View style={styles.View_RecoverPassword}>
                    <Text style={styles.Text_RecoverPassword}>Recover Password</Text>
                </View>
                <View style={styles.View_Email}>
                    <Text style={styles.Text_Email}>Forgot your password? Don’t worry, enter your email to reset your current password.</Text>
                    <TextInput placeholder='Email' placeholderTextColor='black' style={styles.TextInput_Email}></TextInput>
                    <TouchableOpacity style={styles.View_Submit}>
                        <Text style={styles.Text_Submit}>Sumbit</Text>
                    </TouchableOpacity>
                    <View style={styles.View_Account}>
                        <Text style={styles.Text_NotAccount}>Don’t have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.Text_DangKy}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
  )
}

export default ForgotPassword2

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FF97A3',
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
    View_Header: {
        justifyContent: 'center',
        // alignItems: 'center',
    },
    View_RecoverPassword: {
        marginBottom: 14,
        paddingTop: 150,
        paddingLeft: 30,
    },
    Text_RecoverPassword: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'Quicksand-Bold',
    },
    View_Email: {
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 24,
        margin: 16,
    },
    Text_Email: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        color: 'white',
        fontSize: 14,
    },
    TextInput_Email: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        backgroundColor: 'white',
        borderRadius: 10,
        color: COLORS.DarkGrey,
        fontSize: 14,
        marginTop: 16,
        padding: 12,
    },
    View_Submit: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        marginTop: 16,
    },
    Text_Submit: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',
    },
    View_Account: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
    },
    Text_NotAccount: {
        color: 'white',
        fontFamily: FONT_FAMILY.quicksand_regular,
    },
    Text_DangKy: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
    },
})