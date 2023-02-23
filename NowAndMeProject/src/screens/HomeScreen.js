import {
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {NText, NView} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ALREADY_HAVE_AN_ACC_TXT,
  CHOOSE_PREFFERED_PASSWORD_TXT,
  COMMENTS_TXT,
  CONTINUE_TXT,
  CREATE_ACC_TXT,
  CREATE_POST_TXT,
  EMAIL_OR_USERNAME_TXT,
  EMAIL_TXT,
  ENTER_EMAIL_TXT,
  ENTER_YOUR_EMAIL_TXT,
  FIVE_MINS_AGO_TXT,
  FORGOT_PASSWORD_TXT,
  HELLO_TXT,
  HOW_ARE_YOU_FEELING_TXT,
  IMAGE_URL_TXT,
  LOGIN_NOW_TXT,
  LOG_INTO_YOUR_ACC_TXT,
  MESSAGE_TXT,
  NOT_REGISTERED_YET,
  PASSWORD_TXT,
  PREFFERED_USERNAME_TXT,
  REGISTER_TXT,
  SIGN_UP_TXT,
  SUB_TITLE_TXT,
  THERESA_WEB_TXT,
  USERNAME_TXT,
  WELCOME_TXT,
} from '../utils/constant';

export default function HomeScreen(props) {
  const signUpBoool = props?.route?.params?.signUpModal || false;
  const [openModal, setOpenModal] = useState(signUpBoool || false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const openPostModal = () => {
    setOpenModal(true);
  };

  const onLoginClick = () => {
    setOpenModal(false);
    setOpenLoginModal(true);
  };

  const onRegisterClick = () => {
    setOpenLoginModal(false);
    setOpenModal(true);
  };
  const loginModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openLoginModal}
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',
          alignContent: 'flex-end',
          flex: 1,
        }}
        onRequestClose={() => {
          setOpenLoginModal(!openLoginModal);
        }}>
        <NView style={{flex: 1, justifyContent: 'flex-end'}}>
          <NView
            bg={'#27292D'}
            style={{
              height: Dimensions.get('window').height / 2,
              backgroundColor: 'green',
            }}>
            <NView
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.closeIconStyles}
                onPress={() => {
                  setOpenLoginModal(false);
                }}>
                <Icon name="close" size={18} color={'#fff'} />
              </TouchableOpacity>
            </NView>
            <NText
              style={{marginTop: 10, color: '#6B6C70', textAlign: 'center'}}
              text={WELCOME_TXT}
            />
            <NText
              fs={18}
              fw="600"
              style={{textAlign: 'center'}}
              text={LOG_INTO_YOUR_ACC_TXT}
            />

            <NView style={{marginTop: 30, marginHorizontal: 16}}>
              <NText text={EMAIL_OR_USERNAME_TXT} />
              <TextInput
                style={styles.enterEmailTxtStyles}
                placeholder={ENTER_EMAIL_TXT}
                placeholderTextColor={'#7F8084'}
              />
            </NView>

            <NView style={{marginHorizontal: 16, marginTop: 16}}>
              <NView
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <NText text={PASSWORD_TXT} />
                <NText text={FORGOT_PASSWORD_TXT} />
              </NView>

              <NView style={styles.viewCntStyles1}>
                <TextInput
                  style={styles.prefUserStyles}
                  placeholder={PREFFERED_USERNAME_TXT}
                  placeholderTextColor={'#7F8084'}
                />
                <Icon
                  name={'eye-outline'}
                  style={{marginTop: 2, marginRight: 8}}
                  size={23}
                  color={'#7F8084'}
                />
              </NView>
            </NView>
            <TouchableOpacity style={styles.loginButtonStyles}>
              <NText
                fs={16}
                fw="500"
                style={{
                  color: '#fff',
                }}
                text={LOGIN_NOW_TXT}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onRegisterClick}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16,
                marginTop: 14,
              }}>
              <NText style={{color: '#7F8084'}} text={NOT_REGISTERED_YET} />
              <NText style={{color: '#C5C7CA'}} text={REGISTER_TXT} />
              <Icon
                name="arrow-right"
                size={12}
                style={{marginTop: 3}}
                color={'#C5C7CA'}
              />
            </TouchableOpacity>
          </NView>
        </NView>
      </Modal>
    );
  };
  const signUpModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',
          alignContent: 'flex-end',
          flex: 1,
        }}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}>
        <NView bg={'transparent'} style={{flex: 1, justifyContent: 'flex-end'}}>
          <NView
            bg={'#27292D'}
            style={{
              height: Dimensions.get('window').height / 1.7,
            }}>
            <NView
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 6,
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  backgroundColor: '#000',
                }}
                onPress={() => {
                  setOpenModal(false);
                }}>
                <Icon name="close" size={18} color={'#fff'} />
              </TouchableOpacity>
            </NView>
            <NText
              style={{textAlign: 'center', marginTop: 10, color: '#6B6C70'}}
              text={SIGN_UP_TXT}
            />
            <NText
              fw="600"
              fs={18}
              style={{textAlign: 'center', color: '#fff', marginBottom: 30}}
              text={CREATE_ACC_TXT}
            />

            <NView style={{marginHorizontal: 16}}>
              <NText text={EMAIL_TXT} />
              <TextInput
                style={styles.emailStyles}
                placeholder={ENTER_YOUR_EMAIL_TXT}
                placeholderTextColor={'#7F8084'}
              />
            </NView>

            <NView style={{marginHorizontal: 16, marginTop: 16}}>
              <NText text={USERNAME_TXT} />
              <TextInput
                style={{
                  height: 40,
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#35373B',
                  borderRadius: 4,
                  fontSize: 16,
                }}
                placeholder={PREFFERED_USERNAME_TXT}
                placeholderTextColor={'#7F8084'}
              />
            </NView>

            <NView style={{marginHorizontal: 16, marginTop: 16}}>
              <NText text={PASSWORD_TXT} />
              <NView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#35373B',
                  borderRadius: 4,
                  marginTop: 8,
                  height: 40,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: '#35373B',
                    borderRadius: 4,
                    fontSize: 16,
                    borderColor: 'transparent',
                  }}
                  placeholder={CHOOSE_PREFFERED_PASSWORD_TXT}
                  placeholderTextColor={'#7F8084'}
                />
                <Icon
                  name={'eye-outline'}
                  style={{marginRight: 8}}
                  size={23}
                  color={'#7F8084'}
                />
              </NView>
            </NView>

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 16,
                backgroundColor: '#4A96FF',
              }}>
              <NText
                fw="500"
                fs={16}
                style={{color: '#FFFFFF'}}
                text={CONTINUE_TXT}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onLoginClick}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16,
                marginVertical: 14,
              }}>
              <NText
                style={{color: '#7F8084'}}
                text={ALREADY_HAVE_AN_ACC_TXT}
              />
              <NText text={'Login'} />
              <Icon
                name="arrow-right"
                size={12}
                style={{marginTop: 3}}
                color={'#C5C7CA'}
              />
            </TouchableOpacity>
          </NView>
        </NView>
      </Modal>
    );
  };
  return (
    <ScrollView style={{backgroundColor: '#131319', flex: 1}}>
      <NView style={{marginHorizontal: 16}}>
        <NText
          fw="500"
          fs={28}
          style={styles.helloTxtStyles}
          text={HELLO_TXT}
        />
        <NText fs={16} style={{color: '#7F8084'}} text={SUB_TITLE_TXT} />
        <NView bg={'#27292D'} style={styles.createPostCnt}>
          <NText style={{color: '#C5C7CA'}} text={CREATE_POST_TXT} />
          <NView bg={'#191920'} style={styles.iconMainCnt}>
            <NView bg={'#27292D'} style={styles.iconInnerCnt}>
              <Icon name={'chat-processing-outline'} size={20} color={'#fff'} />
            </NView>
            <TextInput
              style={styles.txtInputStyles}
              inlineImageLeft="search"
              placeholder={HOW_ARE_YOU_FEELING_TXT}
              placeholderTextColor={'#7F8084'}
            />
          </NView>
          <TouchableOpacity
            style={styles.postButtonPress}
            onPress={openPostModal}>
            <NText fs={14} style={{color: '#fff'}} text={'Post'} />
          </TouchableOpacity>
        </NView>
        {[...Array(5)].map((item, index) => {
          return (
            <NView bg={'#27292D'} style={styles.mainViewMapStyles}>
              <NView
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <NView style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 40, width: 40, borderRadius: 20}}
                    source={{
                      uri: IMAGE_URL_TXT,
                    }}
                  />
                  <NView style={{marginLeft: 16}}>
                    <NText
                      fs={16}
                      style={{color: '#C5C7CA'}}
                      text={THERESA_WEB_TXT}
                    />
                    <NText
                      fs={14}
                      style={{color: '#7F8084'}}
                      text={FIVE_MINS_AGO_TXT}
                    />
                  </NView>
                </NView>
                <Icon name={'dots-horizontal'} size={23} color="#C5C7CA" />
              </NView>
              <NView bg={'#191920'} style={styles.viewCnt}>
                <NView
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    marginRight: 12,
                  }}
                  ct
                  bg={'#27292D'}>
                  <NText
                    style={{color: '#7F8084'}}
                    fs={14}
                    fw={'400'}
                    text={index === 0 ? '👋' : '😞'}
                  />
                </NView>
                <NText
                  style={{color: '#7F8084', textAlign: 'left', flexShrink: 1}}
                  fs={14}
                  fw={'400'}
                  text={MESSAGE_TXT}
                />
              </NView>
              <NView style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="message-reply-outline" size={23} color="#7F8084" />
                <NText
                  style={{color: '#7F8084', marginLeft: 4}}
                  fw={'500'}
                  fs={14}
                  text={COMMENTS_TXT}
                />
              </NView>
            </NView>
          );
        })}
        {openModal && signUpModal()}
        {openLoginModal && loginModal()}
      </NView>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  helloTxtStyles: {
    color: '#C5C7CA',
    marginTop: 80,
    marginBottom: 12,
  },
  createPostCnt: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginTop: 32,
    borderRadius: 8,
    borderColor: '#35373B',
    borderWidth: 2,
  },
  iconMainCnt: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  iconInnerCnt: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInputStyles: {
    borderRadius: 8,
    paddingLeft: 12,
  },
  postButtonPress: {
    backgroundColor: '#4A96FF',
    width: 90,
    paddingVertical: 10,
    paddingHorizontal: 28,
    alignSelf: 'flex-end',
    marginTop: 12,
    borderRadius: 4,
  },
  enterEmailTxtStyles: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#35373B',
    borderRadius: 4,
    fontSize: 16,
  },
  closeIconStyles: {
    marginHorizontal: 6,
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#000',
  },
  loginButtonStyles: {
    backgroundColor: '#4A96FF',
    height: 40,
    marginHorizontal: 16,
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCnt: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 20,
  },
  mainViewMapStyles: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginTop: 16,
    borderRadius: 8,
    borderColor: '#35373B',
    borderWidth: 2,
  },
  emailStyles: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#35373B',
    borderRadius: 4,
    fontSize: 16,
  },
  prefUserStyles: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#35373B',
    borderRadius: 4,
    fontSize: 16,
    borderColor: 'transparent',
  },
  viewCntStyles1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#35373B',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    marginTop: 8,
  },
});
