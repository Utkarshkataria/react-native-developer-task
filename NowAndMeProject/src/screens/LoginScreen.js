import React from 'react';
import {NView} from './components/index';
import LoginCard from './components/LoginCard';

export default function LoginScreen() {
  return (
    <NView ct bg="#131319" style={{flex: 1}}>
      <LoginCard />
    </NView>
  );
}
