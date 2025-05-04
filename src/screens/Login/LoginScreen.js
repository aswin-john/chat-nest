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

import { figmaWidth, figmaHeight, figmaFontSize } from '../../utils/figmaHelpers';
import colors from '../../themes/colors';
import globalStyles from '../../themes/globalStyles';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // 👉 Helper components placed BEFORE return
  const LoginHeader = () => (
    <>
      <Text style={styles.welcomeText}>Welcome back! Let’s get you started</Text>
      <Image
        source={require('../../../assets/images/login-illustration.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.loginLabel}>Login</Text>
    </>
  );

  const UsernameInput = () => (
    <View style={globalStyles.inputContainer1}>
      <TextInput
        placeholder="user name"
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );

  const PasswordInput = () => (
    <View style={[globalStyles.inputContainer1, { marginBottom: figmaHeight(10) }]}>
      <TextInput
        placeholder="password"
        style={styles.input}
        placeholderTextColor="#999"
        secureTextEntry={!passwordVisible}
      />
      <TouchableOpacity
        style={styles.eyeButton}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Text>{passwordVisible ? '🙈' : '👁️'}</Text>
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
      <Text style={styles.socialIcon}>G</Text>
      <Text style={styles.socialIcon}>📸</Text>
      <Text style={styles.socialIcon}>f</Text>
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
          <LoginHeader />
          <UsernameInput />
          <PasswordInput />
          <ForgotPassword />
          <SignInButton />
          <OrDivider />
          <SocialIcons />
          <RegisterPrompt />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  welcomeText: {
    fontSize: figmaFontSize(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: figmaHeight(25),
    paddingHorizontal: figmaWidth(26),
    color: colors.textPrimary,
  },
  image: {
    width: figmaWidth(160),    
    height: figmaHeight(160),  
    marginBottom: figmaHeight(20),
  },
  loginLabel: {
    fontSize: figmaFontSize(18),
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: figmaHeight(20),
    color: colors.primary,
  },
  input: {
    flex: 1,
    paddingVertical: figmaHeight(10),
    fontSize: figmaFontSize(14),
    color: colors.textPrimary,
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
    color: colors.textPrimary,
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
