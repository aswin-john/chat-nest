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
    backgroundColor: '#fff',
    
  },
  welcomeText: {
    fontSize: figmaFontSize(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: figmaHeight(25),
    paddingHorizontal: figmaWidth(26),
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
    color: '#a855f7',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
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
  },
  eyeButton: {
    padding: figmaWidth(8),
  },
  forgotPassword: {
    fontSize: figmaFontSize(12),
    color: '#e11d48',
  },
  signInButton: {
    backgroundColor: '#a855f7',
    borderRadius: 50,
    // width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: figmaHeight(7),
    // paddingHorizontal: figmaWidth(32),
    width: figmaWidth(105),
    height: figmaHeight(32),
    marginBottom: figmaHeight(15),
  },
  signInText: {
    color: '#fff',
    fontSize: figmaFontSize(16),
    fontWeight: '600',
  },
  orText: {
    marginBottom: figmaHeight(15),
    fontSize: figmaFontSize(14),
    color: '#999',
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
  },
  registerText: {
    fontSize: figmaFontSize(12),
    color: '#999',
  },
  registerNow: {
    color: '#a855f7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
