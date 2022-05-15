import {Text} from 'react-native';
import React from 'react';

export default function NText({style, text}) {
  return (
    <Text style={[style, {fontFamily: 'Inter', fontStyle: 'normal'}]}>
      {text}
    </Text>
  );
}
