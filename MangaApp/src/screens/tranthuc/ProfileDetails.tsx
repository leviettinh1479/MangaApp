import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon_1 from 'react-native-vector-icons/AntDesign';


const ProfileDetails = () => {
  const [avatar, setAvatar] = useState(null);

  const handleChooseAvatar = () => {
    // Trong đây, bạn có thể mở hộp thoại chọn ảnh và sau đó cập nhật biến avatar với đường dẫn ảnh đã chọn.
    // Điều này có thể được thực hiện bằng cách sử dụng thư viện mở hộp thoại chọn ảnh cho React Native.
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={avatar ? { uri: avatar } : require('../../assets/images/Ellipse.png')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.uploadIcon} onPress={handleChooseAvatar}>
            <Icon_1 name="upload" size={24} color="#FF97A3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  uploadIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIconText: {
    color: 'white',
  },
});

export default ProfileDetails;
