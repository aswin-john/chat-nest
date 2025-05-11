import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';

import { figmaWidth, figmaHeight, figmaFontSize } from '../../utils/figmaHelpers';
import colors from '../../themes/colors';
import globalStyles from '../../themes/globalStyles';
import typography from '../../themes/typography';
import fonts from '../../themes/fonts';
import useLoginViewModel from './LoginViewModel'; // ✅ Use MVVM ViewModel


const LoginScreen = () => {
 // ✅ Get all UI state and logic from the ViewModel
 const {
  userName,
  setUserName,
  password,
  setPassword,
} = useLoginViewModel();

  
const LoginHeader = () => (
  <>
    <View style={styles.welcomeWrapper}>
      <Text style={[typography.textRobotoMedium18, { textAlign: 'center' }]}>
        Welcome back! Let’s get you started
      </Text>
    </View>

    <Image
      source={require('../../../assets/images/login-illustration.png')}
      style={styles.image}
      resizeMode="contain"
    />
    
    <View style={[styles.loginWrapper,{width:'100%'}]}>
      <Text style={typography.textPoppinsMedium18}>Login</Text>
    </View>
    
  </>
);


  const ForgotPassword = () => (
    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: figmaHeight(30) }}>
      <Text style={typography.textPoppinsRegular8}>Forgot password?</Text>
    </TouchableOpacity>
  );


  const OrDivider = () => (
    <View style = {globalStyles.orWrapper}>
      <Text style={[typography.textPoppinsRegular8,{color: colors.placeholderColor,}]}>or</Text>
    </View>
  );

  const SocialIcons = () => (
    <View style={globalStyles.socialIcons}>
      <AntDesign
          name={'google'}
          size={figmaFontSize(25)}
          color="black"
        />
      <AntDesign
          name={'instagram'}
          size={figmaFontSize(25)}
          color="black"
        />
      <Entypo
          name={'facebook'}
          size={figmaFontSize(25)}
          color="black"
        />
    </View>
  );

  const RegisterPrompt = () => (
    <Text style={typography.textPoppinsRegular10}>
      Don’t have an Account?{' '}
      <Text style={[typography.textPoppinsMedium12,{color: colors.tertiary,}]}>Register now</Text>
    </Text>
  );

  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>          
          {LoginHeader()}

          {/* Custom input for user name  */}
          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="account-outline"
            placeholder="user name"
            value={userName}
            onChangeText={setUserName}
          />

          {/* Custom input for password  */}
          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="lock-outline"
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            containerStyle={{
              marginBottom: figmaHeight(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}
          />

          {ForgotPassword()}

          {/* Custom button for sign in  */}
          <CustomButton
            label="Sign In"
            // onPress={handleRegister}
            buttonStyle={{ width: figmaWidth(105), height: figmaHeight(32),marginBottom: figmaHeight(15), }}
            textStyle={{  }}
          />

          {OrDivider()}

          {SocialIcons()}

          {RegisterPrompt()}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  welcomeWrapper: {
    marginBottom: figmaHeight(25),
    paddingHorizontal: figmaWidth(26),
  },  
  image: {
    width: figmaWidth(160),    
    height: figmaHeight(160),  
    marginBottom: figmaHeight(20),
  },
  loginWrapper: {
    marginBottom: figmaHeight(20),    
  }, 
});

export default LoginScreen;
