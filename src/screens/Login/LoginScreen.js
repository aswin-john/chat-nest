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

import { figmaWidth, figmaHeight, figmaFontSize } from '../../utils/figmaHelpers'; // adjust path
import colors from '../../themes/colors'; // adjust path as needed


const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome back! Let’s get you started</Text>

          <Image
            source={require('../../../assets/images/login-illustration.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.loginLabel}>Login</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="user name"
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <View style={[styles.inputContainer, { marginBottom: figmaHeight(10), }]}>
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

          <TouchableOpacity style = {{alignSelf:'flex-end',marginBottom: figmaHeight(30),}}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          <View style={styles.socialIcons}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialIcon}>📸</Text>
            <Text style={styles.socialIcon}>f</Text>
          </View>

          <Text style={styles.registerText}>
            Don’t have an Account?{' '}
            <Text style={styles.registerNow}>Register now</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: figmaWidth(40),  
    paddingVertical: figmaHeight(33),  
    backgroundColor: colors.background,
  },
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
  inputContainer: {
    width: '100%',
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: figmaHeight(15),
    paddingHorizontal: figmaWidth(12),
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
  signInButton: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: figmaWidth(105),
    height: figmaHeight(32),
    marginBottom: figmaHeight(15),
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
