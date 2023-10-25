import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon_1 from 'react-native-vector-icons/Ionicons';
import Icon_2 from 'react-native-vector-icons/FontAwesome6';
import Icon_3 from 'react-native-vector-icons/MaterialIcons';
import Icon_4 from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONT_FAMILY } from '../../theme/theme';


interface ScreenAProps {
    navigation: any; // or use the correct navigation type from @types/react-navigation
  }
const Account = ({ navigation}:ScreenAProps) => {
    return (
        <View style={styles.Container}>
            <View style={styles.View_Container}>
                <View >
                    <TouchableOpacity style={styles.View_Back1} onPress={() => navigation.navigate('HomeScreen')}>
                        <View>
                            <Icon_1 style={{ color: '#000000' }} name="chevron-back" size={24} color="white" />
                        </View>
                        <View >
                            <Text style={styles.Text_Back}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.Text_Back1}>Account</Text>
                </View>
                <View></View>
            </View>
            <View style={styles.View_Header}>
                <View style={styles.View_ThongTin}>
                    <View>
                        <Image style={styles.Image_avt} source={require('../../assets/images/Ellipse.png')} />
                    </View>
                    <View>
                        <View>
                            <Text style={styles.Text_Name}>John Doe</Text>
                            <Text style={styles.Text_Email}>john.doe@example.com</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.View_Premuim}>
                            <Text style={styles.Text_Premuim}>Premuim</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Duong_Line}></View>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
                    <View style={styles.View_Container}>
                        <View style={styles.View_Back2}>
                            <View style={styles.View_User}>
                                <Icon_2 name="circle-user" size={24} color="white" />
                            </View>
                            <View style={styles.View_Text_Profile}>
                                <Text style={styles.Text_Back}>Profile details</Text>
                            </View>
                        </View>
                        <View>
                            <Icon_1 name="chevron-forward-outline" size={24} color="#EAF4F4" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.View_Container}>
                        <View style={styles.View_Back2}>
                            <View style={styles.View_User}>
                                <Icon_3 name="payment" size={24} color="white" />
                            </View>
                            <View style={styles.View_Text_Profile}>
                                <Text style={styles.Text_Back}>Payment</Text>
                            </View>
                        </View>
                        <View>
                            <Icon_1 name="chevron-forward-outline" size={24} color="#EAF4F4" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.View_Container}>
                        <View style={styles.View_Back2}>
                            <View style={styles.View_User}>
                                <Icon_1 name="star-outline" size={24} color="white" />
                            </View>
                            <View style={styles.View_Text_Profile}>
                                <Text style={styles.Text_Back}>Subscription</Text>
                            </View>
                        </View>
                        <View>
                            <Icon_1 name="chevron-forward-outline" size={24} color="#EAF4F4" />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.Duong_Line}></View>
                <TouchableOpacity>
                    <View style={styles.View_Container}>
                        <View style={styles.View_Back2}>
                            <View style={styles.View_User}>
                                <Icon_4 name="question-circle-o" size={24} color="white" />
                            </View>
                            <View style={styles.View_Text_Profile}>
                                <Text style={styles.Text_Back}>FAQs</Text>
                            </View>
                        </View>
                        <View>
                            <Icon_1 name="chevron-forward-outline" size={24} color="#EAF4F4" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.View_Container}>
                        <View style={styles.View_Back2}>
                            <View style={styles.View_User}>
                                <Icon_1 name="log-out-outline" size={24} color="white" />
                            </View>
                            <View style={styles.View_Text_Profile}>
                                <Text style={styles.Text_Back}>Logout</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account

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
        marginBottom: 24,
        marginTop: 24,
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
        paddingLeft: 10,
    }
})