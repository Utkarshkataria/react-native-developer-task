import {View} from 'react-native';
import React from 'react';

export default function NView({ct, style, children, bg}) {
  return (
    <View
      style={[
        style,
        ct && {justifyContent: 'center', alignItems: 'center'},
        {backgroundColor: bg},
      ]}>
      {children}
    </View>
  );
}
