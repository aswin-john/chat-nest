import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { figmaWidth } from '../utils/figmaHelpers';
import colors from '../themes/colors';
import globalStyles from '../themes/globalStyles';

const CustomInput = ({
  IconComponent = MaterialCommunityIcons, // default icon set
  iconName,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  secureIcon = true,
  containerStyle = {},
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  return (
    <View style={[globalStyles.inputContainer1, containerStyle]}>

      {IconComponent && (
        <IconComponent
          name={iconName}
          size={figmaWidth(15)}
          color={colors.primary}
          
        />
      )}

      <TextInput
        placeholder={placeholder}
        style={[globalStyles.input, { flex: 1 }]}
        placeholderTextColor={colors.placeholderColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && showPassword}
      />

      {isPassword && secureIcon && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={figmaWidth(15)}
            color={colors.black}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
