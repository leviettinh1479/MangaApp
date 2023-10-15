import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Icon_1 from 'react-native-vector-icons/Ionicons';
import Icon_2 from 'react-native-vector-icons/FontAwesome6';
import Icon_3 from 'react-native-vector-icons/MaterialIcons';
import Icon_4 from 'react-native-vector-icons/FontAwesome';
import Icon_5 from 'react-native-vector-icons/AntDesign';
import { COLORS, FONT_FAMILY } from '../../theme/theme';

const ProfileDetail = () => {
    const [avatar, setAvatar] = useState(null);

    const handleChooseAvatar = () => {
    };
    return (
        <View style={styles.Container}>
            <View style={styles.View_Container}>
                <View >
                    <TouchableOpacity style={styles.View_Back1}>
                        <View>
                            <Icon_1 name="chevron-back" size={24} color="#000000" />
                        </View>
                        <View >
                            <Text style={styles.Text_Back}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.Text_Back1}>Profile details</Text>
                </View>
                <View></View>
            </View>
            <View style={styles.View_Avatar}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={avatar ? { uri: avatar } : require('../../assets/images/Ellipse.png')}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.uploadIcon} onPress={handleChooseAvatar}>
                        <Icon_5 name="upload" size={18} color="#FF97A3" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text_Avatar}>Change profile picture</Text>
            </View>
            <View style={styles.Duong_Line}></View>
            <TouchableOpacity>
                <Text style={styles.Text_YourName}>Your Name</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>John Doe</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.Text_YourName}>Email</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>john.doe@example.com</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.Text_YourName}>Date of Birth</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>23 December, 1972</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    View_Container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
    },
    View_Container1: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C4C4C4',
    },
    View_Back1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text_Back: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        fontSize: 16,
        color: '#000000',
        marginLeft: 8,
    },
    Text_Back1: {
        fontFamily: FONT_FAMILY.quicksand_bold,
        fontSize: 16,
        color: '#000000',
        paddingRight: 50,
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
        color: COLORS.Black,
        fontFamily: FONT_FAMILY.quicksand_bold,
    },
    Text_Email: {
        fontSize: 14,
        fontFamily: FONT_FAMILY.quicksand_medium,
        color: 'black',
    },
    View_Premuim: {
        backgroundColor: '#FF97A3',
        width: 66,
        height: 29,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    Text_Premuim: {
        fontFamily: FONT_FAMILY.quicksand_regular,
        color: 'black',
        fontSize: 10,
    },
    View_Header: {
        paddingTop: 10,
    },
    Duong_Line: {
        borderBottomColor: '#272956',
        borderBottomWidth: 1,
        marginBottom: 32,
        marginTop: 32,
        marginRight: 16,
        marginLeft: 16,
    },
    View_User: {
        backgroundColor: '#FF97A3',
        padding: 8,
        borderRadius: 8,
    },
    View_Profile2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    View_Back2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    View_Text_Profile: {
        // paddingLeft: 10,
    },
    View_Avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    uploadIcon: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIconText: {
        color: 'white',
    },
    Text_Avatar: {
        paddingTop: 16,
        fontFamily: FONT_FAMILY.quicksand_regular,
        fontSize: 12,
        color: 'black'
    },
    Text_YourName: {
        marginLeft: 16,
        fontSize: 14,
        fontFamily: FONT_FAMILY.quicksand_regular,
        color: '#000000',
        marginBottom: 10,
    },
    TouchableOpacity:{
        marginTop: 24,
    }
})