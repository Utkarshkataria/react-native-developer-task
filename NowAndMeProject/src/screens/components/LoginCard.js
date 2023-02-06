import React from 'react';
import {TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {NView, NText} from './index';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function LoginCard() {
  const navigation = useNavigation();
  const loginButtonClick = () => {
    navigation.navigate('Home');
  };
  return (
    <NView ct bg="#27292D" style={styles.cnt}>
      <NText style={styles.welTxt} fs={14} text="WELCOME BACK" />
      <NText style={styles.loginTxt} fs={18} text="Log into your account" />

      <NView style={{marginTop: 34}}>
        <NText
          style={styles.emHdr}
          fw={'500'}
          fs={14}
          text="Email or Username"
        />

        <TextInput
          style={styles.txtInp1}
          placeholder="Enter Your Email"
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
          <Icon name={'eye-outline'} size={25} color={'#000'} />
        </NView>
        <TouchableOpacity onPress={loginButtonClick} style={styles.loginCnt}>
          <NText style={styles.loginTxt1} fw={'500'} fs={16} text="Login now" />
        </TouchableOpacity>
        <NView style={{flexDirection: 'row'}}>
          <NText style={styles.nRegTxt} fs={14} text="Not registered yet? " />
          <NText style={styles.regTxt} fs={14} text="Register" />
        </NView>
      </NView>
    </NView>
  );
}
const styles = StyleSheet.create({
  cnt: {
    borderColor: '#969696',
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
  },
  txtInp1: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
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
