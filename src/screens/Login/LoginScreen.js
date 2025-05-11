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
  // passwordVisible,
  // togglePasswordVisibility,
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


  // const UsernameInput = () => (
  //   <View style={globalStyles.inputContainer1}>
  //     <MaterialCommunityIcons
  //         name={'account-outline'}
  //         size={figmaWidth(15)}
  //         color= {colors.primary}
  //       />
  //     <TextInput
  //       placeholder="user name"
  //       style={globalStyles.input}
  //       placeholderTextColor={colors.placeholderColor}
  //       value={userName}
  //       onChangeText={setUserName}
  //     />
  //   </View>
  // );

  // const PasswordInput = () => (
  //   <View style={[globalStyles.inputContainer1, { marginBottom: figmaHeight(10), flexDirection: 'row', alignItems: 'center' }]}>
  //     <MaterialCommunityIcons
  //         name={'lock-outline'}
  //         size={figmaWidth(15)}
  //         color= {colors.primary}
  //       />
      
  //     <TextInput
  //       placeholder="password"
  //       style={[globalStyles.input, { flex: 1, }]}
  //       placeholderTextColor={colors.placeholderColor}
  //       secureTextEntry={!passwordVisible}
  //       value={password}
  //       onChangeText={setPassword}
        
  //     />
  //     <TouchableOpacity onPress={togglePasswordVisibility}
  //     >
  //       <Feather
  //         name={passwordVisible ? 'eye' : 'eye-off'}
  //         size={figmaWidth(15)}
  //         color={colors.black}
  //       />
  //     </TouchableOpacity>
  //   </View>
  // );

  const ForgotPassword = () => (
    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: figmaHeight(30) }}>
      <Text style={typography.textPoppinsRegular8}>Forgot password?</Text>
    </TouchableOpacity>
  );

  // const SignInButton = () => (
  //   <TouchableOpacity style={globalStyles.Button1}>
  //     <Text style={typography.textPoppinsMedium12}>Sign In</Text>
  //   </TouchableOpacity>
  // );

  const OrDivider = () => (
    <View style = {globalStyles.orWrapper}>
      <Text style={[typography.textPoppinsRegular8,{color: colors.placeholderColor,}]}>or</Text>
    </View>
  );

  const SocialIcons = () => (
    <View style={globalStyles.socialIcons}>
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
    <Text style={typography.textPoppinsRegular10}>
      Don’t have an Account?{' '}
      <Text style={[typography.textPoppinsMedium12,{color: colors.tertiary,}]}>Register now</Text>
    </Text>
  );

  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          {/* <LoginHeader /> */}
          {LoginHeader()}
          {/* <UsernameInput /> */}
          {/* {UsernameInput()} */}
          {/* <PasswordInput password={password} setPassword={setPassword} /> */}

          {/* Custom input for user name  */}
          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="account-outline"
            placeholder="user name"
            value={userName}
            onChangeText={setUserName}
          />
            

          {/* {PasswordInput()} */}
          {/* <PasswordInput
            password={password}
            setPassword={setPassword}
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
          /> */}

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



          {/* <ForgotPassword /> */}
          {ForgotPassword()}
          {/* <SignInButton /> */}
          {/* {SignInButton()} */}

          <CustomButton
            label="Sign In"
            // onPress={handleRegister}
            buttonStyle={{ width: figmaWidth(105), height: figmaHeight(32),marginBottom: figmaHeight(15), }}
            textStyle={{  }}
          />



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
});

export default LoginScreen;
