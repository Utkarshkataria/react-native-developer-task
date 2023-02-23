import React from 'react';
import {StyleSheet} from 'react-native';
import {NView} from '../components/index';
import LoginCard from '../components/LoginCard';
import Icon from 'react-native-vector-icons/Ionicons';
export default function LoginScreen() {
  return (
    <NView ct bg="#131319" style={styles.mainViewStyles}>
      <NView style={styles.innerViewStyles}>
        <NView style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'radio-button-off'} size={20} color={'#7F8084'} />
          <Icon name={'ios-close'} size={26} color={'#7F8084'} />
        </NView>
        <NView style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'play-outline'} size={26} color={'#7F8084'} />
          <Icon name={'square-outline'} size={21} color={'#7F8084'} />
        </NView>
      </NView>
      <LoginCard />
    </NView>
  );
}

const styles = StyleSheet.create({
  mainViewStyles: {flex: 1},
  innerViewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 41,
  },
});
