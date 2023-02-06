import {ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {NText, NView} from './components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor: '#131319', flex: 1}}>
      <NView style={{marginHorizontal: 16}}>
        <NText
          fw="500"
          fs={28}
          style={{
            color: '#C5C7CA',
            marginTop: 80,
            marginBottom: 12,
          }}
          text={'Hello Jane'}
        />
        <NText
          fs={16}
          style={{color: '#7F8084'}}
          text={
            'How are you doing today? Would you like to share something with the community 🤗'
          }
        />
        <NView
          bg={'#27292D'}
          style={{
            paddingVertical: 24,
            paddingHorizontal: 12,
            marginTop: 32,
            borderRadius: 8,
            borderColor: '#35373B',
            borderWidth: 2,
          }}>
          <NText style={{color: '#C5C7CA'}} text={'Create post'} />
          <TextInput
            style={{
              marginTop: 16,
              backgroundColor: '#191920',
              borderRadius: 8,
              paddingLeft: 12,
            }}
            placeholder="How are you feeling today?"
            placeholderTextColor={'#7F8084'}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#4A96FF',
              width: 90,
              paddingVertical: 10,
              paddingHorizontal: 28,
              alignSelf: 'flex-end',
              marginTop: 12,
              borderRadius: 4,
            }}>
            <NText fs={14} style={{color: '#fff'}} text={'Post'} />
          </TouchableOpacity>
        </NView>
        <NView
          bg={'#27292D'}
          style={{
            paddingVertical: 24,
            paddingHorizontal: 12,
            marginTop: 16,
            borderRadius: 8,
            borderColor: '#35373B',
            borderWidth: 2,
          }}>
          <NView style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 40, width: 40, borderRadius: 20}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <NView style={{marginLeft: 16}}>
              <NText fs={16} style={{color: '#C5C7CA'}} text={'Theresa Webb'} />
              <NText fs={14} style={{color: '#7F8084'}} text={'5mins ago'} />
            </NView>
          </NView>
          <NView
            bg={'#191920'}
            style={{
              paddingVertical: 20,
              paddingHorizontal: 12,
              borderRadius: 8,
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <NView
              style={{width: 32, height: 32, borderRadius: 16, marginRight: 12}}
              ct
              bg={'#27292D'}>
              <NText
                style={{color: '#7F8084'}}
                fs={14}
                fw={'400'}
                text={'👋'}
              />
            </NView>
            <NText
              style={{color: '#7F8084', textAlign: 'left', flexShrink: 1}}
              fs={14}
              fw={'400'}
              text={
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
              }
            />
          </NView>
          <NView style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="rocket" size={30} color="#900" />
            <NText
              style={{color: '#7F8084'}}
              fw={'500'}
              fs={14}
              text={'24 comments'}
            />
          </NView>
        </NView>
      </NView>
    </ScrollView>
  );
}
