// src/screens/Register/RegisterScreen.js

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { figmaHeight, figmaWidth, figmaFontSize } from '../../utils/figmaHelpers';
import colors from '../../themes/colors';
import globalStyles from '../../themes/globalStyles';
import typography from '../../themes/typography';
import fonts from '../../themes/fonts';
import useRegisterViewModel from './RegisterViewModel';

const RegisterScreen = () => {
  const {
    userName,
    setUserName,
    mobileNo,
    setMobileNo,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useRegisterViewModel();

  const RegisterHeader = () => (
    <>
      <TouchableOpacity style={styles.backButton}>
        <Feather name="chevron-left" size={figmaFontSize(18)} color={colors.textPrimary} />
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <Text style={[typography.textPoppinsMedium18, { color: colors.primary }]}>Register now</Text>
        <MaterialCommunityIcons name="account-plus-outline" size={figmaFontSize(18)} color={colors.primary} />
      </View>
        
       <View style =  {{alignSelf:'flex-start',marginBottom: figmaHeight(21),}}>
      <Text style={typography.textPoppinsRegular10}>using your information's</Text>
      </View>
    </>
  );

  const OrDivider = () => (
    <View style={globalStyles.orWrapper}>
      <Text style={[typography.textPoppinsRegular8, { color: colors.placeholderColor }]}>or</Text>
    </View>
  );

  const SocialIcons = () => (
    <View style={globalStyles.socialIcons}>
      <AntDesign name="google" size={figmaFontSize(25)} color="black" />
      <AntDesign name="instagram" size={figmaFontSize(25)} color="black" />
      <Entypo name="facebook" size={figmaFontSize(25)} color="black" />
    </View>
  );

  const AlreadyHaveAccount = () => (
    <Text style={typography.textPoppinsRegular10}>
      Already have an Account?{' '}
      <Text style={[typography.textPoppinsMedium12, { color: colors.tertiary }]}>Sign in</Text>
    </Text>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          {RegisterHeader()}

          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="account-outline"
            placeholder="user name"
            value={userName}
            onChangeText={setUserName}
          />

          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="cellphone"
            placeholder="Mobile no"
            value={mobileNo}
            onChangeText={setMobileNo}
          />

          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="email-outline"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="lock-outline"
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            containerStyle={{ marginBottom: figmaHeight(15), flexDirection: 'row', alignItems: 'center' }}
          />

          <CustomInput
            IconComponent={MaterialCommunityIcons}
            iconName="lock-outline"
            placeholder="Retype password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword={true}
            containerStyle={{ marginBottom: figmaHeight(30), flexDirection: 'row', alignItems: 'center' }}
          />

          <CustomButton
            label="Register"
            onPress={() => {}}
          />

          {OrDivider()}
          {SocialIcons()}
          {AlreadyHaveAccount()}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: figmaHeight(59),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: figmaWidth(10),
    marginBottom: figmaHeight(5),
  },
});

export default RegisterScreen;
