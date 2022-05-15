import React from 'react';
import {TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {NView, NText} from './index';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginCard() {
  return (
    <NView ct bg="#27292D" style={styles.cnt}>
      <NText style={styles.welTxt} text="WELCOME BACK" />
      <NText style={styles.loginTxt} text="Log into your account" />

      <NView style={{marginTop: 34}}>
        <NText style={styles.emHdr} text="Email or Username" />

        <TextInput
          style={styles.txtInp1}
          placeholder="Enter Your Email"
          placeholderTextColor={'#7F8084'}
        />
        <NView style={styles.rView}>
          <NText style={styles.passTxt} text="Password"></NText>
          <NText style={styles.forTxt} text={'Forgot password?'} />
        </NView>
        <TextInput
          style={styles.txtInput2}
          placeholder="Choose a preferred username"
          placeholderTextColor={'#7F8084'}
        />
        <TouchableOpacity style={styles.loginCnt}>
          <NText style={styles.loginTxt} text="Login now" />
        </TouchableOpacity>
        <NView style={{flexDirection: 'row'}}>
          <NText style={styles.nRegTxt} text="Not registered yet? " />
          <NText style={styles.regTxt} text="Register →" />
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
  welTxt: {color: '#6B6C70', fontSize: 14},
  loginTxt: {color: '#FFFFFF', fontSize: 18},
  emHdr: {color: '#C5C7CA', fontWeight: '500', fontSize: 14},
  txtInp1: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: '#7F8084',
    borderRadius: 4,
    fontSize: 16,
  },
  rView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  passTxt: {color: '#C5C7CA', fontWeight: '500', fontSize: 14},
  forTxt: {color: '#C5C7CA', fontWeight: '500', fontSize: 12},
  txtInput2: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: '#7F8084',
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
  loginTxt: {color: '#FFFFFF', fontWeight: '500', fontSize: 16},
  nRegTxt: {color: '#7F8084', fontSize: 14},
  regTxt: {color: '#fff', fontSize: 14},
});
