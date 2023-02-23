import {Text} from 'react-native';
import React from 'react';

export default function NText({style, text, fw, fs}) {
  return (
    <Text
      style={[
        style,
        {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: fw,
          fontSize: fs,
        },
      ]}>
      {text}
    </Text>
  );
}
