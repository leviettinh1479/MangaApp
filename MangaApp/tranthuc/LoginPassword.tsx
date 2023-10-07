import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Icon_1 from 'react-native-vector-icons/Ionicons';

const LoginPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={require('../tranthuc/image/Backgound_1.jpg')} style={styles.Container}>
      <View style={styles.View_DangNhap}>
        <Text style={styles.Text_DangNhap }>Log in</Text>
      </View>
      <View style={styles.View_Container}>
        <View style={styles.View_ThongTin}>
          <View>
            <Image style={styles.Image_avt} source={require('../tranthuc/image/Ellipse.png')} />
          </View>
          <View>
            <View>
              <Text style={styles.Text_Name}>John Doe</Text>
              <Text style={styles.Text_Email}>john.doe@example.com</Text>
            </View>
          </View>
          <View>
            <Icon_1 name="checkmark-circle-outline" size={24} color="white" />
          </View>
        </View>
        <Text style={styles.Text_Detail}>Forgot your password? Don’t worry, enter your email to reset your current password.</Text>
        <View style={styles.View_Password}>
          <TextInput placeholder='Password' style={styles.Text_Password} secureTextEntry={!showPassword}
            value={password} onChangeText={setPassword}></TextInput>
          <TouchableOpacity style={styles.Icon_Password} onPress={togglePasswordVisibility}>
            <Icon_1 name={showPassword ? 'eye-off' : 'eye'} size={22} color="black" />
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
  Text_Detail: {
    color: 'white',
    fontSize: 14,
    padding: 10
  },
  Text_Password: {
    fontSize: 16,
    paddingLeft: 10,
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
    fontWeight: 'bold',
  },
  ViewForgot: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
  },
  View_Password: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 14,
    marginTop: 16,
    padding: 3,
    justifyContent: 'space-between'
  },
  Text_Forgot: {
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
    color: 'white',
    fontWeight: 'bold',
  },
  Text_Email: {
    color: 'white',
  },
})