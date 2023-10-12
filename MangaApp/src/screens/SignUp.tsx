import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BG_GENRE, ICON_EYE, ICON_EYECANCEL } from '../assets/images'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../theme/theme'

const SignUp = () => {
    const [valueName, setValueName] = useState("");
    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");

    const handleInputChangeName = (text: string) => {
        setValueName(text);
    }
    const handleInputChangeEmail = (textEmail: string) => {
        setValueEmail(textEmail);
    }
    const handleInputChangePassword = (textPass: string) => {
        setValuePassword(textPass);
    }

    const bold1 = "Terms of Service";
    const bold2 = "Privacy Policy";
    const text = "By selecting Create Account below, I agree to\nTerms of Service & Privacy Policy";
    const boldTexts = [bold1, bold2];
    const regex = new RegExp(`(${boldTexts.join('|')})`, 'gi');

    const getHighlightedText = (text: string, boldTexts: any) => {
        const parts = text.split(regex);
        return parts.map((part, index) => {
            const isBold = boldTexts.includes(part);
            return isBold ? (
                <Text key={index} style={{ fontWeight: 'bold' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };

    const [isIconActive, setIsIconActive] = useState(false);

    const handleIconPress = () => {
        setIsIconActive(!isIconActive);
    };
    const goCreate = () => {
        console.log('Name:', valueName);
        console.log('Email:', valueEmail);
        console.log('Password:', valuePassword);
    }
    const goLogin = () => {
        console.log('goLogin')
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
                    Sign up
                </Text>
                <View style={styles.backdrop}>
                    <Text style={styles.titlemini}>
                        Looks like you don’t have an account.{'\n'}Let's create a new account for you.
                    </Text>
                    <View style={{ width: '100%' }}>
                        <View style={styles.viewStyle}>
                            <TextInput
                                style={styles.styleTextInput}
                                placeholder={'Name'}
                                placeholderTextColor={COLORS.Grey}
                                onChangeText={(valueName) => handleInputChangeName(valueName)}
                                value={valueName}
                            />
                            <TextInput
                                style={styles.styleTextInput}
                                placeholder={'Email'}
                                placeholderTextColor={COLORS.Grey}
                                onChangeText={(valueEmail) => handleInputChangeEmail(valueEmail)}
                                value={valueEmail}
                            />
                            <>
                                <TextInput
                                    style={styles.styleTextInput}
                                    placeholder={'Password'}
                                    placeholderTextColor={COLORS.Grey}
                                    onChangeText={(valuePassword) => handleInputChangePassword(valuePassword)}
                                    value={valuePassword}
                                    secureTextEntry={!isIconActive} // khi isIconActive = true hiện thị password, ngược lại hiện thị text
                                />
                                <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                                    <Image source={isIconActive ? ICON_EYE : ICON_EYECANCEL} />
                                    {/* khi isIconActive = true hiện thị icon mở mắt, ngược lại hiện thị icon đóng mắt */}
                                </TouchableOpacity>
                            </>
                        </View>
                        <Text style={[styles.titlemini, { marginBottom: 16 }]}>
                            {getHighlightedText(text, boldTexts)}
                        </Text>
                        <Pressable
                            onPress={goCreate}
                            style={styles.container3}>
                            <Text style={styles.styleText3}>
                                Create Account
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.styleView1}>
                        <Text style={styles.titlemini}>
                            Already have an account?
                        </Text>
                        <Text style={[styles.titlemini, { fontWeight: 'bold' }]} onPress={goLogin}>
                            Login
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default SignUp

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
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_bold,
        position: 'absolute',
        top: 90,
        left: 13,
    },
    backdrop: {
        width: '94%',
        display: 'flex',
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 12,
        position: 'absolute',
        top: 170,
        left: 13,
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
    },
    titlemini: {
        letterSpacing: 0.5,
        fontSize: 14,
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_regular,
        alignSelf: 'stretch'
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

    viewStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },
    iconContainer: {
        position: 'absolute',
        right: 16,
        top: 128,
        bottom: 0,
    },
    styleTextInput: {
        fontFamily: FONT_FAMILY.quicksand_regular,
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
        backgroundColor: COLORS.WHITE_TEXT,
    },
})