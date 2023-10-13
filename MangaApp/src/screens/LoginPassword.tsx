import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon_1 from 'react-native-vector-icons/Feather';
import Icon_2 from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_FAMILY } from '../theme/theme';

const LoginPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <ImageBackground source={require('../assets/images/Backgound_1.jpg')} style={styles.Container}>
            <View style={styles.Container1}>
                <View style={styles.View_DangNhap}>
                    <Text style={styles.Text_DangNhap}>Log in</Text>
                </View>
                <View style={styles.View_Container}>
                    <View style={styles.View_ThongTin}>
                        <View>
                            <Image style={styles.Image_avt} source={require('../assets/images/Ellipse.png')} />
                        </View>
                        <View>
                            <View>
                                <Text style={styles.Text_Name}>John Doe</Text>
                                <Text style={styles.Text_Email}>john.doe@example.com</Text>
                            </View>
                        </View>
                        <View>
                            <Icon_2 name="checkmark-circle-outline" size={24} color="white" />
                        </View>
                    </View>
                    {/* <Text style={styles.Text_Detail}>Forgot your password? Don’t worry, enter your email to reset your current password.</Text> */}
                    <View style={styles.View_Password}>
                        <TextInput placeholder='Password' placeholderTextColor='black' style={styles.Text_Password} secureTextEntry={!showPassword}
                            value={password} onChangeText={setPassword}></TextInput>
                        <TouchableOpacity style={styles.Icon_Password} onPress={togglePasswordVisibility}>
                            <Icon_1 name={showPassword ? 'eye' : 'eye-off'} size={22} color={COLORS.GRAY_BG} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.View_TiepTuc}>
                        <Text style={styles.TextTiepTuc}>Continue</Text>
                    </TouchableOpacity>
                    <View style={styles.ViewForgot}>
                        <TouchableOpacity>
                            <Text style={styles.Text_Forgot}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default LoginPassword

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FF97A3',
    },
    View_DangNhap: {
        paddingTop: 170,
        paddingLeft: 30,
    },
    Text_DangNhap: {
        fontSize: 32,
        fontFamily: FONT_FAMILY.quicksand_bold,
        color: 'white',
    },
    View_Container: {
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 20,
        padding: 20,
        margin: 20,
    },
    Text_Detail: {
        fontFamily: FONT_FAMILY.quicksand_medium,
        color: COLORS.White,
        fontSize: 14,
        padding: 10
    },
    Text_Password: {
        fontSize: 16,
        fontFamily: FONT_FAMILY.quicksand_regular,
        color: COLORS.Grey,
        paddingHorizontal: 16,
    },
    Icon_Password: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        paddingRight: 10,
        paddingTop: 14,
    },
    View_TiepTuc: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        marginTop: 16,
    },
    TextTiepTuc: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        padding: 16,
        textAlign: 'center',
        fontFamily: FONT_FAMILY.quicksand_bold,
    },
    ViewForgot: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
    },
    View_Password: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: COLORS.White,
        fontSize: 14,
        marginTop: 16,
        padding: 3,
        justifyContent: 'space-between'
    },
    Text_Forgot: {
        fontFamily: FONT_FAMILY.quicksand_bold,
        fontSize: 14,
        color: 'white',
    },
    View_ThongTin: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Image_avt: {
        width: 70,
        height: 70,
    },
    Text_Name: {
        fontSize: 16,
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_bold,
    },
    Text_Email: {
        fontSize: 14,
        fontFamily: FONT_FAMILY.quicksand_medium,
        color: 'white',
    },
    Container1: {
        justifyContent: 'center',
    }
})