import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { height } = useWindowDimensions();

  return (
    <View style={[styles.container, { paddingVertical: height * 0.05 }]}>
      <Text style={styles.welcomeText}>Welcome back !, Let’s get you started</Text>
      
      <Image
        source={require('../../../assets/images/login-illustration.png')}
        style={[styles.image, { height: height * 0.25 }]}
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
        <Text style={styles.forgotPassword}>Forgot password ?</Text>
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
        Don’t have an Account ?{' '}
        <Text style={styles.registerNow}>Register now</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    marginBottom: 30,
  },
  loginLabel: {
    fontSize: width * 0.045,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#a855f7',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: width * 0.04,
  },
  eyeButton: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontSize: width * 0.035,
    color: '#e11d48',
  },
  signInButton: {
    backgroundColor: '#a855f7',
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '600',
  },
  orText: {
    marginBottom: 10,
    fontSize: width * 0.04,
    color: '#999',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    fontSize: width * 0.06,
  },
  registerText: {
    fontSize: width * 0.035,
    color: '#999',
  },
  registerNow: {
    color: '#a855f7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
