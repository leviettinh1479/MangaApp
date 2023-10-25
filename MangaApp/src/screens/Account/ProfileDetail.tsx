import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import Icon_1 from 'react-native-vector-icons/Ionicons';
import Icon_2 from 'react-native-vector-icons/FontAwesome6';
import Icon_3 from 'react-native-vector-icons/MaterialIcons';
import Icon_4 from 'react-native-vector-icons/FontAwesome';
import Icon_5 from 'react-native-vector-icons/AntDesign';
import { COLORS, FONT_FAMILY } from '../../theme/theme';
import { Alert } from 'react-native';


interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const ProfileDetail =({ navigation}:ScreenAProps)=> {
    const [avatar, setAvatar] = useState(null);

    const handleChooseAvatar = () => {
    };

    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('John Doe');
    const [newName, setNewName] = useState('');

    const handleSave = () => {
        setName(newName);
        setModalVisible(false);
    };

    const [isEmailModalVisible, setEmailModalVisible] = useState(false);
    const [email, setEmail] = useState('john.doe@example.com');
    const [newEmail, setNewEmail] = useState('');

    const handleEmailSave = () => {
        if (newEmail.endsWith('@gmail.com')) {
            setEmail(newEmail);
        } else {
            Alert.alert('Email không hợp lệ', 'Vui lòng nhập một email với đuôi @gmail.com');
            return;
        }
        setEmailModalVisible(false);
    };

    const [isDobModalVisible, setDobModalVisible] = useState(false);
    const [dob, setDob] = useState('23-12-1972');
    const [newDay, setNewDay] = useState('');
    const [newMonth, setNewMonth] = useState('');
    const [newYear, setNewYear] = useState('');

    const handleDobSave = () => {
        const isValidDay = parseInt(newDay) >= 1 && parseInt(newDay) <= 31;
        const isValidMonth = parseInt(newMonth) >= 1 && parseInt(newMonth) <= 12;
        const isValidYear = parseInt(newYear) >= 1900 && parseInt(newYear) <= new Date().getFullYear();

        if (isValidDay && isValidMonth && isValidYear) {
            const newDob = `${newDay}-${newMonth}-${newYear}`;
            setDob(newDob);
            setDobModalVisible(false);
        } else {
            Alert.alert('Ngày, tháng, năm không hợp lệ', 'Vui lòng nhập ngày (1-31), tháng (1-12) và năm hợp lệ (từ 1900 đến năm hiện tại)');
        }
    };

    return (
        <View style={styles.Container}>
            <View style={styles.View_Container}>
                <View >
                    <TouchableOpacity style={styles.View_Back1}>
                        <View>
                            <Icon_1 name="chevron-back" size={24} color="#000000" onPress={()=> navigation.goBack()}/>
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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.Text_YourName}>Your Name</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>{name}</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.button_text1}>Chỉnh sửa tên</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập tên mới"
                            onChangeText={(text) => setNewName(text)}
                            value={newName}
                        />
                        <TouchableOpacity onPress={handleSave} style={styles.button}>
                            <Text style={styles.button_text}>Lưu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
                            <Text style={styles.button_text}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setEmailModalVisible(true)}>
                <Text style={styles.Text_YourName}>Email</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>{email}</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={isEmailModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.button_text1}>Chỉnh sửa Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập Email mới"
                            onChangeText={(text) => setNewEmail(text)}
                            value={newEmail}
                        />
                        <TouchableOpacity onPress={handleEmailSave} style={styles.button}>
                            <Text style={styles.button_text}>Lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setEmailModalVisible(false)} style={styles.button}>
                            <Text style={styles.button_text}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setDobModalVisible(true)} style={styles.TouchableOpacity}>
                <Text style={styles.Text_YourName}>Date of Birth</Text>
                <View style={styles.View_Container1}>
                    <View style={styles.View_Back2}>
                        <View style={styles.View_Text_Profile}>
                            <Text style={styles.Text_Back}>{dob}</Text>
                        </View>
                    </View>
                    <View>
                        <Icon_1 name="chevron-forward-outline" size={24} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={isDobModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.button_text1}>Chỉnh sửa Date of Birth</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ngày (1-31)"
                            onChangeText={(text) => setNewDay(text)}
                            value={newDay}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Tháng (1-12)"
                            onChangeText={(text) => setNewMonth(text)}
                            value={newMonth}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Năm (1900-2023)"
                            onChangeText={(text) => setNewYear(text)}
                            value={newYear}
                        />
                        <TouchableOpacity onPress={handleDobSave} style={styles.button}>
                            <Text style={styles.button_text}>Lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setDobModalVisible(false)} style={styles.button}>
                            <Text style={styles.button_text}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    TouchableOpacity: {
        marginTop: 24,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: 350,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 5,
        fontSize: 16,
        fontFamily: FONT_FAMILY.quicksand_regular
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        height: 40,
        marginTop: 10,
    },
    button_text: {
        color: 'white',
        backgroundColor: '#FF97A3',
        width: 150,
        height: 40,
        textAlign: 'center',
        paddingTop: 10,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: FONT_FAMILY.quicksand_regular
    },
    button_text1: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: FONT_FAMILY.quicksand_bold
    }
})