import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors, Typography, height, width} from '../styles';

import LoginSVG from '../assets/svg/LoginSVG';
import QuestionSVG from '../assets/svg/QuestionSVG';
import ForwardButton from '../components/ForwardButton';

function LoginScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <LoginSVG height={height * 0.54} width={width * 1} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTextStyle}>Welcome Back!</Text>
        <TouchableOpacity onPress={() => toggleModal()}>
          <QuestionSVG />
        </TouchableOpacity>
      </View>
      <View style={styles.Dummy}></View>
      <View style={styles.height20} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.signInTextStyle}>Sign In</Text>
        <ForwardButton />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  height20: {
    height: 20,
  },
  height60: {
    height: 60,
  },
  welcomeTextStyle: {
    ...Typography.largeTextBold,
    color: Colors.PRIMARY,
    fontSize: 25,
    fontWeight: 'bold',
  },
  signInTextStyle: {
    ...Typography.mediumTextBold,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeContainer: {
    height: height * 0.05,
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Dummy: {
    height: height * 0.25,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 18,
  },
});
export default LoginScreen;
