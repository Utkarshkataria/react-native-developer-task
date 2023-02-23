import React from 'react';
import {TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {NView, NText} from './index';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ENTER_EMAIL, LOGIN_TXT, WELCOME_BACK_TXT} from '../utils/constant';

export default function LoginCard() {
  const navigation = useNavigation();
  const loginButtonClick = () => {
    navigation.navigate('Home');
  };
  const navigationToHomeSignUp = () => {
    navigation.navigate('Home', {
      signUpModal: true,
    });
  };
  return (
    <NView ct bg="#27292D" style={styles.cnt}>
      <NText style={styles.welTxt} fs={14} text={WELCOME_BACK_TXT} />
      <NText style={styles.loginTxt} fs={18} text={LOGIN_TXT} />

      <NView style={{marginTop: 34}}>
        <NText
          style={styles.emHdr}
          fw={'500'}
          fs={14}
          text="Email or Username"
        />

        <TextInput
          style={styles.txtInp1}
          placeholder={ENTER_EMAIL}
          placeholderTextColor={'#7F8084'}
        />
        <NView style={styles.rView}>
          <NText
            style={styles.passTxt}
            fw={'500'}
            fs={14}
            text="Password"></NText>
          <NText
            style={styles.forTxt}
            fw={'500'}
            fs={12}
            text={'Forgot password?'}
          />
        </NView>
        <NView style={styles.passwordTextInputStyle}>
          <TextInput
            style={styles.txtInput2}
            placeholder="Your supersafe password"
            placeholderTextColor={'#7F8084'}
          />
          <Icon
            name={'eye-outline'}
            style={{marginTop: 6}}
            size={23}
            color={'#7F8084'}
          />
        </NView>
        <TouchableOpacity onPress={loginButtonClick} style={styles.loginCnt}>
          <NText style={styles.loginTxt1} fw={'500'} fs={16} text="Login now" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigationToHomeSignUp}
          style={{flexDirection: 'row'}}>
          <NText style={styles.nRegTxt} fs={14} text="Not registered yet? " />
          <NText style={styles.regTxt} fs={14} text="Register" />
          <Icon
            name="md-arrow-forward-outline"
            size={16}
            style={{marginTop: 3}}
            color={'#C5C7CA'}
          />
        </TouchableOpacity>
      </NView>
    </NView>
  );
}
const styles = StyleSheet.create({
  cnt: {
    borderColor: '#7F8084',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 40,
    paddingHorizontal: 12,
  },
  welTxt: {color: '#6B6C70'},
  loginTxt: {color: '#FFFFFF'},
  emHdr: {color: '#C5C7CA'},
  passwordTextInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#35373B',
    borderRadius: 5,
    height: 40,
    backgroundColor: 'blue',
    paddingBottom: 10,
    paddingRight: 5,
    marginTop: 9,
  },
  txtInp1: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,

    borderColor: '#35373B',
    borderRadius: 4,
    fontSize: 16,
  },
  rView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  passTxt: {color: '#C5C7CA'},
  forTxt: {color: '#C5C7CA'},
  txtInput2: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: '#35373B',
    borderRadius: 4,
    fontSize: 16,
    borderColor: 'transparent',
  },
  loginCnt: {
    backgroundColor: '#4A96FF',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginTxt1: {color: '#FFFFFF'},
  nRegTxt: {color: '#7F8084'},
  regTxt: {color: '#C5C7CA'},
});
