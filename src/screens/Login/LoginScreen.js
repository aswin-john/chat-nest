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
  passwordVisible,
  togglePasswordVisibility,
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


  const UsernameInput = () => (
    <View style={globalStyles.inputContainer1}>
      <MaterialCommunityIcons
          name={'account-outline'}
          size={figmaWidth(15)}
          color= {colors.primary}
        />
      <TextInput
        placeholder="user name"
        style={styles.input}
        placeholderTextColor="#999"
        value={userName}
        onChangeText={setUserName}
      />
    </View>
  );

  const PasswordInput = () => (
    <View style={[globalStyles.inputContainer1, { marginBottom: figmaHeight(10), flexDirection: 'row', alignItems: 'center' }]}>
      <MaterialCommunityIcons
          name={'lock-outline'}
          size={figmaWidth(15)}
          color= {colors.primary}
        />
      
      <TextInput
        placeholder="password"
        style={[styles.input, { flex: 1 }]}
        placeholderTextColor="#999"
        secureTextEntry={!passwordVisible}
        value={password}
        onChangeText={setPassword}
        
      />
      <TouchableOpacity onPress={togglePasswordVisibility}
      // style = {{borderWidth:1}}
      >
        <Feather
          name={passwordVisible ? 'eye' : 'eye-off'}
          size={figmaWidth(15)}
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
  );

  const ForgotPassword = () => (
    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: figmaHeight(30) }}>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </TouchableOpacity>
  );

  const SignInButton = () => (
    <TouchableOpacity style={globalStyles.Button1}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>
  );

  const OrDivider = () => (
    <Text style={styles.orText}>or</Text>
  );

  const SocialIcons = () => (
    <View style={styles.socialIcons}>
      {/* <Text style={styles.socialIcon}>G</Text> */}
      <AntDesign
          name={'google'}
          size={figmaFontSize(25)}
          color="black"
        />
      {/* <Text style={styles.socialIcon}>📸</Text> */}
      <AntDesign
          name={'instagram'}
          size={figmaFontSize(25)}
          color="black"
        />
      {/* <Text style={styles.socialIcon}>f</Text> */}
      <Entypo
          name={'facebook'}
          size={figmaFontSize(25)}
          color="black"
        />
      {/* <Text style={styles.socialIcon}>t</Text> */}
    </View>
  );

  const RegisterPrompt = () => (
    <Text style={styles.registerText}>
      Don’t have an Account?{' '}
      <Text style={styles.registerNow}>Register now</Text>
    </Text>
  );

  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          {/* <LoginHeader /> */}
          {LoginHeader()}
          {/* <UsernameInput /> */}
          {UsernameInput()}
          {/* <PasswordInput password={password} setPassword={setPassword} /> */}
          {PasswordInput()}
          {/* <PasswordInput
            password={password}
            setPassword={setPassword}
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
          /> */}


          {/* <ForgotPassword /> */}
          {ForgotPassword()}
          {/* <SignInButton /> */}
          {SignInButton()}
          {/* <OrDivider /> */}
          {OrDivider()}

          {/* <SocialIcons /> */}
          {SocialIcons()}

          {/* <RegisterPrompt /> */}
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
  input: {
    flex: 1,
    paddingVertical: figmaHeight(10),
    fontSize: figmaFontSize(14),
    color: colors.black,
    marginLeft: figmaWidth(4),
  },
  eyeButton: {
    padding: figmaWidth(8),
  },
  forgotPassword: {
    fontSize: figmaFontSize(12),
    color: colors.secondary,
  },
  signInText: {
    color: colors.background,
    fontSize: figmaFontSize(16),
    fontWeight: '600',
  },
  orText: {
    marginBottom: figmaHeight(15),
    fontSize: figmaFontSize(14),
    color: colors.textSecondary,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: figmaWidth(117), 
    height: figmaHeight(25),
    marginBottom: figmaHeight(15),
  },
  socialIcon: {
    fontSize: figmaFontSize(20),
    color: colors.black,
  },
  registerText: {
    fontSize: figmaFontSize(12),
    color: colors.textSecondary,
  },
  registerNow: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
