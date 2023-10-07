import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React from 'react'

const LoginEmail = () => {
  return (
    <ImageBackground source={require('../tranthuc/image/Backgound_1.jpg')} style={styles.Container}>
            <View style={styles.DangNhap}>
                <Text style={styles.Text_DangNhap}>Đăng nhập</Text>
            </View>
            <View style={styles.View_Container}>
                <View style={styles.View_Input}>
                    <TextInput placeholder='Email' style={styles.Text_Input_Email}></TextInput>
                </View>
                <TouchableOpacity style={styles.View_Tieptuc}>
                    <Text style={styles.Text_Tieptuc}>Tiếp tục</Text>
                </TouchableOpacity>
                <View style={styles.View_QuenPass}>
                    <TouchableOpacity>
                        <Text style={styles.Text_QuenPass}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View_Vien}>
                    <View style={styles.line} />
                        <Text style={styles.text}>Hoặc</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.View_DangNhap}>
                    <TouchableOpacity style={styles.View_DangNhap1}>
                        <Image style={styles.Image_DangNhap} source={require('../tranthuc/image/Logo_Facebook.png')} />
                        <Text style={styles.Text_DangNhap1}>Đăng nhập với Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View_DangNhap}>
                    <TouchableOpacity style={styles.View_DangNhap1}>
                        <Image style={styles.Image_DangNhap} source={require('../tranthuc/image/Logo_Google.png')} />
                        <Text style={styles.Text_DangNhap1}>Đăng nhập với Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View_DangKy}>
                    <Text style={styles.Text_DangKy}>Chưa có tài khoản? </Text>
                    <TouchableOpacity>
                        <Text style={styles.Text_DangKy1}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
  )
}

export default LoginEmail

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FF97A3',
    },
    DangNhap: {
        paddingTop: 150,
        paddingLeft: 30,
    },
    Text_DangNhap: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    View_Container: {
        backgroundColor: '#313333',
        borderRadius: 20,
        padding: 20,
        margin: 20,
    },
    Text_Input_Email: {
        fontSize: 16,
        paddingLeft: 10,
    },
    View_Tieptuc: {
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        marginTop: 16,
    },
    Text_Tieptuc: {
        backgroundColor: '#FF97A3',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        padding: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    View_DangNhap: {
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        marginTop: 16,
        backgroundColor: 'white',
    },
    View_DangNhap1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Image_DangNhap: {
        marginLeft: 10,
    },
    Text_DangNhap1: {
        marginLeft: 35,
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        padding: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    View_QuenPass: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
    },
    View_Input: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 14,
        marginTop: 16,
        padding: 3,
        justifyContent: 'space-between'
    },
    Text_QuenPass: {
        color: 'white',
    },
    View_Vien: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 14,
        padding: 18,
        color: 'white',
    },
    View_DangKy: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
    },
    Text_DangKy: {
        color: 'white',
    },
    Text_DangKy1: {
        color: 'white',
        fontWeight: 'bold',
    },
})