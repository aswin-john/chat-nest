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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

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

          <View style={styles.inputContainer}>
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

          <TouchableOpacity>
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
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('5%'),
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  image: {
    width: wp('80%'),
    height: hp('25%'),
    marginBottom: hp('3%'),
  },
  loginLabel: {
    fontSize: RFPercentage(2.8),
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: hp('1.5%'),
    color: '#a855f7',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    paddingHorizontal: wp('3%'),
  },
  input: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    fontSize: RFPercentage(2.3),
  },
  eyeButton: {
    padding: wp('2%'),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: hp('3%'),
    fontSize: RFPercentage(2),
    color: '#e11d48',
  },
  signInButton: {
    backgroundColor: '#a855f7',
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
    marginBottom: hp('3%'),
  },
  signInText: {
    color: '#fff',
    fontSize: RFPercentage(2.5),
    fontWeight: '600',
  },
  orText: {
    marginBottom: hp('1.5%'),
    fontSize: RFPercentage(2.3),
    color: '#999',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('60%'),
    marginBottom: hp('3%'),
  },
  socialIcon: {
    fontSize: RFPercentage(3),
  },
  registerText: {
    fontSize: RFPercentage(2),
    color: '#999',
  },
  registerNow: {
    color: '#a855f7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
