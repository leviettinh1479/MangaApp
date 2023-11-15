import { Dimensions, Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BG_GENRE, ICON_CHECK, ICON_EYE, ICON_EYECANCEL } from '../../assets/images';
import { COLORS, FONT_FAMILY } from '../../theme/theme';

interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const ForgotPassword_1 = ({ navigation}:ScreenAProps) => {
    const [valuePassword, setValuePassword] = useState("");
    const [valuePasswordNew, setValuePasswordNew] = useState("");

    const handleInputChangePassword = (textPass: string) => {
        setValuePassword(textPass);
    }
    const handleInputChangePasswordNew = (textPassNew: string) => {
        setValuePasswordNew(textPassNew);
    }
    const [isIconActive, setIsIconActive] = useState(false);
    const [isIconActive1, setIsIconActive1] = useState(false);

    const handleIconPress = () => {
        setIsIconActive(!isIconActive);
    };
    const handleIconPress1 = () => {
        setIsIconActive1(!isIconActive1);
    };
    const goSetPassword = () => {
        console.log('Password:', valuePassword);
        console.log('PasswordNew:', valuePasswordNew);
        navigation.navigate('ForgotPassword2')
    }
    return (
        <ImageBackground source={BG_GENRE} style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={'transparent'}
                translucent
            />
            <View style={styles.container1}>
                <Text style={styles.title}>
                    Set Password
                </Text>
                <View style={styles.backdrop}>
                    <View style={{ width: '100%' }}>
                        <Image
                            source={ICON_CHECK}
                            style={{ width: 64, height: 64, alignSelf: 'center' }}
                        />
                        <Text style={styles.titlemini}>
                            Code verified
                        </Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <>
                            <TextInput
                                style={styles.styleTextInput}
                                placeholder={'Enter new password'}
                                placeholderTextColor={COLORS.GRAY_4}
                                onChangeText={(valuePassword) => handleInputChangePassword(valuePassword)}
                                value={valuePassword}
                                secureTextEntry={!isIconActive} // khi isIconActive = true hiện thị password, ngược lại hiện thị text
                            />
                            <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                                <Image source={isIconActive ? ICON_EYE : ICON_EYECANCEL} />
                                {/* khi isIconActive = true hiện thị icon mở mắt, ngược lại hiện thị icon đóng mắt */}
                            </TouchableOpacity>
                        </>
                        <>
                            <TextInput
                                style={[styles.styleTextInput, { marginTop: 16, marginBottom: 6 }]}
                                placeholder={'Re-type new password'}
                                placeholderTextColor={COLORS.Black}
                                onChangeText={(valuePasswordNew) => handleInputChangePasswordNew(valuePasswordNew)}
                                value={valuePasswordNew}
                                secureTextEntry={!isIconActive1} // khi isIconActive = true hiện thị password, ngược lại hiện thị text
                            />
                            <TouchableOpacity onPress={handleIconPress1} style={styles.iconContainer1}>
                                <Image source={isIconActive1 ? ICON_EYE : ICON_EYECANCEL} />
                                {/* khi isIconActive = true hiện thị icon mở mắt, ngược lại hiện thị icon đóng mắt */}
                            </TouchableOpacity>
                        </>
                        <Text
                            style={[
                                styles.titlemini,
                                {
                                    color: '#A6A6A6',
                                    textAlign: 'left',
                                    fontSize: 12,
                                    marginBottom: 16
                                }]
                            }>
                            At-least 8 characters
                        </Text>
                        <Pressable
                            onPress={goSetPassword}
                            style={styles.container3}>
                            <Text style={styles.styleText3}>
                                Set Password
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default ForgotPassword_1

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: COLORS.WHITE_TEXT,
        fontFamily: FONT_FAMILY.quicksand_bold,
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - 180,
        left: 29,
    },
    backdrop: {
        width: '94%',
        display: 'flex',
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 12,
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - 120,
        left: 13,
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
    },
    titlemini: {
        letterSpacing: 0.5,
        fontSize: 16,
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_medium,
        textAlign: 'center',
    },
    styleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        marginHorizontal: 6,
        marginBottom: 8,
    },
    styleView1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        width: '100%',
    },
    iconContainer: {
        position: 'absolute',
        right: 16,
        top: 12,
        bottom: 0,
    },
    iconContainer1: {
        position: 'absolute',
        right: 16,
        top: 76,
        bottom: 0,
    },
    styleTextInput: {
        color: COLORS.Black,
        display: 'flex',
        width: '100%',
        height: 48,
        paddingStart: 16,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        gap: 10,
        flexShrink: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.WHITE_TEXT,
        backgroundColor: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_medium,
    },
    container3: {
        height: 48,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.White,
    },
    styleText3: {
        fontSize: 14,
        color: COLORS.Black,
        fontFamily: FONT_FAMILY.quicksand_bold,
        textAlign: 'center',
    },
})