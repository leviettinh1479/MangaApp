import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BlurView } from '@react-native-community/blur';
import { BG_GENRE, ICON_CHECK, ICON_PLUSCIRCLE } from '../../assets/images';
import { COLORS, FONT_FAMILY } from '../../theme/theme';
export interface GenreProps {
    navigation: any;
    onPress?: () => void;
}

const Genre: React.FC<GenreProps> = (props) => {
    const { onPress } = props;
    const [txtSelect, setTxtSelect] = useState('#ffffff');
    const [isCheck, setIsCheck] = useState(false);
    const [isCheck1, setIsCheck1] = useState(false);
    const [isCheck2, setIsCheck2] = useState(false);
    const [isCheck3, setIsCheck3] = useState(false);
    const [isCheck4, setIsCheck4] = useState(false);
    const [isCheck5, setIsCheck5] = useState(false);
    const [isCheck6, setIsCheck6] = useState(false);
    const [isCheck7, setIsCheck7] = useState(false);
    const [isCheck8, setIsCheck8] = useState(false);
    const [isCheck9, setIsCheck9] = useState(false);
    const [isCheck10, setIsCheck10] = useState(false);
    const [isCheck11, setIsCheck11] = useState(false);
    const [isCheck12, setIsCheck12] = useState(false);
    const [isCheck13, setIsCheck13] = useState(false);
    const [isCheck14, setIsCheck14] = useState(false);
    const [isCheck15, setIsCheck15] = useState(false);
    const [isCheck16, setIsCheck16] = useState(false);

    const onPressX = () => {
        if (txtSelect == '#ffffff') {
            setTxtSelect('#0000000');
        } else {
            setTxtSelect('#ffffff');
        };
    };

    const handlePress = () => {
        setIsCheck((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Fiction', 'isCheck:', isCheck);
    };
    const handlePress1 = () => {
        setIsCheck1((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Novel', 'isCheck:', isCheck1);
    }
    const handlePress2 = () => {
        setIsCheck2((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Narrative', 'isCheck:', isCheck2);
    }
    const handlePress3 = () => {
        setIsCheck3((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Historical Fiction', 'isCheck:', isCheck3);
    }
    const handlePress4 = () => {
        setIsCheck4((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Non-fiction', 'isCheck:', isCheck4);
    }
    const handlePress5 = () => {
        setIsCheck5((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Mystery', 'isCheck:', isCheck5);
    }
    const handlePress6 = () => {
        setIsCheck6((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Horror', 'isCheck:', isCheck6);
    }
    const handlePress7 = () => {
        setIsCheck7((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Children Literature', 'isCheck:', isCheck7);
    }
    const handlePress8 = () => {
        setIsCheck8((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Thriller', 'isCheck:', isCheck8);
    }
    const handlePress9 = () => {
        setIsCheck9((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Sci-Fi', 'isCheck:', isCheck9);
    }
    const handlePress10 = () => {
        setIsCheck10((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Romantic', 'isCheck:', isCheck10);
    }
    const handlePress11 = () => {
        setIsCheck11((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'History', 'isCheck:', isCheck11);
    }
    const handlePress12 = () => {
        setIsCheck12((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Poetry', 'isCheck:', isCheck12);
    }
    const handlePress13 = () => {
        setIsCheck13((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Biography', 'isCheck:', isCheck13);
    }
    const handlePress14 = () => {
        setIsCheck14((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Crime', 'isCheck:', isCheck14);
    }
    const handlePress15 = () => {
        setIsCheck15((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Autobiography', 'isCheck:', isCheck15);
    }
    const handlePress16 = () => {
        setIsCheck16((prevState) => !prevState);
        onPress && onPress();
        console.log('handlePress:', 'Cookbook', 'isCheck:', isCheck16);
    }

    const goSignUp = () => {
        console.log('goSignUp');
        props.navigation.navigate('SignUp');
    }
    const goShowMore = () => {
        console.log('goShowMore')
    }

    return (
        <ImageBackground resizeMode="cover" source={BG_GENRE} style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={'transparent'}
                translucent
            />
            <View style={styles.container1}>
                <Text style={styles.title}>Select Genres</Text>
                {/* <BlurView style={styles.blur}
                    blurType="light"
                    blurAmount={19}> */}
                <View style={styles.backdrop}>
                    <Text style={[styles.titlemini]}>Select the type of book you enjoy reading.</Text>
                    <View style={{ width: '100%' }}>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress} style={[styles.container2, isCheck && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Fiction</Text>
                                {isCheck ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                            <Pressable onPress={handlePress1} style={[styles.container2, isCheck1 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Novel</Text>
                                {isCheck1 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                            <Pressable onPress={handlePress2} style={[styles.container2, isCheck2 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Narrative</Text>
                                {isCheck2 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress3} style={[styles.container2, isCheck3 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Historical Fiction</Text>
                                {isCheck3 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                            <Pressable onPress={handlePress4} style={[styles.container2, isCheck4 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Non-fiction</Text>
                                {isCheck4 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress5} style={[styles.container2, isCheck5 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Mystery</Text>
                                {isCheck5 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                            <Pressable onPress={handlePress6} style={[styles.container2, isCheck6 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Horror</Text>
                                {isCheck6 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress7} style={[styles.container2, isCheck7 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Children's Literature</Text>
                                {isCheck7 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                            <Pressable onPress={handlePress8} style={[styles.container2, isCheck8 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Thriller</Text>
                                {isCheck8 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />
                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress9} style={[styles.container2, isCheck9 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Sci-Fi</Text>
                                {isCheck9 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                            <Pressable onPress={handlePress10} style={[styles.container2, isCheck10 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Romantic</Text>
                                {isCheck10 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                            <Pressable onPress={handlePress11} style={[styles.container2, isCheck11 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>History</Text>
                                {isCheck11 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress12} style={[styles.container2, isCheck12 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Poetry</Text>
                                {isCheck12 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                            <Pressable onPress={handlePress13} style={[styles.container2, isCheck13 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Biography</Text>
                                {isCheck13 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                            <Pressable onPress={handlePress14} style={[styles.container2, isCheck14 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Crime</Text>
                                {isCheck14 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                        </View>
                        <View style={styles.styleView}>
                            <Pressable onPress={handlePress15} style={[styles.container2, isCheck15 && styles.containerChecked]}>
                                <Text style={styles.styleText1}>Autobiography</Text>
                                {isCheck15 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                            <Pressable onPress={handlePress16} style={[styles.container2, isCheck16 && styles.containerChecked]}>
                                <Text style={[styles.styleText1]}>Cookbook</Text>
                                {isCheck16 ? (
                                    <Image style={styles.styleImage} source={ICON_CHECK} />
                                ) : (
                                    <Image style={styles.styleImage} source={ICON_PLUSCIRCLE} />

                                )}
                            </Pressable>
                        </View>
                        <Text style={[styles.titlemini, { marginTop: 8, fontFamily: FONT_FAMILY.quicksand_bold, textAlign: 'center' }]} onPress={goShowMore} >Show more</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Pressable
                            onPress={goSignUp}
                            style={styles.container3}>
                            <Text style={styles.styleText3}>Continue</Text>
                        </Pressable>
                        <Text style={styles.titleEnd}>Select 3 or more genres to continue</Text>
                    </View>
                </View>
                {/* </BlurView> */}
            </View>
        </ImageBackground >
    );
}

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
        top: 77,
        left: 13,
    },
    blur: {
        width: '94%',
        display: 'flex',
        flex: 1,
        // backgroundColor: COLORS.GRAY_BG,
        borderRadius: 12,
        position: 'absolute',
        top: 140,
        left: 13,
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
    },
    backdrop: {
        width: '94%',
        display: 'flex',
        backgroundColor: COLORS.GRAY_BG,
        borderRadius: 12,
        position: 'absolute',
        top: 140,
        left: 13,
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
    },
    titlemini: {
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
    titleEnd: {
        fontSize: 12,
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_regular,
        alignSelf: 'stretch',
        marginTop: 12,
        textAlign: 'center',
    },
    container2: {
        height: 45,
        width: 'auto',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.GRAY_4,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    containerChecked: {
        color: COLORS.Black,
        borderColor: COLORS.White,
        backgroundColor: COLORS.Black,
    },
    styleText1: {
        fontSize: 14,
        color: COLORS.White,
        fontFamily: FONT_FAMILY.quicksand_regular,
        alignSelf: 'stretch',
        marginLeft: 8,
    },
    styleImage: {
        marginStart: 4,
        height: 24,
        width: 24,
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
        backgroundColor: COLORS.BLACK_ACCENT,
    },
    styleText3: {
        fontSize: 14,
        color: COLORS.WHITE_TEXT,
        fontFamily: FONT_FAMILY.quicksand_bold,
        textAlign: 'center',
    },
});

export default Genre;